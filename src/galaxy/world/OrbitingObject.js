import { BoxGeometry, Color, Mesh, MeshBasicMaterial, Vector3, Vector2 } from 'three';
import Loader from '../../scripts/Loader';
import { OrbitComputer} from '../world/OrbitComputer';
import OrbitTrail from './OrbitTrail'
import { gsap } from 'gsap';

function randomHSLColor(hueRange, satRange, lightRange) {
  const hue = Math.random() * (hueRange[1] - hueRange[0]) + hueRange[0];
  const sat = Math.random() * (satRange[1] - satRange[0]) + satRange[0];
  const light = Math.random() * (lightRange[1] - lightRange[0]) + lightRange[0];
  
  const color = new Color();
  color.setHSL(hue / 360, sat / 100, light / 100);
  return color;
}

export class ObjectInformation {
    constructor({
        tabLabel="LABEL",
        header = "HEADER",
        summary="Summary", // this will go in the box in the 3d view
        body = "BODY",
        role = "",
        tools = "",
        modelPath = "",
        simulateOrbit = false,
        children = [],
        cameraOffset=null,
        effectiveDelta=1,
        scale=null,
        frameGap= new Vector2(0, 0),
        galleryName="",
        trailColor=0x0000ff,
        trailWidth=2,
        childrenMaxSemimajor=0,
    } = {}) {
        this.tabLabel = tabLabel;
        this.header = header;
        this.body = body;
        this.modelPath = modelPath;
        this.simulateOrbit = simulateOrbit;
        this.children = children;
        this.cameraOffset = cameraOffset;
        this.effectiveDelta = effectiveDelta;
        this.scale = scale;
        this.frameGap = frameGap;
        this.images = {};
        this.galleryName=galleryName;
        this.role = role;
        this.tools = tools;
        this.summary = summary;
        this.trailColor = trailColor;
        this.trailWidth = trailWidth;
        this.childrenMaxSemimajor = childrenMaxSemimajor;
    }
}

export class OrbitingObject {
    constructor(orbitObj, objectInfo, orbitParams) {
        this.orbitObj = orbitObj;
        this.info = objectInfo;
        this.params = orbitParams;
        this.currentRadius = 0;
        this.object = null;
        this.DEG2RAD = 3.1415 / 180;
        this.R = [];
        this.deltaScale = objectInfo.effectiveDelta;
        this.updateTrail = false;
        this.updateTrailRecompute = false;
        let off = new Vector3();
        if (orbitObj) {
            off = orbitObj.position;
        }
        this.trail = new OrbitTrail({
            orbitParams: this.params,
            offset: off,
            color: randomHSLColor([0, 360], [30, 60], [20, 50]),
            thickness: objectInfo.trailWidth,
        })
    }

    async Initialize(trueAnomaly, scene) {
        this.params.trueAnomaly = trueAnomaly;

        // If no model is specified just create a box, otherwise load the model
        if (this.info.modelPath == "") {
            const geo = new BoxGeometry(1, 1);
            const mat = new MeshBasicMaterial(0xFFFFFF);
            mat.transparent = true;
            this.object = new Mesh(geo, mat);
        } else {
            this.object = await new Loader().loadModel(this.info.modelPath);
        }

        if (this.info.scale != null) {
            this.object.scale.set(this.info.scale.x, this.info.scale.y, this.info.scale.z);
        }

        scene.add(this.object);
        scene.add(this.trail.line);
        return this.object;
    }

    Update(deltaTime) {
        if (this.updateTrail || this.updateTrailRecompute) {
            this.trail.update(this.orbitObj.position, this.updateTrailRecompute);
        }
        this.object.rotation.y += 8 * deltaTime * this.DEG2RAD;
        this.UpdateRelativePosition();
    }

    // Manually update the true anomaly instead of solving Kepler's equation
    // Radius dependent so the object moves faster at periapsis
    // Kepler orbits determine that speed is inversely proportional to the radius squared
    UpdateTrueAnomaly() {
        let delta = 1;
        const periapsis = this.params.semimajorAxis * (1 - this.params.eccentricity);
        const apoapsis = this.params.semimajorAxis * (1 + this.params.eccentricity);

        const invMin = 1 / (apoapsis * apoapsis); // slowest at apoapsis
        const invMax = 1 / (periapsis * periapsis); // fastest at periapsis
        const invR = 1 / (this.currentRadius * this.currentRadius);
        const t = (invR - invMin) / (invMax - invMin);
        delta = 0.4 + t * (1.0 - 0.4);

        this.params.trueAnomaly += delta * this.deltaScale * (Math.PI / 180);
        this.params.trueAnomaly %= (2 * Math.PI);
    }

    UpdateRelativePosition() {
        // Don't do anything if we don't want to simulate the orbit
        if (!this.info.simulateOrbit) {
            return;
        }

        // Update the true anomaly based on the current distance from the focus
        this.UpdateTrueAnomaly();

        // Static helper to get the inertial position and radius
        const inertialPosition = OrbitComputer.getInertialPosition(this.params);
        this.currentRadius = inertialPosition[3];

        // Offset the inertial position by the world position of the center body
        this.object.position.x = inertialPosition[0] + this.orbitObj.position.x;
        this.object.position.y = inertialPosition[1] + this.orbitObj.position.y;
        this.object.position.z = inertialPosition[2] + this.orbitObj.position.z;
    
    }

    ResetDelta() {
        this.deltaScale = this.info.effectiveDelta;
    }

    TurnOff() {
        this.info.simulateOrbit = false;
        if (this.object.isMesh && this.object.material) {
            this.object.material.opacity = 0;
        }

        const mats = [];
        this.object.traverse( child => {
            if (child.isMesh && child.material) {
                child.material.transparent = true;
                mats.push(child.material);
            }
        });

        if (mats.length == 0) {
            return;
        }
        mats.forEach(m => {
            m.opacity = 0;
        })
        this.FadeTrail(0);
    }

    FadeTrail(target) {
        this.trail.line.material.depthWrite = target != 0;
        gsap.to(this.trail.line.material, {
            opacity: target,
            duration: 0.75,
            ease: "expo.out"
        });
    }

    FadeObject(target, completeCallback=null) {
        this.FadeTrail(target);

        if (this.object.isMesh && this.object.material) {
            gsap.to(this.object.material, {
                opacity: target,
                duration: 0.75,
                ease: "expo.out"
            });
        }

        const mats = [];
        this.object.traverse( child => {
            if (child.isMesh && child.material) {
                child.material.transparent = true;
                mats.push(child.material);
            }
        });

        if (mats.length == 0) {
            if (completeCallback) { completeCallback(); }
            return;
        }

        gsap.to(mats, {
            opacity: target,
            duration: 0.75,
            ease: "expo.out", 
            onComplete: () => {
                if (completeCallback) {
                    completeCallback();
                } 
            },
        });
    }
}
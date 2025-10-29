import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from 'three'
import { clamp } from 'three/src/math/MathUtils.js';
import Loader from '../../../scripts/Loader';

// https://en.wikipedia.org/wiki/Orbital_elements
export class OrbitParams {
    constructor({
        semimajorAxis=0,
        eccentricity=0,
        inclination=0,
        raan=0,
        argPeriapsis=0,
        trueAnomaly=0
    } = {}) {
        this.semimajorAxis=semimajorAxis;
        this.eccentricity=eccentricity;
        this.inclination=inclination;
        this.raan=raan;
        this.argPeriapsis=argPeriapsis;
        this.trueAnomaly=trueAnomaly
    }
}

export class ObjectInformation {
    constructor({
        tabLabel="LABEL",
        header = "HEADER",
        body = "BODY",
        modelPath = "",
        simulateOrbit = false,
        children = [],
        cameraOffset=null,
        effectiveDelta=1,
    } = {}) {
        this.tabLabel = tabLabel;
        this.header = header;
        this.body = body;
        this.modelPath = modelPath;
        this.simulateOrbit = simulateOrbit;
        this.children = children;
        this.cameraOffset = cameraOffset;
        this.effectiveDelta = effectiveDelta;
    }
}

export class OrbitingObject {
    constructor(orbitObj, objectInfo, orbitParams) {
        this.orbitObj = orbitObj;
        this.info = objectInfo;
        this.params = orbitParams;
        this.currentRadius = 0;
        this.inertialPosition = new Vector3();
        this.object = null;
        this.DEG2RAD = 3.1415 / 180;
        this.R = [];
        this.minRadius = Infinity;
        this.maxRadius = -Infinity;
        this.deltaScale = objectInfo.effectiveDelta;

        // The orbital elements are not expected to change relative to the center body
        if (this.info.simulateOrbit){
            this.UpdateRadius();
            this.R = this.ComputeTransformMatrix();
        }
    }

    async Initialize(trueAnomaly) {
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
        return this.object;
    }

    Update(deltaTime) {
        this.object.rotation.y += 8 * deltaTime * this.DEG2RAD;
        this.UpdateRelativePosition();
    }

    // Manually update the true anomaly instead of solving Kepler's equation
    // Radius dependent so the object moves faster at periapsis
    // Kepler orbits determine that speed is inversely proportional to the radius squared
    UpdateTrueAnomaly(r) {
        let delta = 1;
        if (this.minRadius != Infinity && this.maxRadius != -Infinity && this.minRadius != this.maxRadius) {
            const invMin = 1 / (this.maxRadius * this.maxRadius); // slowest at apoapsis
            const invMax = 1 / (this.minRadius * this.minRadius); // fastest at periapsis
            const invR = 1 / (r * r);
            const t = (invR - invMin) / (invMax - invMin);
            delta = 0.4 + t * (1.0 - 0.4);
        }

        this.params.trueAnomaly += delta * this.deltaScale * (Math.PI / 180);
        this.params.trueAnomaly %= (2 * Math.PI);
    }

    UpdateRelativePosition() {
        // Don't do anything if we don't want to simulate the orbit
        if (!this.info.simulateOrbit) {
            return;
        }

        // Update the true anomaly based on the current distance from the focus
        this.UpdateTrueAnomaly(this.currentRadius);

        // With the new true anomaly, compute the current radius
        // This keeps track of min and max radius for normalization over time
        this.UpdateRadius()  

        // Now compute the position in orbit
        const r_pqw = new Vector3(this.currentRadius * Math.cos(this.params.trueAnomaly), this.currentRadius * Math.sin(this.params.trueAnomaly), 0);
    
        // Now we use the rest of the orbit elements to covert local orbit space to global inertial space,
        // Where inertial is relative to the body this is orbiting
        this.inertialPosition.set(
            this.R[0][0] * r_pqw.x + this.R[0][1] * r_pqw.y + this.R[0][2] * r_pqw.z,
            this.R[1][0] * r_pqw.x + this.R[1][1] * r_pqw.y + this.R[1][2] * r_pqw.z,
            this.R[2][0] * r_pqw.x + this.R[2][1] * r_pqw.y + this.R[2][2] * r_pqw.z
        );

        this.object.position.x = this.inertialPosition.x + this.orbitObj.position.x;
        this.object.position.y = this.inertialPosition.y + this.orbitObj.position.y;
        this.object.position.z = this.inertialPosition.z + this.orbitObj.position.z;
    
    }

    ComputeTransformMatrix() {
        // https://en.wikipedia.org/wiki/Perifocal_coordinate_system
        const cRaan = Math.cos(this.params.raan);
        const sRaan = Math.sin(this.params.raan);
        const cI = Math.cos(this.params.inclination);
        const sI = Math.sin(this.params.inclination);
        const cW = Math.cos(this.params.argPeriapsis);
        const sW = Math.sin(this.params.argPeriapsis);

        let R = [];
        return R = [
            [(cRaan*cW) - (sRaan*cI*sW), -(cRaan*sW) - (sRaan*cI*cW), sRaan * sI],
            [(sRaan*cW) + (cRaan*cI*cW), -(sRaan*sW) + (cRaan*cI*cW), -cRaan*sI],
            [sI*sW, sI*cW, cI]
        ];
    }

    UpdateRadius() {
        this.currentRadius = (this.params.semimajorAxis * (1 - (this.params.eccentricity * this.params.eccentricity))) / (1 + (this.params.eccentricity * Math.cos(this.params.trueAnomaly)));
    
        if (this.currentRadius > this.maxRadius) {
            this.maxRadius = this.currentRadius;
        }

        if (this.currentRadius < this.minRadius) {
            this.minRadius = this.currentRadius;
        }
    }

    ResetDelta() {
        this.deltaScale = this.info.effectiveDelta;
    }

    TurnOff() {
        this.info.simulateOrbit = false;
        this.object.material.opacity = 0;
    }
}
import * as THREE from 'three'
import { LineGeometry } from 'three/addons/lines/LineGeometry.js'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { OrbitParams, OrbitComputer } from './OrbitComputer'

// Create a trail that visualizes an entire orbit
export default class OrbitTrail {
    constructor({
        orbitParams=null,
        resolution=50,
        color=0x0000ff,
        offset=new THREE.Vector3(),
        thickness=2,
    }={}) {
        this.orbitParams = orbitParams;
        this.resolution = resolution;
        this.color = color;
        this.offset = offset;
        this.points = [];
        this.lineGeo = new LineGeometry();
        this.lineMat = new LineMaterial({
            color: this.color,
            worldUnits: true,
            linewidth: thickness,
            transparent: true,
        });
        this.line = new THREE.Mesh(this.lineGeo, this.lineMat);

        this.computeTrail();
    }

    computeTrail() {
        if (this.orbitParams == {}) {
            console.warn("Orbital elements are null during trail calculation!");
            return;
        } else if (this.resolution <= 2) {
            console.warn("Trail resolution is not high enough for a valid trail!");
            return;
        }

        const stepSize = (2 * Math.PI) / this.resolution;
        this.points = [];
        for (let i = 0; i <= this.resolution; i++) {
            this.orbitParams.trueAnomaly = i * stepSize;
            const inrtl = OrbitComputer.getInertialPosition(this.orbitParams);
            this.points.push(new THREE.Vector3(
                inrtl[0],
                inrtl[1],
                inrtl[2]
            ));
        }
        this.lineGeo.setFromPoints(this.points);
    }

    // All points in the trail need to be updated with the central body's position
    update(offset, recomputeOrbit = false) {
        const relativePoints = [];
        for (let i = 0; i < this.points.length; i++) {
            relativePoints.push(new THREE.Vector3(
                this.points[i].x + offset.x,
                this.points[i].y + offset.y,
                this.points[i].z + offset.z));
        }
        this.line.geometry.setFromPoints(relativePoints);
    }
}
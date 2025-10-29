import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3} from 'three'

export default class Clarus extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 45;
        const w = 15;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.3,
            semimajorAxis: .7,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "CLARUS",
            header: "Clarus Engineering Corporation",
            body: "Fiber. Optic. Polishing. That is what I worked on here!",
            modelPath: "",
            cameraOffset: new Vector3(.2, .1, .2),
            effectiveDelta: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
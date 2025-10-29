import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3} from 'three'

export default class PersonalPlanet extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 50;
        const w = 25;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 10,
            eccentricity: 0.25,
            semimajorAxis: 25,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "PERSONAL",
            header: "PERSONAL VENTURES",
            body: "Ventures here is a loose term. This describes what I am interested in, creative, technical, and anything in between.",
            modelPath: "",
            cameraOffset: new Vector3(1, 1, 2),
            effectiveDelta: 0.4,
        });

        super(orbitTarget, info, params);
    }
}
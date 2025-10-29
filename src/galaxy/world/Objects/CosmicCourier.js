import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3} from 'three'

export default class CosmicCourier extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 50;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.1,
            semimajorAxis: 1,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "COURIER",
            header: "COSMIC COURIER",
            body: "Educational technology game that ...",
            modelPath: "",
            cameraOffset: new Vector3(.2, .1, .2),
            effectiveDelta: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
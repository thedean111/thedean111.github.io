import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3} from 'three'

export default class WorkPlanet extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 90;
        const w = 45;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.2,
            semimajorAxis: 20,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "WORK",
            header: "WORK EXPERIENCE",
            body: "This content should be an overview of what to expect in this section!",
            modelPath: "",
            cameraOffset: new Vector3(1, 1, 2),
            effectiveDelta: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
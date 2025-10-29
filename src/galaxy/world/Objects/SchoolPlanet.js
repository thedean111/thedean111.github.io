import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3} from 'three'

export default class SchoolPlanet extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 28;
        const w = 45;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.4,
            semimajorAxis: 35,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "SCHOOL",
            header: "SCHOOL PROJECTS",
            body: "Meaningful school projects (e.g. grad school projects).",
            modelPath: "",
            cameraOffset: new Vector3(1, 1, 2),
            effectiveDelta: 0.2,
        });

        super(orbitTarget, info, params);
    }
}
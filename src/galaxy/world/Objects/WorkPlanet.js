import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class WorkPlanet extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 0;
        const w = 45;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.2,
            semimajorAxis: 125,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "WORK",
            header: "WORK EXPERIENCE",
            summary: "Formal work experience.",
            body: "I believe its important to pursue passion, and I have had some amazing opportunities that allowed me to grow while contributing to work I care about.<br><br>This content provides a detailed overview of my formal work experience.",
            modelPath: "models/laptop.glb",
            cameraDistance: 60,
            effectiveDelta: 0.5,
            frameGap: new Vector2(20, 35),
            childrenMaxSemimajor: 35,
        });

        super(orbitTarget, info, params);
    }
}
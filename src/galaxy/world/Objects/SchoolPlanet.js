import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class SchoolPlanet extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 65;
        const w = 45;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.4,
            semimajorAxis: 175,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "SCHOOL",
            header: "SCHOOL PROJECTS",
            body: "Earned:<br>-Bachelors of Science in Aerospace Engineering<br>-Minor in Computing and Devices<br><br>In Progress:<br>-Masters of Science in Computer Science (Human-Computer Interaction)<br><br>This content provides an overview of my most substantial school projects. Each of these projects has helped my technical abilities grow, and has deepened my understanding of software development.",
            modelPath: "models/georgiaTech.glb",
            cameraOffset: new Vector3(-15, 10, 25),
            effectiveDelta: 0.2,
            frameGap: new Vector2(20, 35),
        });

        super(orbitTarget, info, params);
    }
}
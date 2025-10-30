import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class About extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 45;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.05,
            semimajorAxis: 20,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "ABOUT",
            header: "About This Portfolio",
            body: "Tools:<br>Javascript, HTML, VITE, NodeJS, three.js, GSAP.<br><br>All of the tools listed above were learned mostly for this project. It has been a great way to familiarize myself with common front-end tooling and has only increased my interest in user experience design and development.<br><br>Working with three.js on this project has also been a great way to apply my game development and computer graphics knowledge in a more practical way.",
            modelPath: "models/aboutIcon.glb",
            cameraOffset: new Vector3(5, 4, 8),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),

        });

        super(orbitTarget, info, params);
    }
}
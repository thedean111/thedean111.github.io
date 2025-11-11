import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class About extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 15;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.5,
            semimajorAxis: 35,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "ABOUT",
            header: "Portfolio",
            tools: "Javascript, HTML, VITE, NodeJS, three.js, GSAP",
            role: "Software Engineer",
            summary: "About this portfolio. It is made in Javascript and utilizes the Node.js, three.js, GSAP, and swiper libraries.",
            body: "All of the tools used were learned mostly for this project. It has been a great way to familiarize myself with common front-end tooling and has only increased my interest in user experience design and development.<br><br>Working with three.js on this project has also been a great way to apply my game development and computer graphics knowledge in a more practical way.<br><br>The orbits present in the 3D scene are implemented using formulation from spacecraft flight dynamics, as such this website is somewhat of a learning tool for orbital mechanics.",
            modelPath: "models/aboutIcon.glb",
            cameraDistance: 5,
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
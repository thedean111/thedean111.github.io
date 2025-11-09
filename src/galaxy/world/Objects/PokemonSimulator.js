import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class PokemonSimulator extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 60;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.2,
            semimajorAxis: 18,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "POKEMON",
            header: "Pokemon Battle Simulator Web App",
            tools: "React, Docker, Java, Spring, Figma, Postgres",
            role: "Front End Designer & Developer, Software Architect",
            summary: "A simple web application that abstractly simulated Pokemon battles. Its built with containerized Docker services and is implemented with a React/Java tech stack.",
            body: "In this project my team developed a Pokemon battle simulator web application as part of a graduate course. This project required formal system architecting and web app development.<br><br>My contributions to this project include:<br>- UML diagram development (class and sequence),<br>- UI design in Figma,<br>- Front end implementation using React.js,<br>- Postgres database schema design,<br>- Assistance with back-end domain logic.",
            modelPath: "models/pokeball.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            galleryName: "pokemon",
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
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
            body: "In this project my team developed a Pokemon battle simulator web application. This is a containerized projects that communicates through web sockets on a local device.<br><br>My main contributions to this project were on the front-end work, which includes the design and development of the interface using Figma and React.<br><br>This was my first experience with web apis, authentication, and containerized microservices.",
            modelPath: "models/pokeball.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
        });

        super(orbitTarget, info, params);
    }
}
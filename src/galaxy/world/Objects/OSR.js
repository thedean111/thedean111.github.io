import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class OSR extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 25;
        const w = 55;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.1,
            semimajorAxis: 23,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "OSR",
            header: "Odyssey Space Research",
            role: "Aerospace Engineer",
            tools: "C++, Git, Python, MATLAB, Trick",
            summary: "Currently, I work full-time as an Aerospace Engineer at Odyssey Space Research. I am supporting NASA and Lockheed Martin on the Orion project, a Multi-Purpose Crewed Vehicle (MPCV) that is being designed for the Artemis mission.",
            body: "At Odyssey Space Research I support the Lockheed Martin team that is contributing to NASA's Orion project. Specifically, I work on a team that develops, runs, and analyzes spaceflight simulations for rendez-vous proximity operations and docking (RPOD).<br><br>Our team works in a C++/Python hybrid environment by leveraging NASA's trick simulation environment.<br><br>The C++ models I write are designed to emulate guidance, navigation, and control (GNC) behaviors that are used for systems testing, CONOPS evaluation, and astronaut training.",
            modelPath: "models/orion.glb",
            cameraDistance: 5,
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(20, 35),
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
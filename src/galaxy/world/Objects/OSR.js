import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class OSR extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 70;
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
            header: "Odyssey Space Research LLC.",
            body: "Tools:<br>C++, Git, Python, MATLAB, Trick<br><br>At Odyssey I support the Lockheed Martin team that is contributing to NASA's Orion project. Specifically, I work on C++ models that are designed to emulate guidance, navigation, and control (GNC) behaviors during rendez-vous proximity operations and docking (RPOD).<br><br>These models are used for systems testing, CONOPS evaluation, and astronaut training.",
            modelPath: "models/orion.glb",
            cameraOffset: new Vector3(5, 6, 10),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(20, 35),
        });

        super(orbitTarget, info, params);
    }
}
import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class Clarus extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 15;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.1,
            semimajorAxis: 30,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "CLARUS",
            header: "Clarus Engineering",
            tools: "Arduino (C++), Basic Electronics",
            role: "Software Developer",
            summary: "Software-based internship for the CILA 2 Fiber Optic Polishing System.",
            body: "At Clarus I contributed to the software development of the CILA 2 Fiber Optic Polishing System. This work included:<br>- Refactoring of the existing codebase,<br>- Usability improvements on the LCD user interface,<br>- Development of smoothing algorithms for raw inertial measurement unit (IMU) data.",
            modelPath: "models/clarus.glb",
            cameraDistance: 10,
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            trailWidth: 0.5,

        });

        super(orbitTarget, info, params);
    }
}
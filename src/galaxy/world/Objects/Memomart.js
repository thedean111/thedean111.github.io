import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class Memomart extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 10;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.05,
            semimajorAxis: 15,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "MEMOMART",
            header: "MEM-O-MART - FREE MEMORIES",
            body: "Tools:<br>Python, Opencv, Raspberry Pi 4, Thermal printer, Webcam, Basic electronics<br><br>MEM-O-MART is a freestanding analog photo booth box that is designed to foster collaboration, intrigue, and memorable moments. Myself and a few friends leveraged our technical skills to transform our idea into a tangible service that has had pop-up installations on the Atlanta Beltline and formalized event installations. Our team employs a user-centered design approach where every feature and implementation is informed by active field testing and user research.<br><br>My primary contributions to this project are design and development of the software and electronic architecture. This includes:<br>- The conception of a system daemon that satisfies our functional needs,<br>-The design of a settings framework so team members can easily adjust the service,<br>- Refinement of interfaces so the software can properly communicate with the webcam, printer, and button.",
            modelPath: "models/memomart.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
        });

        super(orbitTarget, info, params);
    }
}
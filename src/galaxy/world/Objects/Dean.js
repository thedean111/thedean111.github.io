import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import { Vector3, Vector2 } from 'three'

export default class Dean extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const params = new OrbitParams({});

        const info = new ObjectInformation({
            simulateOrbit: false,
            tabLabel: "D34N",
            header: "D34N-B4DR",
            summary: "Welcome to my solar system!<br><br>The 3D view may be explored by clicking the tabs in the bottom left.<br><br>The 'TELEMETRY' button will display more details on objects in this system.",
            body: "This website is a creative manifestation of my portfolio! It documents most of my skills and the projects that I feel proud to show.<br><br>This telemetry screen was created to provide a more typical webpage experience while still trying to fit in the themes of the project.",
            modelPath: "models/dean_lowPoly.glb",
            cameraOffset: new Vector3(-50, 120, 400),
            scale: new Vector3(6, 6, 6),
            frameGap: new Vector2(10, 25),
            childrenMaxSemimajor: 250,
        });

        super(orbitTarget, info, params);
    }
}
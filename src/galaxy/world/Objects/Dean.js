import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import { Vector3, Vector2 } from 'three'

export default class Dean extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const params = new OrbitParams({});

        const info = new ObjectInformation({
            simulateOrbit: false,
            tabLabel: "D34N",
            header: "D34N-B4DR",
            body: "Welcome to my solar system--explore the system by clicking the tabs in the bottom left! ",
            modelPath: "models/dean_lowPoly.glb",
            cameraOffset: new Vector3(-65, 65, 200),
            scale: new Vector3(6, 6, 6),
            frameGap: new Vector2(20, 35),
        });

        super(orbitTarget, info, params);
    }
}
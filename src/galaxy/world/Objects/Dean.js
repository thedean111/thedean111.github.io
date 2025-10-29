import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import { Vector3} from 'three'

export default class Dean extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const params = new OrbitParams({});

        const info = new ObjectInformation({
            simulateOrbit: false,
            tabLabel: "D34N",
            header: "D34N-B4DR",
            body: "The content right here should be a description about DEAN! I need to find a way to easily write a .json or something so I can just load up these details. Does it make sense to put this all in a string?<br><br> This is me trying a break!",
            modelPath: "models/dean_lowPoly.glb",
            cameraOffset: new Vector3(-15, 15, 40),
        });

        super(orbitTarget, info, params);
    }
}
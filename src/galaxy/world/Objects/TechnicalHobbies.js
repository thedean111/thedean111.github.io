import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class TechnicalHobbies extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 5;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.1,
            semimajorAxis: 20,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "TECHNICAL",
            header: "TECHNICAL INTERESTS",
            summary: "Hobbies and personal projects that leverage my technical development skill set--CAD, programming, electronics, and 3D printing.",
            body: "Game Development:<br>I am experienced in the Unity game engine and Blender 3D modeling software from years of hobbyist dabbling. I enjoy learning about real-time computing techniques and have personally created versions of procedurally generated terrain, mesh rendering, and building systems.<br><br>3D Printing:<br>I have been 3D printing models for many years now, and I enjoy creating items for both functional and artistic purposes. Inspired by my favorite media, I recreate characters and paint them for gifts or display in my own space.<br><br>Product Development:<br>Creating functional products has become a way for me to productively apply my skills. In addition to MEM-O-MART, I created a functional bedside clock that prints messages to the screen every morning.",
            modelPath: "models/printer3D.glb",
            cameraDistance: 10,
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            galleryName: "technical",
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
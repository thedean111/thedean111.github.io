import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class TechnicalHobbies extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 50;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.05,
            semimajorAxis: 20,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "TECHNICAL",
            header: "TECHNICAL INTERESTS",
            body: "Part of my creative interests involve some skills that are more technical. For some of my hobbies I enjoy indie game development, 3D printing, and product development.<br><br>Game Development:<br>I am experienced in the Unity game engine and Blender 3D modeling software from years of hobbyist dabbling. I enjoy learning about technical real-time computing techniques and have personally created versions of procedurally generated terrain, procedural game characters, mesh rendering, and building systems.<br><br>3D Printing:<br>I have been 3D printing models for many years now, and I enjoy creating items for both functional and artistic purposes. Inspired by my favorite media, I recreate characters and paint them for gifts or display in my own space.<br><br>Product Development:<br>Creating functional products has recently become a more realistic interest of mine, and a way to productively apply my skills. In addition to MEM-O-MART, I created a functional bedside clock that prints messages to the screen every morning.",
            modelPath: "models/printer3D.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
        });

        super(orbitTarget, info, params);
    }
}
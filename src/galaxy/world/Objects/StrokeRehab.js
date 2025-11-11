import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class StrokeRehab extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 77.5;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.01,
            semimajorAxis: 22,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "REHABILITATION",
            header: "Haptic Rehabilitation App",
            tools: "Unity, C#, Figma, Android Studio, Java, Google MediaPipe",
            role: "Game Developer (Software, UI)",
            summary: "Gesture-based game that is designed to assist in the rehabilitation of stroke survivors. Contributed to an existing Android Studio and Unity development environment that implemented Google MediaPipe's gesture recognition model.",
            body: "In this project I contributed to the development of a mobile app that was designed to help stroke survivors rehabilitate through a game-based experience.<br><br>It leverages Google MediaPipe's gesture recognition model to detect the user's pose through the front-facing camera, and transfers bone positions into game actions.<br><br>The application was created in Android Studio and contains various Unity-based minigames. My team worked on an elbow flexion and extension game where the player's arm movements were used to drive a farmer picking carrots from a field.<br><br>This development is associated with <a href=https://researchexpo.ipat.gatech.edu/passive-haptic-rehabilitation-improve-sensation-and-dexterity-after-traumatic-injury-using>Georgia Tech's Passive Haptic Rehabilitation research project</a>.",
            modelPath: "models/strokeRehab.glb",
            cameraDistance: 5,
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            galleryName: "strokeRehab",
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
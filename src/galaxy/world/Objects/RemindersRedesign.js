import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class RemindersRedesign extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 73;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.25,
            semimajorAxis: 22,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "REMINDERS",
            header: "IOS Reminders Redesign",
            role: "UI/UX Researcher & Designer",
            tools: "Figma",
            summary: "A human-computer interaction design lifecycle learning experience through a redesign of the iOS Reminders application.",
            body: "In this project I executed two full iterations of the user-experience design lifecycle, where the overarching goal was to improve usability of the iOS Reminders application. <br><br>A single iteration of this design lifecycle includes needfinding, design alternatives, prototyping, and evaluation.<br><br> I began by performing user research on the current state of the Reminders application to identify current shortcomings of the implementation--this yielded ~50 survey responses and 5 interviews. With that data I brainstormed many alternatives to the current interface and developed 3 low-fidelity prototypes. Upon evaluating the prototypes from another pass of user research I created an interactive medium-fidelity prototype of the interface in Figma.",
            modelPath: "models/reminders.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            galleryName: "reminders",
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
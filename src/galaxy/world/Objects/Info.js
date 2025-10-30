import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class Info extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 40;
        const w = 15;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 10,
            eccentricity: 0.2,
            semimajorAxis: 200,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "INFO",
            header: "GENERAL INFORMATION",
            body: "This content contains general information regarding the creation of this portfolio.<br><br>Some of features that would be nice to accomplish for this project are:<br>- Orbit controls gui so users can play with the orbital elements and observe how they change the trajectory of any body in the scene<br>- Improved camera flight path<br>- Image gallery tab for each of the moons<br>- Better HUD scaling for different viewport sizes<br>- Mobile interface",
            modelPath: "models/infoIcon.glb",
            cameraOffset: new Vector3(15, 10, 35),
            effectiveDelta: 0.2,
            frameGap: new Vector2(20, 35),
        });

        super(orbitTarget, info, params);
    }
}
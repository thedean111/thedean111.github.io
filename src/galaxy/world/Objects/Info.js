import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class Info extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 0;
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
            summary: "This category contains general and/or miscellaneous information relating to myself and the portfolio.",
            body: "The subcategories provide more relevant information to the current state of the project, so this screen is used as a working roadmap of cool ideas for the project!.<br><br>Features I would still like to includes are:<br>- Orbit element controls<br>- Orbit trails<br>- Interactive objects (click-and-drag rotation)<br>- A detail page on orbits<br>- Toggle-able text boxes",
            modelPath: "models/infoIcon.glb",
            cameraOffset: new Vector3(15, 10, 35),
            effectiveDelta: 0.2,
            frameGap: new Vector2(20, 35),
            childrenMaxSemimajor: 35,
        });

        super(orbitTarget, info, params);
    }
}
import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3} from 'three'

export default class OSR extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 50;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.1,
            semimajorAxis: 1,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "OSR",
            header: "Odyssey Space Research LLC.",
            body: "Here is all of the stuff I have done at odyssey. I have done this that the other thing and this what what I learned. Here is whats fascinating about it!",
            modelPath: "",
            cameraOffset: new Vector3(.2, .1, .2),
            effectiveDelta: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
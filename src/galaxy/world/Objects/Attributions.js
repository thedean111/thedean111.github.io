import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class Clarus extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 16;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.2,
            semimajorAxis: 26,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "ATTRIBUTIONS",
            header: "Attributions and Credits",
            summary: "Proper attributions for resources using in this portfolio.",
            body: "The following links are attributions to 3D models that were adapted for use in this portfolio:<br><br>- Thumbs up (secondblindmouse)<br><a href=https://www.thingiverse.com/thing:4791269> Thingiverse</a><br><br>- 3d printer printing a 3d printer printing a 3d printer ornament (ejxj)<br><a href=https://www.thingiverse.com/thing:6838860>Thingiverse</a><br><br>- Paintbrush (AndyManCan)<br><a href=https://www.thingiverse.com/thing:14590>Thingiverse</a><br><br>- Ball of yarn (caylaelon)<br><a href=https://www.thingiverse.com/thing:3946839>Thingiverse</a><br><br>- Macho Paint Palette (Frankenstein786)<br><a href=https://www.thingiverse.com/thing:4835501>Thingiverse</a>",
            modelPath: "models/thumbsUp.glb",
            cameraDistance: 10,
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
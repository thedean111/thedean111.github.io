import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class ArtsCrafts extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 230;
        const w = 45;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 0,
            eccentricity: 0.3,
            semimajorAxis: 25,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "ARTS",
            header: "CREATIVE INTERESTS",
            summary: "Fun projects I have pursued in my free time that have made for great gifts and pleasant decorations.",
            body: "Part of my creative nature includes dabbling in more straightforward arts and crafts. Compared to the technical projects I tend to pursue, these provide a nice sense of satisfaction and a medium to exercise my creativity.<br><br>These crafts can range from painting on a canvas, to crochet, to woodworking; some of my favorite projects are:<br>- A custom made dart board cabinet (1),<br>- Crocheted handbag (2),<br>- Handmade bar piece (3)<br>- Embroidered art (4),<br>- Crocheted pokemon (5/6).",
            modelPath: "models/artsCrafts.glb",
            cameraDistance: 5,
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
            galleryName: "crafts",
            trailWidth: 0.5,
        });

        super(orbitTarget, info, params);
    }
}
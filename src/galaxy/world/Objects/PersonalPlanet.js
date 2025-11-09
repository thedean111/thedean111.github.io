import { ObjectInformation, OrbitingObject } from "../OrbitingObject";
import { OrbitParams } from "../OrbitComputer";
import {Vector3, Vector2} from 'three'

export default class PersonalPlanet extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 50;
        const w = 25;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 10,
            eccentricity: 0.0,
            semimajorAxis: 220,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "PERSONAL",
            header: "PERSONAL INTERESTS",
            summary: "I have always loved to create things, and as my technical capabilities grow I proportionally expand the scope of my projects.",
            body: "Unfortunately, since LEGO discontinued the Bionicle line in 2010 I had to find my creative outlet elsewhere. So, I picked up arts, crafts, and eventually, some technical interests!<br><br>From woodworking, to 3D printing, to painting, to software development, I have always felt the most joy when watching my ideas bloom to tangibility.<br><br>This category presents the personal projects I am most proud of, along with the more substantial MEM-O-MART venture I am tackling with friends!<br><br><br>LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize or endorse this site",
            modelPath: "models/dean_lowPoly.glb",
            cameraOffset: new Vector3(15, 10, 35),
            effectiveDelta: 0.2,
            frameGap: new Vector2(20, 35),
        });

        super(orbitTarget, info, params);
    }
}
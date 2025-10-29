import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
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
            body: "I love to make things!<br><br> For many years I have enjoyed creativity and arts, and as my technical capabilities grow I proportionally expand the scope of my projects. <br><br>From woodworking, to 3D printing, to painting, to software development, I have always felt the most joy when watching my ideas bloom to tangibility.<br><br>This content describes the works I am most proud of, along with more substantial personal venture I am tackling with friends!",
            modelPath: "models/dean_lowPoly.glb",
            cameraOffset: new Vector3(15, 10, 35),
            effectiveDelta: 0.2,
            frameGap: new Vector2(20, 35),
        });

        super(orbitTarget, info, params);
    }
}
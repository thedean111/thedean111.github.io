import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class Raytracer extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 30;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.7,
            semimajorAxis: 30,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "RAYTRACER",
            header: "Raytracing Rendering Engine",
            role: "Software Developer",
            tools: "Java, Java Processing Library",
            body: "Included in this engine is the implementation of:<br>- Axis-Aligned Bounding Boxes,<br>- Unlit basic eye/camera rendering,<br>- Bounding volume hierarchy (BVH) optimization,<br>- Lambertian diffuse shading,<br>- Blinn-Phong specular shading,<br>- Anti-aliasing,<br>- Surface reflections,<br>- Motion blur,<br>- Soft/Hard shadows,<br>- Depth of field,<br>- Transparency.",
            modelPath: "models/raytracing.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
        });

        super(orbitTarget, info, params);
    }
}
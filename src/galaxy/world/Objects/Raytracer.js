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
            tabLabel: "GRAPHICS",
            header: "Raytracing and Mesh Generation",
            role: "Software Developer",
            tools: "Java, Java Processing Library",
            summary: "This experience presents the results of my guided implementation of advanced computer graphics concepts. These include a 3D raytracing rendering engine, implicit surface generation, and advanced mesh manipulation.",
            body: "The raytracer includes:<br>Axis-Aligned Bounding Boxes, Unlit basic eye/camera rendering, Bounding volume hierarchy (BVH) optimization, Lambertian and Blinn-Phong shading, Anti-aliasing, Surface reflections, Motion blur, Soft/Hard shadows, Depth of field, Transparency.<br><br>For implicit surface generation I wrote various algorithms for generating and deforming primitives based on their scalar fields. In addition I implemented blended vertex colors and normal vector computation.<br><br>I also implemented mesh manipulation algorithms that include: Loop subdivision, Butterfly subdivision, Laplace smoothing, and Taubin smoothing.",
            modelPath: "models/raytracing.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
        });

        super(orbitTarget, info, params);
    }
}
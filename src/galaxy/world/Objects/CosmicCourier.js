import { OrbitParams, ObjectInformation, OrbitingObject } from "./OrbitingObject";
import {Vector3, Vector2} from 'three'

export default class CosmicCourier extends OrbitingObject {
    // Define all object information here!
    constructor(orbitTarget) {
        const i = 75;
        const w = 35;
        const params = new OrbitParams({
            inclination: i * (Math.PI / 180),
            trueAnomaly: 20,
            eccentricity: 0.5,
            semimajorAxis: 28,
            raan: 0,
            argPeriapsis: w * (Math.PI / 180)
        });

        const info = new ObjectInformation({
            simulateOrbit: true,
            tabLabel: "COURIER",
            header: "COSMIC COURIER",
            tools: "Unity, C#, Blender, Suno AI",
            role: "Game Developer (Software, UI/UX, assets, etc.)",
            body: "Cosmic Courier is an educational game prototype created to support integrated STEM education among younger students. It is the result of an intensive literature review that synthesized 45 peer-reviewed research papers on the topics of game-based learning and STEM education. This game contributes to the field of game-based learning by highlighting practical development strategies which address implementation challenges and uncertainties associated with educational games.<br><br>This was a solo-developed 100-hour project that containerizes STEM topics into serious game mechanics and objectives. Currently demonstrated in the game is Stoichiometry, code execution, and coordinate system navigation.<br><br>This game may be played on itch.io <a href=https://zadega.itch.io/cosmic-courier>here</a>.",
            modelPath: "models/cosmicCourier.glb",
            cameraOffset: new Vector3(5, 1, .25),
            effectiveDelta: 0.5,
            scale: new Vector3(0.2, 0.2, 0.2),
            frameGap: new Vector2(16, 30),
        });

        super(orbitTarget, info, params);
    }
}
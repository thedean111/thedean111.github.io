import { Vector3 } from 'three';

// https://en.wikipedia.org/wiki/Orbital_elements
export class OrbitParams {
    constructor({
        semimajorAxis=0,
        eccentricity=0,
        inclination=0,
        raan=0,
        argPeriapsis=0,
        trueAnomaly=0
    } = {}) {
        this.semimajorAxis=semimajorAxis;
        this.eccentricity=eccentricity;
        this.inclination=inclination;
        this.raan=raan;
        this.argPeriapsis=argPeriapsis;
        this.trueAnomaly=trueAnomaly
    }
}

export class OrbitComputer {
    static getInertialPosition(params) {
        const radius = this.computeRadius(params);
        const r_pqw = new Vector3(radius * Math.cos(params.trueAnomaly), radius * Math.sin(params.trueAnomaly), 0);
        const R = this.computeTransformMatrix(params);

        // Now we use the rest of the orbit elements to covert local orbit space to global inertial space,
        // Where inertial is relative to the body this is orbiting
        return [
                R[0][0] * r_pqw.x + R[0][1] * r_pqw.y + R[0][2] * r_pqw.z,
                R[1][0] * r_pqw.x + R[1][1] * r_pqw.y + R[1][2] * r_pqw.z,
                R[2][0] * r_pqw.x + R[2][1] * r_pqw.y + R[2][2] * r_pqw.z,
                radius
            ];
    }

    static computeTransformMatrix(params) {
        // https://en.wikipedia.org/wiki/Perifocal_coordinate_system
        const cRaan = Math.cos(params.raan);
        const sRaan = Math.sin(params.raan);
        const cI = Math.cos(params.inclination);
        const sI = Math.sin(params.inclination);
        const cW = Math.cos(params.argPeriapsis);
        const sW = Math.sin(params.argPeriapsis);

        let R = [];
        return R = [
            [(cRaan*cW) - (sRaan*cI*sW), -(cRaan*sW) - (sRaan*cI*cW), sRaan * sI],
            [(sRaan*cW) + (cRaan*cI*cW), -(sRaan*sW) + (cRaan*cI*cW), -cRaan*sI],
            [sI*sW, sI*cW, cI]
        ];
    }

    static computeRadius(params) {
        return (params.semimajorAxis * (1 - (params.eccentricity * params.eccentricity))) / (1 + (params.eccentricity * Math.cos(params.trueAnomaly)));
    }
}
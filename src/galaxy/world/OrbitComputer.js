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
        const u = params.argPeriapsis + params.trueAnomaly;
        const cRaan = Math.cos(params.raan);
        const sRaan = Math.sin(params.raan);
        const cI = Math.cos(params.inclination);
        const sI = Math.sin(params.inclination);

        // Now we use the rest of the orbit elements to covert local orbit space to global inertial space,
        // Where inertial is relative to the body this is orbiting
        return [
                radius * (cRaan*Math.cos(u) - sRaan*cI*Math.sin(u)),
                radius * (sI*Math.sin(u)),
                radius * (sRaan*Math.cos(u) + cRaan*cI*Math.sin(u))
            ];
    }

    static computeRadius(params) {
        return (params.semimajorAxis * (1 - (params.eccentricity * params.eccentricity))) / (1 + (params.eccentricity * Math.cos(params.trueAnomaly)));
    }
}
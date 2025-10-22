import { AmbientLight, DirectionalLight, Object3D } from "three";

export default class Lighting {
    constructor(scene) {
        // Ambient
        this.ambient = new AmbientLight(0xFFFFFF, 1);

        // Directional Sunlight
        this.sun = new DirectionalLight(0xFFFFFF, 1);
        this.sun.castShadow = true;
        this.sun.shadow.mapSize.width = 512;
        this.sun.shadow.mapSize.height = 512;
        this.sun.shadow.camera.near = 35;
        this.sun.shadow.camera.far = 500;
        this.sun.shadow.bias = -0.001;
        this.sunTarget = new Object3D();
        this.sun.target = this.sunTarget;

        scene.add(this.sun);
        scene.add(this.sunTarget);
        scene.add(this.ambient);
    }

    setAmbient(color, intensity) {
        this.ambient.color.set(color);
        this.ambient.intensity = intensity;
    }

    setSun(color, intensity) {
        this.sun.color.set(color);
        this.sun.intensity = intensity;
    }

    setSunPosition(x, y, z) {
        this.sun.position.set(x, y, z);
    }

    setSunTarget(x, y, z) {
        this.sun.target.position.set(x, y, z);
    }

    getAmbient() {
        return this.ambient;
    }

    getSun() {
        return this.sun;
    }

    getSunTarget() {
        return this.sunTarget;
    }
}
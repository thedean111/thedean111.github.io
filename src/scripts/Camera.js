import { PerspectiveCamera, Object3D } from "three";

export default class Camera {
    constructor(scene) {
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.cameraTarget = new Object3D();

        scene.add(this.cameraTarget);
    }

    setPosition(x, y, z) {
        this.camera.position.set(x, y, z);
    }

    setTargetPosition(x, y, z) {
        this.cameraTarget.position.set(x, y, z);
    }

    target(x, y, z) {
        this.camera.lookAt(x, y, z);
    }

    getCamera() {
        return this.camera;
    }

    getCameraTarget() {
        return this.cameraTarget;
    }

    updateCameraTarget() {
        this.camera.lookAt(this.cameraTarget.position);
    }
}
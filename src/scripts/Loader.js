import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Loader {
    constructor() {
        this.loader = new GLTFLoader();
    }

    async loadModel(filepath, scene) {
        var gltf = await this.loader.loadAsync(filepath); 
        scene.add(gltf.scene);
        gltf.scene.receiveShadow = true;
        gltf.scene.castShadow = true;
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            } 
        });
        return gltf.scene;
    }
}
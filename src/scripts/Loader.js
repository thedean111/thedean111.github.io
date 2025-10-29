import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CubeTextureLoader, FrontSide, TextureLoader } from 'three';

export default class Loader {
    constructor() {
        this.loader = new GLTFLoader();
    }

    async loadModel(filepath) {
        var gltf = await this.loader.loadAsync(filepath);
        gltf.scene.receiveShadow = true;
        gltf.scene.castShadow = true;
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                // child.castShadow = true;
                // child.receiveShadow = true;
                child.material.transparent = true;
            } 
        });
        return gltf.scene;
    }

    loadCubeTexture(filepath) {
        return new CubeTextureLoader().load([
            filepath + '/right.png',
            filepath + '/left.png',
            filepath + '/top.png',
            filepath + '/bottom.png',
            filepath + '/front.png',
            filepath + '/back.png',
        ],
        () => console.log('Cubemap loaded'),
        undefined,
        (err) => console.error('Cubemap FAILED:', err)
        )
    };

    loadTexture(filepath) {
        return new TextureLoader().load(filepath);
    }
}
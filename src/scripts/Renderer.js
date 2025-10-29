import { WebGLRenderer, SRGBColorSpace, ACESFilmicToneMapping, PCFSoftShadowMap } from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export default class Renderer {
    constructor() {
        this.renderer = new WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,});
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setPixelRatio(0.6);
        this.renderer.outputColorSpace = SRGBColorSpace;
        this.renderer.toneMapping = ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        document.body.appendChild( this.renderer.domElement);

        this.composer = new EffectComposer(this.renderer);
    }

    setAnimationLoop(action) {
        this.renderer.setAnimationLoop(action);
    }

    setComposerPasses(scene, camera) {
        this.composer.addPass(new RenderPass(scene, camera));
        this.composer.addPass(new OutputPass());
    }

    render() {
        this.composer.render();
    }

    getDOM() {
        return this.renderer.domElement;
    }

    setSize(width, height) {
        this.renderer.setSize(width, height);
    }
}
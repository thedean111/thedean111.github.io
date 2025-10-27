import * as THREE from 'three';
import IntroSequence from '../hud/IntroSequence.js';
import Camera from '../../scripts/Camera.js';
import Renderer from '../../scripts/Renderer.js';
import Lighting from '../../scripts/Lighting.js';
import Loader from '../../scripts/Loader.js';
import TextManager from '../hud/TextManager.js';
import ObjectFrame from '../hud/ObjectFrame.js';
import { MyGUI } from '../../scripts/MyGUI.js';

export default class GalaxyScene {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new Camera(this.scene);
        this.lighting = new Lighting(this.scene);
        this.renderer = new Renderer();
        this.renderer.setAnimationLoop(this.update.bind(this));
        this.renderer.setComposerPasses(this.scene, this.camera.getCamera());
        this.loader = new Loader();
        this.clock = new THREE.Clock();
        this.gui = new MyGUI();
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.txtMgr = new TextManager();
        this.framer = new ObjectFrame();
        this.headRotationSpeed = new THREE.Vector3(0, 8, 0);

        this.DEG2RAD = 3.1415 / 180;

        // EVENTS
        this.renderer.getDOM().addEventListener('click', this.onLeftMouseClick.bind(this));
        window.addEventListener('resize', this.updateCameraResize.bind(this))
    }

    async initScene() {
        this.dean = await this.loader.loadModel('models/dean_lowPoly.glb', this.scene);

        const intro = new IntroSequence();
        intro.begin(() => {
            document.getElementById('introScreen').style.opacity = 0;
            this.framer.setDetails(
                "D34N-B4DR",
                "The content right here should be a description about DEAN! I need to find a way to easily write a .json or something so I can just load up these details. Does it make sense to put this all in a string?<br><br> This is me trying a break!"
            )
            this.framer.updateDetails = true;
            this.framer.fitObject(this.dean, this.camera.getCamera());
        });
        window.addEventListener('resize', (event) => {
            this.framer.updateDetails = false;
            this.framer.fitObject(this.dean, this.camera.getCamera());
        })


        this.camera.setPosition(-15, 15, 40);
        this.camera.setTargetPosition(0, 0, 0);

        // const tex = this.loader.loadCubeTexture('skybox');
        // tex.minFilter = LinearFilter;
        // this.scene.background = this.loader.loadCubeTexture('skybox');
        // this.scene.background = new Color(0x00061a);
        this.scene.background = new THREE.Color(0x242424);

        this.lighting.setSunPosition(-25, 5, 20);
        this.lighting.setSunTarget(3, 0, -5);
        this.lighting.setSun(0xF0DC00, 2.5)
        this.lighting.setAmbient(0xFFFFFF, .8);

        // GUI
        let ambientGroup = this.gui.makeFolder('Ambient Light');
        this.gui.addColorToFolder(ambientGroup, this.lighting.getAmbient(), 'Color');
        ambientGroup.add(this.lighting.getAmbient(), 'intensity', 0, 1, 0.01).name("Intensity");

        let sunGroup = this.gui.makeFolder('Sunlight');
        this.gui.addColorToFolder(sunGroup, this.lighting.getSun(), 'Color');
        sunGroup.add(this.lighting.getSun(), 'intensity', 0, 5, 0.01).name("Intensity");
        this.gui.addVectorToFolder(sunGroup, this.lighting.getSun().position, 'Position', -50, 50, 1);
        this.gui.addVectorToFolder(sunGroup, this.lighting.getSunTarget().position, 'Target', -50, 50, 1);

        let cameraGroup = this.gui.makeFolder('Camera');
        this.gui.addVectorToFolder(cameraGroup, this.camera.getCamera().position, 'Position', -50, 50, 1);
        this.gui.addVectorToFolder(cameraGroup, this.camera.getCameraTarget().position, 'Target', -50, 50, 1);

        let headGroup = this.gui.makeFolder('Head');
        this.gui.addVectorToFolder(headGroup, this.dean.rotation, 'Rotation', -3.14, 3.14, 0.01);
        this.gui.addVectorToFolder(headGroup, this.headRotationSpeed, 'Rotation Speed', -90, 90, 0.1);
    }

    update() {
        var delta = this.clock.getDelta();
        if (this.dean) {
            this.dean.rotation.x += this.headRotationSpeed.x * delta * this.DEG2RAD;
            this.dean.rotation.y += this.headRotationSpeed.y * delta * this.DEG2RAD;
            this.dean.rotation.z += this.headRotationSpeed.z * delta * this.DEG2RAD;
        }
        
        this.camera.updateCameraTarget();
        this.renderer.render();
    }

    onLeftMouseClick(event) {
        const mousePos = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1,  -(event.clientY / window.innerHeight) * 2 + 1);
        
        this.raycaster.setFromCamera(mousePos, this.camera.getCamera());
        
        const hits = this.raycaster.intersectObjects(this.scene.children, true);
        
        if (hits.length <= 0) {
            console.log("No raycast hits");
            return;
        }
        console.log("HIT");
    }

    updateCameraResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const cam = this.camera.getCamera();
        cam.aspect = width/height;
        cam.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }
}
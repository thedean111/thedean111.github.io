import {Scene, Color, PlaneGeometry, Mesh, MeshBasicMaterial} from 'three';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import Lighting from './Lighting.js';
import Loader from './Loader.js';
import { MyGUI } from './MyGUI.js';

export default class OutdoorScene {
    constructor() {
        this.scene = new Scene();
        this.camera = new Camera(this.scene);
        this.lighting = new Lighting(this.scene);
        this.renderer = new Renderer();
        this.renderer.setAnimationLoop(this.update.bind(this));
        this.renderer.setComposerPasses(this.scene, this.camera.getCamera());
        this.loader = new Loader();

        this.gui = new MyGUI();
    }

    async initScene() {
        this.tomb = await this.loader.loadModel('../assets/models/tomb_lowPoly.glb', this.scene);
        this.sand = await this.loader.loadModel('../assets/models/sand_lowPoly.glb', this.scene);

        this.tomb.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(0xffa947);
            }
        });
        this.sand.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(0xffa947);
            }
        });
        this.plane = new Mesh(new PlaneGeometry(3, 10), new MeshBasicMaterial({color: 0x000000}));
        this.plane.position.set(0.1, 2, -2.5);
        this.plane.rotation.set(0.1, 0.3, 0);
        this.scene.add(this.plane);

        this.camera.setPosition(2, 8, 13);
        this.camera.setTargetPosition(7, 7, 0);

        this.scene.background = new Color(0x8abdff);

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

        let tombShadow = this.gui.makeFolder('Tomb Shadow');
        this.gui.addVectorToFolder(tombShadow, this.plane.position, 'Position', -10, 10, 0.1);
        this.gui.addVectorToFolder(tombShadow, this.plane.rotation, 'Rotation', -3, 3, 0.1);
    }

    update() {
        this.camera.updateCameraTarget();
        this.renderer.render();
    }
}
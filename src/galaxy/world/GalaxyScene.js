import * as THREE from 'three';
import IntroSequence from '../hud/IntroSequence.js';
import Camera from '../../scripts/Camera.js';
import CameraController from './CameraController.js';
import Renderer from '../../scripts/Renderer.js';
import Lighting from '../../scripts/Lighting.js';
import Loader from '../../scripts/Loader.js';
import TextManager from '../hud/TextManager.js';
import ObjectFrame from '../hud/ObjectFrame.js';
import { MyGUI } from '../../scripts/MyGUI.js';
import ObjectTabManager from '../hud/ObjectTabManager.js';
import DropdownManager from '../hud/DropdownManager.js';
import Telemetry from '../hud/Telemetry.js';
import Dean from './Objects/Dean.js';
import WorkPlanet from './Objects/WorkPlanet.js';
import SchoolPlanet from './Objects/SchoolPlanet.js'
import PersonalPlanet from './Objects/PersonalPlanet.js';
import OSR from './Objects/OSR.js'
import Clarus from './Objects/Clarus.js'
import ArtsCrafts from './Objects/ArtsCrafts.js';
import Memomart from './Objects/Memomart.js';
import TechnicalHobbies from './Objects/TechnicalHobbies.js';
import CosmicCourier from './Objects/CosmicCourier.js';
import StrokeRehab from './Objects/StrokeRehab.js';
import Raytracer from './Objects/Raytracer.js';
import PokemonSimulator from './Objects/PokemonSimulator.js';
import RemindersRedesign from './Objects/RemindersRedesign.js';
import Info from './Objects/Info.js';
import About from './Objects/About.js';
import Attributions from './Objects/Attributions.js';

export default class GalaxyScene {
    constructor(playIntro) {
        this.scene = new THREE.Scene();
        this.camera = new Camera(this.scene);
        this.lighting = new Lighting(this.scene);
        this.renderer = new Renderer();
        this.renderer.setAnimationLoop(this.update.bind(this));
        this.renderer.setComposerPasses(this.scene, this.camera.getCamera());
        this.loader = new Loader();
        this.clock = new THREE.Clock();
        this.camControls = new CameraController(this.camera.camera, this.renderer.getDOM());
        // this.gui = new MyGUI();
        this.mouse = new THREE.Vector2();
        this.txtMgr = new TextManager();
        this.framer = new ObjectFrame(this.camControls, this.lighting.getSun());
        this.headRotationSpeed = new THREE.Vector3(0, 8, 0);
        this.objects = [];
        this.dropdownManager = new DropdownManager();
        this.tabManager = new ObjectTabManager(this.framer, this.dropdownManager);
        this.tlm = new Telemetry();

        this.DEG2RAD = 3.1415 / 180;
        this.playIntro = playIntro;

        // EVENTS
        window.addEventListener('resize', this.updateCameraResize.bind(this))

        document.getElementById("toggle-tlm-button").addEventListener("click", (evt) => {
            evt.target.blur();
            this.tlm.tlmContainer.classList.toggle("hidden");
            this.tlm.setContent(this.framer.focusedObject.info);
        });
    }

    // Create the whole scene :)
    async initScene() {
        /*=================================================================
        CREATE ALL OBJECTS AND RELATIONSHIPS
        =================================================================*/
        // My head, the center of the system
        this.dean = new Dean();
        await this.dean.Initialize(0, this.scene);
        
        // The planets (categories of experience)
        this.workPlanet = new WorkPlanet(this.dean.object);        
        await this.workPlanet.Initialize(0, this.scene);
        this.schoolPlanet = new SchoolPlanet(this.dean.object);
        await this.schoolPlanet.Initialize(3, this.scene);
        this.personalPlanet = new PersonalPlanet(this.dean.object);
        await this.personalPlanet.Initialize(3, this.scene);
        this.infoPlanet = new Info(this.dean.object);
        await this.infoPlanet.Initialize(3.2, this.scene);

        // This is to utilize a shape key of my head instead of exporting another model
        const morphs = [];
        this.personalPlanet.object.traverse(o => {
            if (o.isMesh && o.morphTargetInfluences && o.morphTargetDictionary) {
                morphs.push(o);
            }
        });
        morphs.forEach(o => {
            const idx = o.morphTargetDictionary['Smile'];
            if (idx != undefined) {
                o.morphTargetInfluences[idx] = 1;
            }
        });

        // Work experience
        this.osr = new OSR(this.workPlanet.object);
        await this.osr.Initialize(.2, this.scene);
        this.clarus = new Clarus(this.workPlanet.object);
        await this.clarus.Initialize(3.2, this.scene);

        // School projects
        this.cosmicCourier = new CosmicCourier(this.schoolPlanet.object);
        await this.cosmicCourier.Initialize(0.1, this.scene);
        this.cosmicCourier.object.scale.set(0.1, 0.1, 0.1);
        this.stroke = new StrokeRehab(this.schoolPlanet.object);
        await this.stroke.Initialize(0.3, this.scene);
        this.stroke.object.scale.set(0.1, 0.1, 0.1);
        this.raytracer = new Raytracer(this.schoolPlanet.object);
        await this.raytracer.Initialize(1.2, this.scene);
        this.raytracer.object.scale.set(0.1, 0.1, 0.1);
        this.pokemon = new PokemonSimulator(this.schoolPlanet.object);
        await this.pokemon.Initialize(2, this.scene);
        this.pokemon.object.scale.set(0.1, 0.1, 0.1);
        this.reminders = new RemindersRedesign(this.schoolPlanet.object);
        await this.reminders.Initialize(2.8, this.scene);
        this.reminders.object.scale.set(0.1, 0.1, 0.1);

        // Personal
        this.technical = new TechnicalHobbies(this.personalPlanet.object);
        await this.technical.Initialize(.2, this.scene);
        this.technical.object.scale.set(0.1, 0.1, 0.1);
        this.creative = new ArtsCrafts(this.personalPlanet.object);
        await this.creative.Initialize(1, this.scene);
        this.creative.object.scale.set(0.1, 0.1, 0.1);
        this.memomart = new Memomart(this.personalPlanet.object);
        await this.memomart.Initialize(2.5, this.scene);
        this.memomart.object.scale.set(0.1, 0.1, 0.1);

        // Info
        this.about = new About(this.infoPlanet.object);
        await this.about.Initialize(2, this.scene);
        this.attributions = new Attributions(this.infoPlanet.object);
        await this.attributions.Initialize(1, this.scene);

        // Define the parent-child relationships
        this.dean.info.children = [
            this.workPlanet,
            this.schoolPlanet,
            this.personalPlanet,
            this.infoPlanet
        ];
        this.workPlanet.info.children = [
            this.osr,
            this.clarus
        ];
        this.schoolPlanet.info.children = [
            this.cosmicCourier, 
            this.stroke, 
            this.raytracer, 
            this.pokemon, 
            this.reminders
        ];
        this.personalPlanet.info.children = [
            this.technical,
            this.creative,
            this.memomart
        ];
        this.infoPlanet.info.children = [
            this.about,
            this.attributions
        ];

        // Turn off all the moons
        this.workPlanet.info.children.forEach(c => {
            c.TurnOff();
            this.objects.push(c);
        });
        this.schoolPlanet.info.children.forEach(c => {
            c.TurnOff();
            this.objects.push(c);
        });
        this.personalPlanet.info.children.forEach(c => {
            c.TurnOff();
            this.objects.push(c);
        });
        this.infoPlanet.info.children.forEach(c => {
            c.TurnOff();
            this.objects.push(c);
        });


        // Add all objects to the array for updating
        this.objects.push(this.dean);
        this.objects.push(this.workPlanet);
        this.objects.push(this.schoolPlanet);
        this.objects.push(this.personalPlanet);
        this.objects.push(this.infoPlanet);

        // Initial ui setup now that the objects are created
        this.tabManager.SetSystem(this.dean);
        this.tabManager.SetPlanets(this.dean.info.children);
        this.dropdownManager.setFocusedObject(this.dean);
        this.dropdownManager.setAvailableOrbits(this.dean.info.children);
        this.tlm.buildNavigation(this.dean);
        //=================================================================

        // Make sure the camera forcible starts where we want it
        this.camControls.setCameraPosition(this.dean.object.position, 0, 1, this.dean.info.cameraDistance);
        this.camera.getCamera().lookAt(this.dean.object.position);

        // Fire off the introduction sequence. On complete, it will set the focus to my head
        // which will write details about myself to the screen
        this.framer.setFocus(this.dean, false);
        if (this.playIntro) {
            const intro = new IntroSequence();
            intro.begin(() => {
                document.getElementById('introScreen').style.opacity = 0;
                document.getElementById('introScreen').style.pointerEvents = 'none';
                this.framer.updateDetails = true;
                this.framer.setFocus(this.dean, false);
                this.framer.container.style.setProperty('--contentWidth', `30vw`);
            });
        } else {
                document.getElementById('introScreen').style.opacity = 0;
                document.getElementById('introScreen').style.pointerEvents = 'none';
                this.framer.updateDetails = true;
                this.framer.setFocus(this.dean, false);
                this.framer.container.style.setProperty('--contentWidth', `30vw`);
        }

        // Resize event
        window.addEventListener('resize', () => {
            this.framer.updateFrameSize();
        });

        // const tex = this.loader.loadCubeTexture('skybox');
        // tex.minFilter = LinearFilter;
        // tex.
        // this.scene.background = this.loader.loadCubeTexture('skybox');
        // this.scene.background = new Color(0x00061a);
        this.scene.background = new THREE.Color(0x242424);

        this.lighting.setSunPosition(-25, 5, 20);
        this.lighting.setSunTarget(3, 0, -5);
        this.lighting.setSun(0xFFFFFF, 2)
        this.lighting.setAmbient(0xFFFFFF, .5);
    }

    update() {
        // Update all the objects in the scene
        var delta = this.clock.getDelta();
        this.objects.forEach(obj => {
            obj.Update(delta);
        })


        this.framer.update();

        // Render to the screen
        this.renderer.render();
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
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create the scene and the camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// The renderer will interpret the scene from the camera and apply it to an image that is sized based on the window
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Import a test model and add it to the scene
const loader = new GLTFLoader();
var model;
loader.load('./assets/models/suzanne.glb', function (gltf) {
  scene.add(gltf.scene);
  model = gltf.scene;
}, undefined, function (error) { console.log(error); });

// Offset the camera slightly so the test model can be seen
camera.position.z = 5;

// Lighting
const color = 0xFFFFFF;
const ambientIntensity = 1;
const ambientLight = new THREE.AmbientLight(color, ambientIntensity);
scene.add(ambientLight);

const skyColor = 0xFFFFFF;  // light blue
const groundColor = 0x000000;  // brownish orange
const intensity = 1;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);

// Update loop
function animate() {
  if (model) {
    model.rotation.x += 0.01;
    model.rotation.y += 0.01;   
  }

  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
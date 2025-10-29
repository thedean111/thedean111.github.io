import OutdoorScene from './scripts/OutdoorScene.js'
import GalaxyScene from './galaxy/world/GalaxyScene.js';

window.addEventListener('DOMContentLoaded', () => {
    const galaxyScene = new GalaxyScene();
    galaxyScene.initScene();    
});


// const outdoorScene = new OutdoorScene();
// outdoorScene.initScene();
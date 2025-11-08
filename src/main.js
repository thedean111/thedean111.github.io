import GalaxyScene from './galaxy/world/GalaxyScene.js';

window.addEventListener('DOMContentLoaded', () => {
    const galaxyScene = new GalaxyScene(true);
    galaxyScene.initScene();    
});
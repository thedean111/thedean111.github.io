import {gsap} from 'gsap'

export default class ObjectTabManager {
    constructor(frame, orbitControls) {
        this.systemBtn = document.getElementById("system-button")
        this.planetContainer = document.getElementById("planet-container");
        this.moonContainer = document.getElementById("moon-container");
        this.frame = frame;
        this.selectedPlanet = null;
        this.selectedPlanetObj = null;
        this.selectedMoon = null;
        this.selectedMoonObj = null;
        this.moonContainer.style.opacity = 0;
        this.systemObj = null;
        this.orbitControls = orbitControls;
        
        // These are just for easy iterating
        this.planets = [];
        this.moons = [];

    }

    // Sets the data for the root of the experience (my head)
    SetSystem(systemObj) {
        this.systemObj = systemObj;
        this.systemBtn.textContent = systemObj.info.tabLabel;
        this.systemBtn.addEventListener('click', () => {
            this.frame.updateDetails = true;
            this.frame.setFocus(this.systemObj);
            this.orbitControls.setAvailableOrbits(this.systemObj.info.children, this.systemObj.info.childrenMaxSemimajor);

            /* 
            When clicking on the head:
            - Head should animate into view
            - All of the planets should resume their full orbit
            - All of the moons should disappear
            - All of the selections should be cleared
            */

           // Head opacity
           systemObj.FadeObject(1);

            // All planets resume movement
            this.planets.forEach(p => {
                p.info.simulateOrbit = true;
                p.FadeObject(1);
                gsap.to(p, {
                    deltaScale: p.info.effectiveDelta, 
                    duration: 1.5, 
                    ease:'sin.in',});
            });
            if (this.selectedPlanet) {
                this.selectedPlanet.classList.remove('selected-button');
                this.selectedPlanet = null;
            }

            // Hide all the moons, turn off simulation after the moon is hidden
            this.moonContainer.style.opacity = 0;
            this.moons.forEach(m => {
                if (this.systemObj) {
                    m.FadeObject(0, () => {m.info.simulateOrbit = false;});
                }
            });
            if (this.selectedMoon) {
                this.selectedMoon.classList.remove('selected-button');
                this.selectedMoon = null;
            }
        });
    }

    // The planets are the high-level categories of my experience
    // For each object we need to create a button and tie it to the actual data
    SetPlanets(ps=[]) {
        // Clear what is already there
        this.planetContainer.innerHTML = '';
        
        ps.forEach(p => {
            this.planets.push(p);
            const btn = document.createElement('button');
            btn.id = p.info.tabLabel;
            btn.classList.add("observed-item", "baseText");
            btn.textContent = p.info.tabLabel;
            btn.addEventListener('click', () => {
                // Handle styling for the planet-level tabs
                if (this.selectedPlanet) {
                    if (this.selectPlanet != btn) {
                        this.selectedPlanet.classList.remove('selected-button');
                        this.selectedPlanetObj.FadeObject(0);
                        p.FadeObject(1);
                        this.selectedPlanetObj.info.children.forEach(c => {
                            c.FadeObject(0);
                        })
                    } else if (this.selectedMoon == null) {
                        return;
                    }
                } else {
                    ps.forEach(p1 => {
                        if (p1 != p) {
                            p1.FadeObject(0);
                        }
    
                        gsap.to(p1, {
                            deltaScale: 0, 
                            duration: 1, 
                            ease: "expo.out", 
                            onComplete: () => {
                                p1.info.simulateOrbit = false;
                                p1.info.children.forEach(c => {
                                c.updateTrail = false;
                                });
                            },
                        });
                    });
                }

                // If this was coming from the moon view, fade the object back in and resume moon movement
                if (this.selectedMoon) {
                    p.FadeObject(1);
                }
                this.selectedMoon = null;

                btn.classList.add('selected-button');
                this.selectedPlanet = btn;
                this.selectedPlanetObj = p;
                this.orbitControls.setAvailableOrbits(p.info.children, p.info.childrenMaxSemimajor);
                p.FadeTrail(0);


                // Setup the sub-menu with the moons of this planet, this will also fade the moons into view
                this.SetMoons(p.info.children);
                this.moonContainer.style.opacity = 1;
                
                // Fade out the big head as we get close to the planet
                if (this.systemObj) {
                    this.systemObj.FadeObject(0);
                }

                // The HUD frame will also control the camera to the target
                this.frame.updateDetails = true;
                this.frame.setFocus(p);
            })
            this.planetContainer.appendChild(btn);
        });
    }

    // The moons are the project-level experience I have
    // This is about as low as the chain goes
    SetMoons(ms=[]) {
        // Clear what is already there
        this.moonContainer.innerHTML = '';
        
        ms.forEach(m => {
            this.moons.push(m);
            const btn = document.createElement('button');
            btn.id = m.info.tabLabel;
            btn.classList.add("observed-item", "baseText");
            btn.textContent = m.info.tabLabel;
            m.info.simulateOrbit = true;
            m.ResetDelta();
            m.FadeObject(1);
            m.updateTrail = true;
            btn.addEventListener('click', () => {
                // Handle the tab styling
                if (this.selectedMoon) {
                    if (this.selectedMoon == btn) {return;}
                    this.selectedMoon.classList.remove('selected-button');
                    m.FadeObject(1);
                    selectedMoonObj.FadeObject(0);
                    
                // If there wasn't a selected moon, but now we are clicking one, then
                // we want to stop the movement of the moons and fade out the one we didn't click
                } else {
                    ms.forEach(m1 => {
                        if (m1 != m) {
                            m1.FadeObject(0);
                        }
    
                        gsap.to(m1, {
                            deltaScale: 0, 
                            duration: 1, 
                            ease: "expo.out", 
                            onComplete: () => {
                                m1.info.simulateOrbit = false;
                            },
                        });
                    });
                }

                btn.classList.add('selected-button');
                this.selectedMoon = btn;
                this.selectedMoonObj = m;
                m.FadeTrail(0);
                this.orbitControls.setAvailableOrbits(m.info.children, m.info.childrenMaxSemimajor);

                // No planets should be visible
                this.planets.forEach(c => {
                    c.FadeObject(0);
                });


                // The HUD frame will also control the camera to the target
                this.frame.updateDetails = true;
                this.frame.setFocus(m);
            });
            this.moonContainer.appendChild(btn);
        });
    }
}
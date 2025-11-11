import { gsap } from 'gsap'


// Populates the drop down menu based on user choice, or disables it
// manages button states
export default class DropdownManager {
    static CONTENT_DURATION = 0.25;

    constructor() {
        this.controlsBtn = document.getElementById("controls-button");

        this.contentContainer = document.getElementById("content-container");
        this.controlsContainer = document.getElementById("orbit-controls-container");

        this.controlsOpen = false;

        this.focusedObject = null;
        this.RAD2DEG = (180 / Math.PI);

        // This will always open the orbit controls
        this.controlsBtn.addEventListener('click', () => {
            if (this.controlsOpen) {
                this.closeDropdown();
                this.controlsOpen = false;
            } else {
                this.openOrbitControls();
            }
        });

        // The dropdown
        this.orbitsOptions = document.getElementById("orbit-options-container");
        this.orbits = [];
        this.selectedOrbitObj = null;
        this.selectedObjBtn = null;

        // Tie the slider labels to the sliders
        this.aMaxLabel = document.getElementById('a-max-label');

        this.eLab = document.getElementById("e-label");
        this.aLab = document.getElementById("a-label");
        this.wLab = document.getElementById("w-label");
        this.iLab = document.getElementById("i-label");
        this.raanLab = document.getElementById("raan-label");
        
        this.raanSlider = document.getElementById("Right Ascension of the Ascending Node");
        this.iSlider = document.getElementById("Inclination");
        this.aSlider = document.getElementById("Semimajor Axis");
        this.wSlider = document.getElementById("Argument of Periapsis");
        this.eSlider = document.getElementById("Eccentricity");
        
        this.updateA();
        this.updateE();
        this.updateI();
        this.updateW();
        this.updateRAAN();

        this.aSlider.addEventListener("input", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = true;
            this.updateA();
            this.selectedOrbitObj.params.semimajorAxis = this.aSlider.valueAsNumber;
        });
        this.iSlider.addEventListener("input", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = true;
            this.updateI();
            this.selectedOrbitObj.params.inclination = (this.iSlider.valueAsNumber) / this.RAD2DEG;
        });
        this.eSlider.addEventListener("input", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = true;
            this.updateE();
            this.selectedOrbitObj.params.eccentricity = this.eSlider.valueAsNumber;
        });
        this.wSlider.addEventListener("input", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = true;
            this.updateW();
            this.selectedOrbitObj.params.argPeriapsis = (this.wSlider.valueAsNumber) / this.RAD2DEG;
        });
        this.raanSlider.addEventListener("input", () => {
            this.selectedOrbitObj.updateTrailRecompute = true;
            this.updateRAAN();
            this.selectedOrbitObj.params.raan = (this.raanSlider.valueAsNumber) / this.RAD2DEG;
        });

        this.aSlider.addEventListener("change", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = false
        });
        this.iSlider.addEventListener("change", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = false
        });
        this.eSlider.addEventListener("change", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = false
        });
        this.wSlider.addEventListener("change", ()=> {
            this.selectedOrbitObj.updateTrailRecompute = false
        });
        this.raanSlider.addEventListener("change", () => {
            this.selectedOrbitObj.updateTrailRecompute = false
        });
    }

    setAvailableOrbits(list=[], maxA = 250) {
        this.orbitsOptions.innerHTML = "";
        this.orbits = list;

        if (list == []) {
            return;
        }

        // By default set to the first value
        this.raanSlider.value = list[0].params.raan * this.RAD2DEG;
        this.iSlider.value = (list[0].params.inclination * this.RAD2DEG);
        this.eSlider.value = list[0].params.eccentricity;
        this.aSlider.value = list[0].params.semimajorAxis;
        this.wSlider.value = list[0].params.argPeriapsis * this.RAD2DEG;

        this.updateA();
        this.updateE();
        this.updateI();
        this.updateW();
        this.updateRAAN();

        this.selectedOrbitObj = list[0];

        list.forEach(item => {
            const opt = document.createElement('button');
            opt.textContent = item.info.tabLabel;
            opt.classList.add("baseText", "observed-item");
            opt.style.fontSize = `1vw`;
            this.aSlider.max = maxA;
            this.aMaxLabel.textContent = maxA;
            opt.addEventListener("click", () => {
                if (this.selectedObjBtn) {
                    this.selectedObjBtn.classList.remove('selected-button');
                }

                opt.classList.add('selected-button');
                this.selectedObjBtn = opt;
                this.raanSlider.value = item.params.raan * this.RAD2DEG;
                this.iSlider.value = 90 - (item.params.inclination * this.RAD2DEG);
                this.eSlider.value = item.params.eccentricity;
                this.aSlider.value = item.params.semimajorAxis;
                this.wSlider.value = item.params.argPeriapsis * this.RAD2DEG;

                this.updateA();
                this.updateE();
                this.updateI();
                this.updateW();
                this.updateRAAN();

                this.selectedOrbitObj = item;
            });
            this.orbitsOptions.append(opt);
        });

        // First button is selected by default:
        this.selectedObjBtn = this.orbitsOptions.firstElementChild;
        this.selectedObjBtn.classList.add('selected-button');
    }

    updateRAAN() { this.updateSliderLabel(this.raanSlider, this.raanLab, "&deg;"); }
    updateA() { this.updateSliderLabel(this.aSlider, this.aLab); }
    updateW() { this.updateSliderLabel(this.wSlider, this.wLab, "&deg;"); }
    updateI() { this.updateSliderLabel(this.iSlider, this.iLab, "&deg;"); }
    updateE() { 
        const value = this.eSlider.valueAsNumber;
        this.eLab.innerHTML = `${value.toFixed(2).padStart(4,"0")}`;
    }

    updateSliderLabel(slider, label, suffix="") {
        // const value = (slider.value / 100) * parseFloat(slider.max);
        const value = slider.valueAsNumber;
        label.innerHTML = `${value.toFixed(1).padStart(4,"0")}${suffix}`;
    }

    // This will handle button states
    setFocusedObject(object) {
        this.focusedObject = object;
    }

    /*
    * TODO: Close the dropdown
    * Fade out content
    * Smoothly close the box
    * Disable the active button
    */
    closeDropdown(onComplete = null) {
        gsap.to(this.contentContainer, {
            height: "0vh",
            duration: DropdownManager.CONTENT_DURATION,
            onComplete: () => {
                console.log("CLOSING");
                if (onComplete) {onComplete();}
            },
        });
    }

    // Animate the height back to open
    expandDropdown() {
        console.log("opening dropdown");
        gsap.to(this.contentContainer, {
            height: 'auto',
            duration: DropdownManager.CONTENT_DURATION,
        });
    }

    /*
    * TODO: Display the orbit controls menu, configured for the visible inputs
    * There should be a drop down that specifies which object is being tweaked (color association with trail color)
    * Sliders should automatically update the orbit as tweaked
    * On open, sliders should display with the appropriate values of the default option in the menu
    * If the gallery is open, close the menu and reopen with the orbit one
    */
    openOrbitControls() {
        // this.focusedObject.info.children are the visible objects **
        this.controlsOpen = true;   
        // TODO: Update the dropdown of visible objects, set the default state of the menu
        //

        this.expandDropdown();
    }

}
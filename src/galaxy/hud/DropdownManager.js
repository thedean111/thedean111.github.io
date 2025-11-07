import { gsap } from 'gsap'


// Populates the drop down menu based on user choice, or disables it
// manages button states
export default class DropdownManager {
    static CONTENT_HEIGHT = "50vh";
    static CONTENT_DURATION = 0.25;

    constructor() {
        this.galleryBtn = document.getElementById("gallery-button");
        this.controlsBtn = document.getElementById("controls-button");

        this.contentContainer = document.getElementById("content-container");
        this.controlsContainer = document.getElementById("orbit-controls-container");
        this.galleryContainer = document.getElementById("gallery-container");

        this.galleryOpen = false;
        this.controlsOpen = false;

        this.focusedObject = null;
    }

    setEvents() {
        // This button's status should depend on if the current focus has a valid image path
        this.galleryBtn.addEventListener("click", () => {
            if (this.galleryOpen) {
                this.closeDropdown();
                this.galleryContainer.style.opacity = 0;
                this.galleryOpen = false;
            } else if (this.controlsOpen) {
                this.closeDropdown(() => {
                    this.controlsContainer.style.opacity = 0;
                    this.controlsOpen = false;
                    this.openGallery();
                });
            } else {
                this.openGallery();
            }
        });


        // This will always open the orbit controls
        this.controlsBtn.addEventListener('click', () => {
            if (this.controlsOpen) {
                this.closeDropdown();
                this.controlsContainer.style.opacity = 0;
                this.controlsOpen = false;
            } else if (this.galleryOpen) {
                console.log("closing gallery");
                this.closeDropdown(() => {
                    this.galleryContainer.style.opacity = 0;
                    this.galleryOpen = false;
                    this.openOrbitControls();
                });
            } else {
                this.openOrbitControls();
            }
        });
    }

    // This will handle button states
    setFocusedObject(object) {
        this.focusedObject = object;
        if (object.info.galleryPath == "") {
            this.galleryBtn.disabled = true;
        } else {
            this.galleryBtn.disabled = false;
        }
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
            height: DropdownManager.CONTENT_HEIGHT,
            duration: DropdownManager.CONTENT_DURATION,
        });
    }

    /*
    * TODO: Display all the images that are located in the directory 'galleryPath'
    * If the the dropdown is populated with orbit controls, close the menu
    *   then open it back up with the gallery
    * If there are no photos in the galleryPath (or invalid directory) the button shouldn't even be on
    */
    openGallery() {
        // Sanity check
        if (this.focusedObject && !this.focusedObject.info.galleryPath) {
            return;
        }
        this.galleryOpen = true;
        // TODO: Change this to actually displaying images
        this.galleryContainer.style.opacity = 1;
        //

        this.expandDropdown();
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
        this.controlsContainer.style.opacity = 1;
        //

        this.expandDropdown();
    }

}
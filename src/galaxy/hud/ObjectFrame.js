import * as THREE from 'three'
import { gsap } from "gsap"

import TextManager from './TextManager';

export default class ObjectFrame {
    constructor(camera, sun) {
        this.frame = document.getElementById("frame-container");
        this.header = document.getElementById("description-header");
        this.content = document.getElementById("description-content");
        this.container = document.getElementById("description-container");
        this.camera = camera;
        this.sun = sun;
        this.textMgr = new TextManager();
        this.headerTxt = "";
        this.bodyTxt = "";
        this.updateDetails = false;
        this.tmpUpdateDetails = false;
        this.focusedObject = null;

        this.posDamp = 4;
        this.rotDamp = 8;
        this.desiredPos = new THREE.Vector3();
        this.desiredQuat = new THREE.Quaternion();
        this.tmpPos = new THREE.Vector3();
        this.tmpQuat = new THREE.Quaternion();
        this.tmpScale = new THREE.Vector3();
        this.up = new THREE.Vector3(0, 1, 0);


        // Setup for reused GSAP animations
        this.camX = gsap.quickTo(this.camera.position, "x", {duration: 3, ease: "power2.out"});
        this.camY = gsap.quickTo(this.camera.position, "y", {duration: 3, ease: "power2.out"});
        this.camZ = gsap.quickTo(this.camera.position, "z", {duration: 3, ease: "power2.out"});


        this.frame.addEventListener('transitionend', () => {
            if (this.updateDetails) {
                this.container.style.setProperty('--contentWidth', `30vw`);
                this.container.style.opacity = 1;
            }
        });

        this.container.addEventListener('transitionend', () => {
            if (this.updateDetails && this.container.style.getPropertyValue('--contentWidth') == `30vw`) {
                this.writeDetails();
            }
        });
    }

    writeDetails() {
        this.updateDetails = false;
        if (this.focusedObject){
            this.textMgr.setText('#description-header', ["^500" + this.focusedObject.info.header], true, false, 10, () => {
                this.textMgr.setText('#description-content', ["^500" + this.focusedObject.info.body], true, true, .01);
            });
        }
    }

    closeDetails() {
        this.container.style.setProperty('--contentWidth', `0vw`);
        this.container.style.opacity = 0;
    }

    updateFrameSize() {
        if (!this.focusedObject) { return; }
        const gap = this.focusedObject.info.frameGap;
        this.frame.style.setProperty('--gapX', `${gap.x}vw`);
        this.frame.style.setProperty('--gapY', `${gap.y}vh`);
    }

    // Move the camera to the object, when the camera settles open the frame and display the text
    setFocus(newObject, moveCamera=true) {
        if (this.focusedObject == newObject) {
            return;
        }
        this.focusedObject = newObject;

        if (!moveCamera) {
            this.updateFrameSize();
            return;
        }

        // Close the little cross hairs before moving the camera
        this.tmpUpdateDetails = this.updateDetails;
        this.updateDetails = false;
        this.textMgr.removeText('#description-header');
        this.textMgr.removeText('#description-content');
        this.container.style.setProperty('--contentWidth', `0vw`);
        this.container.style.opacity = 0
        this.frame.style.setProperty('--gapX', `0px`);
        this.frame.style.setProperty('--gapY', `0px`);


        // NOTE: When focus is set to an object, it is assumed that it will eventually stop moving
        // Approach 1: Two tweens, one that goes to the current position, then another that goes to the final position
        //  while the lookAt always smoothly follows the target
        // TODO: THIS CAN SHOW SOME WEIRD BEHAVIOR LIKE GOING THROUGH OBJECTS, THE TARGETING NEEDS SOME LOGIC FOR FOLLOWING LINE OF SIGHT TO GET CLOSE ENOUGH
        const t1 = new THREE.Vector3()
        t1.add(this.focusedObject.object.position);
        t1.add(this.focusedObject.info.cameraOffset);
        const gap = this.focusedObject.info.frameGap;
        this.sun.target.position.set(this.focusedObject.object.position.x, this.focusedObject.object.position.y, this.focusedObject.object.position.z);
        gsap.to(this.camera.position, {
            x: t1.x,
            y: t1.y,
            z: t1.z,
            duration: 1.75,
            ease: "sine.Out",
            onUpdate: () => {
                this.sun.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
            },
            onComplete: () => {
                const t2 = new THREE.Vector3();
                t2.add(this.focusedObject.object.position);
                t2.add(this.focusedObject.info.cameraOffset);
                gsap.to(this.camera.position, {
                    x: t2.x,
                    y: t2.y,
                    z: t2.z,
                    duration: 0.75,
                    ease: "sine.inOut",
                    onUpdate: () => {
                        this.sun.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
                    },
                    onComplete: () => {
                        this.updateDetails = this.tmpUpdateDetails;
                        this.sun.target.position.set(this.focusedObject.object.position.x, this.focusedObject.object.position.y, this.focusedObject.object.position.z);
                        this.frame.style.setProperty('--gapX', `${gap.x}vw`);
                        this.frame.style.setProperty('--gapY', `${gap.y}vh`);
                        // this.fitObject(this.focusedObject.object);
                    },
                });
            }
        });
        
    }

    computeDesiredPose(object, localOffset, outPos, outQuat) {
        object.updateWorldMatrix(true, false);
        object.matrixWorld.decompose(this.tmpPos, this.tmpQuat, this.tmpScale);

        // desired camera world position = objectWorldPos + objectWorldRot * localOffset
        outPos.copy(localOffset).applyQuaternion(this.tmpQuat).add(this.tmpPos);

        // desired camera rotation to look at the object (from desiredPos)
        const m = new THREE.Matrix4().lookAt(outPos, this.tmpPos, this.up);
        outQuat.setFromRotationMatrix(m);
    }

    update(dt) {
        if (this.focusedObject) {
            // const x = this.focusedObject.object.position.x + this.focusedObject.info.cameraOffset.x;
            // const y = this.focusedObject.object.position.y + this.focusedObject.info.cameraOffset.y;
            // const z = this.focusedObject.object.position.z + this.focusedObject.info.cameraOffset.z;

            // this.camX(x);
            // this.camY(y);
            // this.camZ(z);

            this.camera.lookAt(this.focusedObject.object.position);
        }
    }
}
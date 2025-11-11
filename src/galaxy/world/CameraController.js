import { Vector3, Vector2 } from "three";
import { gsap } from "gsap";

export default class CameraController {
    constructor(camera, canvas) {
        this.camera = camera;
        this.theta = 0; // horizonal spherical position
        this.phi = 1; // vertical spherical position
        this.center = new Vector3();
        this.distance = 200;
        this.smoothingFactor = 0.01;
        this.mouseClickPosition = new Vector2();
        this.isPointerDown = false;
        canvas.addEventListener('pointerdown', (e) => {
            console.log("POINTER DOWN");
            if (e.target != canvas) { return; }
            this.mouseClickPosition.set(e.clientX, e.clientY);  
            this.isPointerDown = true;
        });

        canvas.addEventListener('pointermove', (e) => {
            if (!this.isPointerDown) {return;}
            const dx = e.clientX - this.mouseClickPosition.x;
            const dy = e.clientY - this.mouseClickPosition.y;

            this.theta += (dx * this.smoothingFactor);
            this.theta %= (2 * Math.PI);
            this.phi += (-dy * this.smoothingFactor);

            if (this.phi < 0) {
                this.phi = 0.001;
            }

            if(this.phi > Math.PI) {
                this.phi = Math.PI;
            }

            const p = this.computeCartesian(this.theta, this.phi, this.distance);
            this.camera.position.x = p.x + this.center.x;
            this.camera.position.y = p.y + this.center.y;
            this.camera.position.z = p.z + this.center.z;
            
            this.mouseClickPosition.set(e.clientX, e.clientY);  

        });

        canvas.addEventListener("pointerup", (e) => {
            this.isPointerDown = false;
        });

        // Setup for reused GSAP animations
        this.camX = gsap.quickTo(this.camera.position, "x", {duration: 3, ease: "power2.out"});
        this.camY = gsap.quickTo(this.camera.position, "y", {duration: 3, ease: "power2.out"});
        this.camZ = gsap.quickTo(this.camera.position, "z", {duration: 3, ease: "power2.out"});
    }

    transitionCamera({onComplete=null, onUpdate=null, center = new Vector3(), theta=0, phi=1, distance=10}={}) {
        this.theta = theta;
        this.phi = phi;
        this.distance = distance;
        this.center = center;
        const target = this.computeCartesian(theta, phi, distance);
        target.x += center.x;
        target.y += center.y;
        target.z += center.z;
        gsap.to(this.camera.position, {
            x: target.x,
            y: target.y,
            z: target.z,
            duration: 0.75,
            ease: "sine.inOut",
            onUpdate: () => {if(onUpdate) {onUpdate();}},
            onComplete: () => {if(onComplete) {onComplete();}}
        })
    }

    setCameraPosition(center=new Vector3(), theta = 0, phi=1, distance = 10) {
        this.theta = theta;
        this.phi = phi;
        this.distance = distance;
        this.center = center;
        const target = this.computeCartesian(theta, phi, distance);
        target.x += center.x;
        target.y += center.y;
        target.z += center.z;
        this.camera.position.set(target.x, target.y, target.z);
    }

    computeCartesian(theta, phi, distance) {
        return new Vector3(
            distance * Math.cos(theta) * Math.sin(phi),
            distance * Math.cos(phi),
            distance * Math.sin(phi) * Math.sin(theta)
        );
    }

    setCamLook(target) {
        this.camera.lookAt(target);
    }

    copyCamPositionTo(target) {
        target.set(
            this.camera.position.x,
            this.camera.position.y,
            this.camera.position.z
        );
    }

}
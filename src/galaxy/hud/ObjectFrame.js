import * as THREE from 'three'
import TextManager from './TextManager';
export default class ObjectFrame {
    constructor() {
        this.frame = document.getElementById("frame-container");
        this.header = document.getElementById("description-header");
        this.content = document.getElementById("description-content");
        this.container = document.getElementById("description-container");

        this.textMgr = new TextManager();
        this.headerTxt = "";
        this.bodyTxt = "";
        this.updateDetails = false;

        this.frame.addEventListener('transitionend', () => {
            if (this.updateDetails) {
                this.container.style.setProperty('--contentWidth', `25vw`);
            }
        })

        this.container.addEventListener('transitionend', () => {
            if (this.updateDetails) {
                this.writeDetails();
            }
        })
    }

    fitObject(object, camera) {
        const box = new THREE.Box3().setFromObject(object);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector2();
        box.getCenter(center);

        // Need to find the screen-space max and min of the box
        const corners = [
            new THREE.Vector3(box.min.x, box.min.y, box.min.z),
            new THREE.Vector3(box.min.x, box.min.y, box.max.z),
            new THREE.Vector3(box.min.x, box.max.y, box.min.z),
            new THREE.Vector3(box.min.x, box.max.y, box.max.z),
            new THREE.Vector3(box.max.x, box.min.y, box.min.z),
            new THREE.Vector3(box.max.x, box.min.y, box.max.z),
            new THREE.Vector3(box.max.x, box.max.y, box.min.z),
            new THREE.Vector3(box.max.x, box.max.y, box.max.z)
        ]
        let minX = Infinity, maxX = -Infinity, maxY = -Infinity, minY = Infinity;

        corners.forEach(c => {
            c.project(camera);
            const x = (c.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-c.y * 0.5 + 0.5) * window.innerHeight;
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        });

        let padding = -100;
        const width = maxX - minX + (2 * padding);
        const height = maxY - minY + (2 * padding);
        console.log("W: " + width + ", H: " + height);
        this.frame.style.setProperty('--gapX', `${width}px`);
        this.frame.style.setProperty('--gapY', `${height}px`);
    }

    writeDetails() {
        this.updateDetails = false;
        this.textMgr.setText('#description-header', ["^500" + this.headerTxt], true, false, () => {
            this.textMgr.setText('#description-content', ["^500" + this.bodyTxt], true, true);
        })
    }

    setDetails(header, body) {
        this.headerTxt = header;
        this.bodyTxt = body;
    }
}
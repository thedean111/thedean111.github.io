// Use typing library
import Typed from "typed.js"

export default class TextManager {
    constructor() {
        this.testText = document.getElementById('testText');
        this.testTyped = null;
    }

    setText(text=[], typeOut=true) {
        if (text == null || text == []) {
            console.log('Invalid text input');
            return;
        }

        if (this.testTyped) {
            this.testTyped.destroy();
            this.testTyped = null;
        }

        if (!typeOut) {
            this.testText.textContent = text;
            return;
        }

        this.testTyped = new Typed("#testText", {
            strings: text,
            typeSpeed: 30,
            showCursor: true,
            cursorChar: '█'
        });
    }
}
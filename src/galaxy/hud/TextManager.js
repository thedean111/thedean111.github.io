// Use typing library
import Typed from "typed.js"

export default class TextManager {
    constructor() {
        this.testText = document.getElementById('testText');
        this.testTyped = null;
    }

    setText(elementID, text=[], typeOut=true, showCursor=false, onComplete) {
        // For some reason if there is no text, don't do anything
        if (text == null || text == []) {
            console.log('Invalid text input');
            return;
        }

        // If the same element is getting overwritten, destroy the previous string (and cursor)
        if (this.testTyped && this.testTyped.elementID == elementID) {
            this.testTyped.destroy();
            this.testTyped = null;
        }

        // If we don't want to type it out for some reason just 
        if (!typeOut) {
            this.testText.textContent = text;
            return;
        }

        this.testTyped = new Typed(elementID, {
            strings: text,
            typeSpeed: 30,
            showCursor: showCursor,
            cursorChar: '█',
            onComplete: function() {
                if (onComplete) {
                    console.log("running on complete");
                    onComplete()
                }
            }
        });
    }
}
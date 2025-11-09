// Use typing library
import Typed from "typed.js"

export default class TextManager {
    constructor() {
        this.testText = document.getElementById('testText');
        this.testTyped = {};
    }

    setText(elementID, text=[], typeOut=true, showCursor=false, speed=10, onComplete) {
        // For some reason if there is no text, don't do anything
        if (text == null || text == []) {
            console.log('Invalid text input');
            return;
        }

        // If the same element is getting overwritten, destroy the previous string (and cursor)
        if (elementID in this.testTyped) {
            this.testTyped[elementID].destroy();
            delete this.testTyped[elementID];
        }

        // If we don't want to type it out for some reason just 
        if (!typeOut) {
            this.testText.textContent = text;
            return;
        }

        this.testTyped[elementID] = new Typed(elementID, {
            strings: text,
            typeSpeed: speed,
            showCursor: showCursor,
            cursorChar: '█',
            onComplete: function() {
                if (onComplete) {
                    onComplete()
                }
            }
        });
    }

    removeText(elementID) {
        if (elementID in this.testTyped) {
            this.testTyped[elementID].destroy();
            delete this.testTyped[elementID];
        }
    }
}
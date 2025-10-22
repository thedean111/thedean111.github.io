import {GUI} from 'lil-gui'

export class MyGUI {
    constructor () {
        this.gui = new GUI();
    }

    addColor(obj, paramName) {
        // this.gui.addColor(new ColorGUIHelper(obj, 'color'), 'value').name(paramName);
        this.gui.addColor({color:obj.color.getHex()}, 'color')
        .name(paramName).onChange((value) => {
            obj.color.set(value);
        });
    }

    addColorToFolder(folder, obj, paramName) {
        folder.addColor({color:obj.color.getHex()}, 'color')
        .name(paramName).onChange((value) => {
            obj.color.set(value);
        });
    }

    addProp(obj, prop, paramName) {
        this.gui.add(obj, prop).name(paramName);
    }

    addProp(obj, prop, paramName, min, max, incr) {
        this.gui.add(obj, prop, min, max, incr).name(paramName);
    }

    addVector(obj, prop, folderName) {
        let folder = this.gui.addFolder(folderName);
        folder.add(obj, 'x').name('X');
        folder.add(obj, 'y').name('Y');
        folder.add(obj, 'z').name('Z');
    }

    addVector(obj, prop, min, max, incr) {
        this.gui.add(obj, 'x', min, max, incr).name('X');
        this.gui.add(obj, 'y', min, max, incr).name('Y');
        this.gui.add(obj, 'z', min, max, incr).name('Z');
    }

    addVectorToFolder(folder, obj, prop, min, max, incr) {
        let f = folder.addFolder(prop);
        f.add(obj, 'x', min, max, incr).name('X');
        f.add(obj, 'y', min, max, incr).name('Y');
        f.add(obj, 'z', min, max, incr).name('Z');
    }

    makeFolder(name) {
        return this.gui.addFolder(name);
    }

    
}

// export class ColorGUIHelper {
//     constructor(object, prop) {
//         this.object = object;
//         this.prop = prop;
//     }

//     get value() {
//         return 
//         this.object[this.prop].getHexString()
//         ;
//     }

//     set value(hexString) {
//         this.object[this.prop].set(hexString);
//     }
// }
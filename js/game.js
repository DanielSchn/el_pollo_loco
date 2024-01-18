let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener('keydown', (e) => {
    if (e.keyCode == 32) {
        keyboard.JUMP = true;
    }

    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    
    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    
    if (e.keyCode == 69) {
        keyboard.THROW = true;
    }
});


window.addEventListener('keyup', (e) => { 
    if (e.keyCode == 32) {
        keyboard.JUMP = false;
    }

    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    
    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    
    if (e.keyCode == 69) {
        keyboard.THROW = false;
    }
});
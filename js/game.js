let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('startScreenButtons').classList.add('d-none');
}

function startImage() {
    let ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 720, 480);
    }
    img.src = 'img/9_intro_outro_screens/start/startscreen_1.png';
}

function showHelp() {
    document.getElementById('instructions').classList.toggle('d-flex');
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 87) {
        keyboard.JUMP = true;
    }

    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 32) {
        keyboard.THROW = true;
    }
});


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 87) {
        keyboard.JUMP = false;
    }

    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 32) {
        keyboard.THROW = false;
    }
});
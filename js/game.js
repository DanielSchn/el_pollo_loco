let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('helpButton').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
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
let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let i = 1;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('helpButton').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('soundButtonOn').classList.remove('d-none');
    document.getElementById('resetGame').classList.remove('d-none');
    document.getElementById('buttons').style.justifyContent = 'center';
    document.getElementById('buttons').style.gap = '32px';
    document.getElementById('instructions').classList.remove('d-flex');
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


function goFullScreen() {
    let canvasContainer = document.getElementById('container');
    if (canvasContainer.requestFullscreen) {
        canvasContainer.requestFullscreen();
    } else if (canvasContainer.mozRequestFullScreen) {
        canvasContainer.mozRequestFullScreen();
    } else if (canvasContainer.webkitRequestFullscreen) {
        canvasContainer.webkitRequestFullscreen();
    } else if (canvasContainer.msRequestFullscreen) {
        canvasContainer.msRequestFullscreen();
    }
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}


function stopGame() {
    intervalIds.forEach(clearInterval);
}
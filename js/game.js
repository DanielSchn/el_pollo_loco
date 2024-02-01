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
    let img = new Image;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 720, 480);
    }
    img.src = 'img/9_intro_outro_screens/start/startscreen_1.png';
}


function lostImage() {
    document.getElementById('lostImage').classList.remove('d-none');
}


function wonImage() {
    document.getElementById('wonImage').classList.remove('d-none');
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
    document.getElementById('fullScreenButton').classList.add('d-none');
    document.getElementById('exitFullScreenButton').classList.remove('d-none');
}


function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozExitFullScreen) {
        document.mozExitFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    document.getElementById('exitFullScreenButton').classList.add('d-none');
    document.getElementById('fullScreenButton').classList.remove('d-none');
}


function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}


function stopGame() {
    intervalIds.forEach(clearInterval);
}
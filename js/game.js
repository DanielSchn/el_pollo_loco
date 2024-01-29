let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('helpButton').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('soundButtonOn').classList.remove('d-none');
    document.getElementById('resetGame').classList.remove('d-none');
    document.getElementById('buttons').style.justifyContent = 'center';
    document.getElementById('buttons').style.gap = '32px';
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

function goFullScreen(){
    var canvas = document.getElementById('canvas');
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}
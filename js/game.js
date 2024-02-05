let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let i = 1;
let music = new Audio('audio/music.mp3');


/**
 * Init function, which initialises the game and thus starts it.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    handleShowableButtons();
}


/**
 * Function to show or hide buttons to control the game.
 */
function handleShowableButtons() {
    document.getElementById('helpButton').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('soundButtonOn').classList.remove('d-none');
    document.getElementById('resetGame').classList.remove('d-none');
    document.getElementById('buttons').style.justifyContent = 'center';
    document.getElementById('buttons').style.gap = '32px';
    document.getElementById('instructions').classList.remove('d-flex');
    document.getElementById('showKeysForGame').classList.remove('d-none');
    if (window.innerWidth < 730 || window.innerHeight < 480) {
        document.getElementById('mobileGameButtons').style.display = 'flex';
    }
}


/**
 * Function for displaying a start image in the canvas container.
 */
function startImage() {
    let ctx = document.getElementById('canvas').getContext('2d');
    let img = new Image;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 720, 480);
    }
    img.src = 'img/9_intro_outro_screens/start/startscreen_1.png';
}


/**
 * Function for displaying a picture overlay when the game has been lost.
 */
function lostImage() {
    document.getElementById('lostImage').classList.remove('d-none');
}


/**
 * Function for displaying a picture overlay when the game has been won.
 */
function wonImage() {
    document.getElementById('wonImage').classList.remove('d-none');
}


/**
 * Function for displaying an image overlay with instructions on gameplay and controls.
 */
function showHelp() {
    document.getElementById('instructions').classList.toggle('d-flex');
}


/**
 * Function for playing and adjusting the volume of the background music.
 */
function playMusic() {
    music.play();
    music.volume = 0.2;
    music.loop = 'loop';
}


/**
 * Function to stop the background music.
 */
function stopMusic() {
    music.pause();
}


/**
 * Function for displaying the game in full screen mode.
 */
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
    toggleFullScreenButton();
}


/**
 * Function to exit full screen mode.
 */
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
    toggleFullScreenButton();
}


/**
 * Function to change the appearance of the button for full screen mode.
 */
function toggleFullScreenButton() {
    document.getElementById('fullScreenButton').classList.toggle('d-none');
    document.getElementById('exitFullScreenButton').classList.toggle('d-none');
}


/**
 * This function combines all setInterval functions into a new function collection called setStoppableInterval. 
 * SetStoppableInterval is an array called intervalIds.
 * 
 * @param {value} fn - Value to pass the entire function within the setInterval function.
 * @param {value} time - Value to pass the interval time.
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}


/**
 * This function can be used to stop all setInterval functions that are stored with the intervalId in the intervalIds array.
 */
function stopGame() {
    intervalIds.forEach(clearInterval);
}


function toggleInstructionsSites() {
    document.getElementById('instructionsSiteOne').classList.toggle('d-none');
    document.getElementById('instructionsSiteTwo').classList.toggle('d-none');
    let button = document.getElementById('howToPlay');
    if (button.innerHTML === 'Back') {
        button.innerHTML = 'How to play';
    } else {
        button.innerHTML = 'Back';
    }
}



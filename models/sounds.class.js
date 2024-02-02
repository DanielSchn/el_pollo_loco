class Sounds extends MovableObject {
    soundsAreEnabled = false;

    constructor() {
        super();
        this.sounds = {
            run: new Audio('audio/walking_short.mp3'),
            jump: new Audio('audio/jump.mp3'),
            characterDeath: new Audio('audio/death.mp3'),
            stop: new Audio('audio/stop.mp3'),
            chicken: new Audio('audio/chicken_low_noise.mp3'),
            coin: new Audio('audio/coin.mp3'),
            throw: new Audio('audio/throw.mp3'),
            bottle: new Audio('audio/bottle.mp3'),
            hurt: new Audio('audio/hurt.mp3'),
            endboss: new Audio('audio/chicken_cut.mp3')
        };
    }


    playSound(soundKey) {
        if (this.soundsAreEnabled) {
            const sound = this.sounds[soundKey];
            if (sound) {
                sound.play();
                this.sounds.endboss.volume = 0.4;
            }
        }
    }


    toggleSound() {
        this.soundsAreEnabled = !this.soundsAreEnabled;
        document.getElementById('soundButtonOn').classList.toggle('d-none');
        document.getElementById('soundButtonOff').classList.toggle('d-none');
    }
}
class Chicken extends MovableObject {
    height = 60;
    width = 62;
    y = 375;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[1]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 500 + Math.random() * 2500;
        this.speed = 0.05 + Math.random();
        this.animateChicken();
    }

    animateChicken() {
        setInterval(() => {
            this.moveLeft(false);
        }, 1000 / 60);

        setInterval(() => {
            console.log(this.chickenEnergy);
            if (this.chickenEnergy == 1) {
                this.playAnimation(this.IMAGES_WALKING);
            } 
            if (this.chickenEnergy == 0) {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 200);
    }

    // die() {
    //     this.playDeathAnimation();
    // }

    // playDeathAnimation() {
    //     setInterval(() => {
    //         this.img = this.imageCache[this.IMAGES_DEAD[0]];
    //     }, 200);
    // }
}
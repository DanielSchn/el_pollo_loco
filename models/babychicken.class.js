class BabyChicken extends MovableObject {
    height = 50;
    width = 52;
    y = 380;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[1]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 500 + Math.random() * 2500;
        this.speed = 0.05 + Math.random();
        this.animateChicken();
        
    }

    animateChicken() {
        setInterval(() => {
            this.moveLeft(false);
        }, 1000 / 60);
        

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}
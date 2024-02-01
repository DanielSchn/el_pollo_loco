class Chicken extends MovableObject {
    height = 60;
    width = 62;
    y = 375;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_SMALL_CHICKEN_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    IMAGES_SMALL_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor(isSmall = false) {
        super().loadImage(this.IMAGES_WALKING[1]);
        if (isSmall) {
            this.loadSmallChickenImages();
        } else {
            this.loadNormalChickenImages();
        }
        this.x = 500 + Math.random() * 2500;
        this.speed = 0.05 + Math.random();
        this.animateChicken(isSmall);
    }

    animateChicken(isSmall) {
        setStoppableInterval(() => this.moveChicken(), 1000 / 60);
        setStoppableInterval(() => this.playChicken(isSmall), 200);
    }


    moveChicken() {
        if (this.isDead()) {
        } else {
            this.moveLeft(false);
        }
    }


    playChicken(isSmall) {
        if (this.isDead()) {
            if (isSmall) {
                this.playAnimation(this.IMAGES_SMALL_DEAD);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        } else {
            if (isSmall) {
                this.playAnimation(this.IMAGES_SMALL_CHICKEN_WALKING);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }


    loadSmallChickenImages() {
        this.loadImages(this.IMAGES_SMALL_CHICKEN_WALKING);
        this.loadImages(this.IMAGES_SMALL_DEAD);
    }


    loadNormalChickenImages() {
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
    }
}
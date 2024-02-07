class Chicken extends MovableObject {
    height = 60;
    width = 62;
    y = 360;

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


    /**
     * This is the main function for calling up the animation and movement of the chickens.
     * 
     * @param {Object} isSmall - This gives the command to animate and draw a small chicken.
     */
    animateChicken(isSmall) {
        setStoppableInterval(() => this.moveChicken(), 1000 / 60);
        setStoppableInterval(() => this.playChicken(isSmall), 200);
    }


    /**
     * Here the chickens are moved to the left using the moveLeft function if the chickens are not dead.
     */
    moveChicken() {
        if (!this.isDead()) {
            this.moveLeft(false);
        }
    }


    /**
     * This plays the animations for the small and large chickens. The run and death animations are animated here.
     * 
     * @param {Object} isSmall - If isSmall is true the little chickens will be draw and animate.
     */
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


    /**
     * This load all images for the small chicken into the image cache.
     */
    loadSmallChickenImages() {
        this.loadImages(this.IMAGES_SMALL_CHICKEN_WALKING);
        this.loadImages(this.IMAGES_SMALL_DEAD);
    }


    /**
     * This load all images for the normal chicken into the image cache.
     */
    loadNormalChickenImages() {
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
    }
}
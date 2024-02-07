class ThrowableObject extends MovableObject {
    IMAGES_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    
    constructor(x, y) {
        super().loadImage(this.IMAGES_ROTATION[0]);
        this.loadImages(this.IMAGES_ROTATION);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 65;
        this.throw();
        this.animateThrow();
    }


    /**
     * This calls up the function for throwing an object. Among other things, the gravity is taken into account. 
     */
    throw() {
        this.speedY = 20;
        this.applyGravity();
        setStoppableInterval(() => {
            this.x += 15;
        }, 25);
    }


    /**
     * Play the animation for the throw.
     */
    animateThrow() {
        setStoppableInterval(() => this.playAnimation(this.IMAGES_ROTATION), 60);
    }
}
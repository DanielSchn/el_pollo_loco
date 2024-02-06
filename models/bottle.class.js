class Bottle extends MovableObject {
    width = 65;
    height = 70;
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/salsa_bottle.png',
        'img/6_salsa_bottle/salsa_bottle_2.png'
    ];

    
    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[1]);
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 600 + Math.random() * 2800;
        this.y = 75 + Math.random() * 150;
        this.animateBottle();
    }


    animateBottle() {
        setStoppableInterval(() => this.playAnimation(this.IMAGES_BOTTLE), 400);
    }
}
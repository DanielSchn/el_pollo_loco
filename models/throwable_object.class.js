class ThrowableObject extends MovableObject {


    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 65;
        this.throw();
    }


    throw() {
        this.speedY = 20;
        this.applyGravity();
        setStoppableInterval(() => {
            this.x += 15;
        }, 25);
    }
}
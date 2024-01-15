class Cloud extends MovableObject {
    y = 0;
    height = 270;
    width = 480;
    
    
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        // this.x = Math.random() * 500;
        this.x = 680;
        this.animateCloud();

    }

    animateCloud() {
        this.moveLeft();
    }
}
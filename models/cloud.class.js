class Cloud extends MovableObject {
    y = 0;
    height = 270;
    width = 480;
    
    
    constructor(x) {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = x;
        this.animateCloud();
    }

    animateCloud() {
        this.moveLeft();
    }
}
class Cloud extends MovableObject {
    y = 0;
    height = 270;
    width = 480;
    
    
    constructor(x, cloud) {
        super().loadImage(cloud);
        this.x = x;
        this.animateCloud();
    }

    
    /**
     * This animate the moving from the clouds in the sky.
     */
    animateCloud() {
        this.moveLeft();
    }
}
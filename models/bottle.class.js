class Bottle extends MovableObject {
    width = 100;
    height = 100;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 600 + Math.random() * 1600;
        this.y = 75 + Math.random() * 150;
    }
}
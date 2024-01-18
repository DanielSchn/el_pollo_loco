class Coin extends MovableObject {
    width = 150;
    height = 150;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 600 + Math.random() * 1600;
        this.y = 50 + Math.random() * 150;
    }
}
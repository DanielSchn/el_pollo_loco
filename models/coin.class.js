class Coin extends MovableObject {
    width = 100;
    height = 100;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 600 + Math.random() * 2900;
        this.y = 50 + Math.random() * 150;
    }
}
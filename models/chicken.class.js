class Chicken extends MovableObject {
    height = 60;
    width = 62;
    y = 375;
    imagePaths = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    currentPathIndex = 0;

    constructor() {
        super().loadImage(this.imagePaths[0]);
        this.animateChicken();
        this.x = 200 + Math.random() * 500;
    }

    animateChicken() {
        setInterval(() => {
            this.x -= 2;
            this.currentPathIndex = (this.currentPathIndex + 1) % this.imagePaths.length;
            this.loadImage(this.imagePaths[this.currentPathIndex]);
        }, 1000);
    }

}
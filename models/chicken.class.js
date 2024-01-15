class Chicken extends MovableObject {
    height = 60;
    width = 62;
    y = 375;
    IMAGES_CHICKEN = [
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_CHICKEN);
        this.x = 300 + Math.random() * 500;
        this.speed = 0.05 + Math.random();
        this.animateChicken();
        
    }

    animateChicken() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_CHICKEN.length;
            let path = this.IMAGES_CHICKEN[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }

    // animateChicken() {
    //     setInterval(() => {
    //         this.x -= 2;
    //         this.currentImage = (this.currentImage + 1) % this.IMAGES_CHICKEN.length;
    //         this.loadImage(this.IMAGES_CHICKEN[this.currentImage]);
    //     }, 1000);
    // }

}
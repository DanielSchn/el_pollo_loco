class Coin extends MovableObject {
    width = 100;
    height = 100;
    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = 600 + Math.random() * 2900;
        this.y = 50 + Math.random() * 150;
        this.animateCoin();
    }

    
    animateCoin() {
        setStoppableInterval(() => this.playAnimation(this.IMAGES_COIN), 400);
    }
}
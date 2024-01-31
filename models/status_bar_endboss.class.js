class StatusBarEndboss extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
    ];
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 510;
        this.y = 5;
        this.width = 198;
        this.height = 52;
        this.setPercentage(100);
        this.stopAnimation();
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        console.log(this.percentage);
    }


    resolveImageIndex() {
        if (this.percentage > 9) {
            return 5;
        } else if (this.percentage > 7) {
            return 4;
        } else if (this.percentage > 5) {
            return 3;
        } else if (this.percentage > 3) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }

    stopAnimation() {
        setInterval(() => {
            if(this.percentage == 0) {
                stopGame();
            }    
        }, 2000);
    }
}
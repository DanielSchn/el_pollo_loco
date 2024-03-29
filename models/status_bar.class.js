class StatusBar extends DrawableObject {
    percentage = 100;
    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 0;
        this.width = 198;
        this.height = 52;
        this.setPercentage(100);
        this.stopAnimation();
    }


    /**
     * The percentage values for displaying the status bar are read out here. Depending on the value, a different image is used for display.
     * 
     * @param {Object} percentage - Call percentage from individual objects. 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Depending on the percentage value, a different value is returned to call up an image.
     * 
     * @returns - Value for display other image.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
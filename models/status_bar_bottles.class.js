class StatusBarBottles extends DrawableObject {
    percentage = 0;
    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 100;
        this.width = 198;
        this.height = 52;
        this.setPercentage(0);
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
        if (this.percentage >= 10) {
            return 5;
        } else if (this.percentage > 8) {
            return 4;
        } else if (this.percentage > 6) {
            return 3;
        } else if (this.percentage > 4) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}
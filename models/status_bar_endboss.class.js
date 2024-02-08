class StatusBarEndboss extends DrawableObject {
    percentage = 100;
    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
    ];
    

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
        if (this.percentage > 4) {
            return 5;
        } else if (this.percentage > 3) {
            return 4;
        } else if (this.percentage > 2) {
            return 3;
        } else if (this.percentage > 1) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
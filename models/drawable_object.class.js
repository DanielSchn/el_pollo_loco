class DrawableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;


    /**
     * This function draws the images in the canvas container.
     * 
     * @param {Object} ctx - ctx is the object to draw into the canvas container.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * This function loads a new image and generates the path for further processing.
     * 
     * @param {string} path - The path to the image from the drawable objects.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * This function draws a frame around objects. This is mainly useful for development.
     * Only objects of the character, chickens, endboss, bottle and coin are taken into account.
     * 
     * @param {Object} ctx - ctx is the object to draw into the canvas container.
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Bottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * This function ends the game and then shows a won or lost overlay.
     */
    stopAnimation() {
        setInterval(() => {
            if (this.percentage == 0) {
                stopGame();
                if (this instanceof StatusBar) {
                    lostImage();
                }
                if (this instanceof StatusBarEndboss) {
                    wonImage();
                }
            }
        }, 2000);
    }
}
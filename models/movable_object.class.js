class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;


    loadImage(path) {
        this.img = new Image(); // same as <img>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving Right');
    }


    moveLeft() {

    }
}
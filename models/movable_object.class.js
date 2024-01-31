class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    offsetY = 0;
    offsetX = 50;
    energy = 100;
    lasHit = 0;

    applyGravity() {
        setStoppableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    hit() {
        if (this instanceof Endboss) {
            this.energy -= 10;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lasHit = new Date().getTime();
            }
        } if (this instanceof Chicken) {
            this.energy -= 100;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lasHit = new Date().getTime();
            }
        }
        else {
            this.energy -= 0.5;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lasHit = new Date().getTime();
            }
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lasHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    isDead() {
        return this.energy <= 0;
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 132;
        }
    }


    isColliding(mo) {
        return (this.x + this.width - this.offsetX) >= mo.x &&
            this.x <= (mo.x + mo.width - this.offsetX) &&
            (this.y + this.offsetY + this.height) >= mo.y &&
            (this.y + this.offsetY + 130) <= (mo.y + mo.height);
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    moveLeft(bool) {
        this.x -= this.speed;
        this.otherDirection = bool;
    }


    jump() {
        this.speedY = 20;
    }
}



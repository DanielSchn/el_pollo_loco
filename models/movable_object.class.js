class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    offsetY = 0;
    offsetX = 50;
    energy = 100;
    lasHit = 0;

    
    /**
     * This function adds gravity to an object, e.g. to make jumps appear more realistic.
     */
    applyGravity() {
        setStoppableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    /**
     * A hit between the endboss, chicken or the character is handled here. And the life energy is adjusted accordingly.
     */
    hit() {
        if (this instanceof Endboss)
            this.handleEndbossEnergy();
        if (this instanceof Chicken)
            this.handleChickenEnergy();
        else {
            this.handleCharacterEnergy();
        }
    }


    /**
     * Here, the endboss life energy is reduced by a set value and checked to see if he is still alive.
     */
    handleEndbossEnergy() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lasHit = new Date().getTime();
        }
    }


    /**
     * Here, the chicken life energy is reduced by a set value and checked to see if the chicken is still alive.
     */
    handleChickenEnergy() {
        this.energy -= 100;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lasHit = new Date().getTime();
        }
    }


    /**
     * Here, the character life energy is reduced by a set value and checked to see if he is still alive.
     */
    handleCharacterEnergy() {
        this.energy -= 0.5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lasHit = new Date().getTime();
        }
    }


    /**
     * This function provides short-term immunity. The set time is 1 second.
     * 
     * @returns - The method returns true if less than one second has passed since the last hit, otherwise false.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lasHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    /**
     * If the Energy is less than or equal to zero, then it is determined that the character is dead, for example.
     * 
     * @returns - True if the energy is less than or equal to 0.
     */
    isDead() {
        return this.energy <= 0;
    }


    /**
     * This function checks whether an object is above the ground. Throwable objects are excluded.
     * 
     * @returns - The check whether it is a throwable object or the character. 
     */
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


    animationPlayedCounter() {
        return this.animationPlayed < 30;
    }
}



class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;
    statusBar = new StatusBar();
    coinStatus = new StatusBarCoins();
    bottleStatus = new StatusBarBottles();
    endbossBar = new StatusBarEndboss();
    soundManager = new Sounds();
    throwableObjects = [];
    collectedBottles = 0;
    collectedCoins = 0;
    endbossEnergy = 10;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkThrowObject();
    }


    /**
     * The world is initialised here.
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * All drawing functions are executed here. All objects are drawn onto the world.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.coinStatus);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleStatus);
        this.addToMap(this.endbossBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);
        this.selfDraw();
    }


    /**
     * Self draw function to animate the Game. Can´t use "this" in the requestAnimationFrame, so use the value "self".
     */
    selfDraw() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    /**
     * The collision functions are checked or executed every 40 ms.
     */
    checkCollision() {
        setStoppableInterval(() => {
            this.checkEnemieCollision();
            this.checkBottleCollision();
            this.checkCoinCollision();
            this.checkEndbossCollision();
            this.checkEndbossHitCharacter();
        }, 40);

    }


    /**
     * The collision with the small enemys is checked here. If the character jumps onto a chicken from above, it dies and is removed from the world.
     */
    checkEnemieCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if (!enemy.isDead() && this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && !this.character.isHurt()) {
                    this.character.jump(10);
                    enemy.hit();
                    this.soundManager.playSound('chicken');
                    setTimeout(() => {
                        this.level.enemies.splice(index, 1);
                    }, 500);
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    this.soundManager.playSound('hurt');
                }
            }
        });
    }


    /**
     * The collision with the final boss is checked here. If the end boss and the character collide, the character's life energy is drained.
     */
    checkEndbossHitCharacter() {
        this.level.endboss.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                this.soundManager.playSound('hurt');
            }
        });
    }


    /**
     * The collision with the salsa bottles is checked here. If the character collides with a bottle, it is removed from the world and a counter for the bottles is incremented by one.
     */
    checkBottleCollision() {
        this.level.bottles = this.level.bottles.filter((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.soundManager.playSound('bottle');
                this.collectedBottles++;
                this.bottleStatus.setPercentage(this.collectedBottles);
                return false;
            }
            return true;
        });
    }


    /**
     * The collision of the salsa bottles with the final boss is checked here. If a bottle hits the end boss, it will be drained of life energy.
     */
    checkEndbossCollision() {
        if (this.collectedBottles > 0) {
            this.throwableObjects = this.throwableObjects.filter((bottle) => {
                if (this.level.endboss[0].isColliding(bottle)) {
                    this.soundManager.playSound('endboss');
                    this.endbossEnergy--;
                    this.level.endboss[0].hit();
                    this.endbossBar.setPercentage(this.endbossEnergy);
                    return false;
                } else {
                    return true;
                }
            });
        }
    }


    /**
     * The collision with the coins is checked here. If the character collides with a coin, it is removed from the world and a counter for the coins is incremented by one.
     */
    checkCoinCollision() {
        this.level.coins = this.level.coins.filter((coin) => {
            if (this.character.isColliding(coin)) {
                this.soundManager.playSound('coin');
                this.collectedCoins++;
                this.coinStatus.setPercentage(this.collectedCoins);
                return false;
            }
            return true;
        });
    }


    /**
     * This checks whether an object can be thrown. This is the case if at least one salsa bottle has been picked up and the button for the throw has been pressed and if the character is looking to the right.
     */
    checkThrowObject() {
        setStoppableInterval(() => {
            if (this.keyboard.THROW && this.collectedBottles > 0 && this.character.otherDirection == false) {
                this.soundManager.playSound('throw');
                let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 150);
                this.throwableObjects.push(bottle);
                this.collectedBottles--;
                this.bottleStatus.setPercentage(this.collectedBottles);
            }
        }, 140);

    }


    /**
     * This draws objects on the map. Most objects are present more than once.
     * 
     * @param {Object} objects - An object is an enemy, the endboss or the character.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * Function for adding objects with checking the drawing direction.
     * Add the "mo.drawFrame(this.ctx);" line to draw rect around the movable Objects for develop.
     * 
     * @param {Object} mo - Transferred movable object. 
     */
    addToMap(mo) {
        this.checkDirectionFlip(mo);
        mo.draw(this.ctx);
        this.checkDirectionBackflip(mo);
    }


    /**
     * The direction of the character is checked here. If you walk to the left, for example, the image is mirrored vertically.
     * 
     * @param {Object} mo - Transferred movable object.
     */
    checkDirectionFlip(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
    }


    /**
     * The direction of the character is also checked here. If you walk to the right again, the image is mirrored back vertically.
     * 
     * @param {Object} mo - Transferred movable object.
     */
    checkDirectionBackflip(mo) {
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
     * The mirroring function is performed here.
     * 
     * @param {Object} mo - Transferred movable object.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * The mirroring back function is performed here.
     * 
     * @param {Object} mo - Transferred movable object.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
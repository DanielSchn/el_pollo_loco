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
    // chicken_sound = new Audio('audio/chicken_low_noise.mp3');
    // coin_sound = new Audio('audio/coin.mp3');
    // throw_sound = new Audio('audio/throw.mp3');
    // bottle_sound = new Audio('audio/bottle.mp3');
    // hurt_sound = new Audio('audio/hurt.mp3');
    // endboss_sound = new Audio('audio/chicken_cut.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkThrowObject();
    }


    setWorld() {
        this.character.world = this;
    }

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

        let self = this;        // Problem der OOP, dass man ein this nicht innerhalb dieser Funktion nutzen kann. Deshalb wird hier einfach eine Hilfsvariable festgelegt.
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    checkCollision() {
        setInterval(() => {
            this.checkEnemieCollision();
            this.checkBottleCollision();
            this.checkCoinCollision();
            this.checkEndbossCollision();
        }, 40);

    }

    checkEnemieCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.y < 132) {
                    this.character.jump();
                    enemy.hit();
                    this.soundManager.playSound('chicken');
                    setTimeout(() => {
                        this.level.enemies.splice(index, 1);
                    }, 1000);
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    this.soundManager.playSound('hurt');
                }
            }
        });
    }

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

    checkCoinCollision() {
        this.level.coins = this.level.coins.filter((coin) => {
            if (this.character.isColliding(coin)) {
                this.soundManager.playSound('coin');
                this.collectedCoins++;
                this.coinStatus.setPercentage(this.collectedCoins);
                console.log('collectedCoins', this.collectedCoins);
                return false;
            }
            return true;
        });
    }


    checkThrowObject() {
        setInterval(() => {
            if (this.keyboard.THROW && this.collectedBottles > 0) {
                this.soundManager.playSound('throw');
                let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 150);
                this.throwableObjects.push(bottle);
                this.collectedBottles--;
                this.bottleStatus.setPercentage(this.collectedBottles);
            }
        }, 140);

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}
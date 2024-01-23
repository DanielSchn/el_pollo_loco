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
        this.run();
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
        this.checkEnemieCollision();
        this.checkBottleCollision();
        this.checkCoinCollision();
    }

    checkEnemieCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkBottleCollision() {
        this.level.bottles = this.level.bottles.filter((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles++;
                this.bottleStatus.setPercentage(this.collectedBottles);
                console.log('collectedBottles', this.collectedBottles);
                return false;
            }
            return true;
        });
    }

    checkCoinCollision() {
        this.level.coins = this.level.coins.filter((coin) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins++;
                this.coinStatus.setPercentage(this.collectedCoins);
                console.log('collectedCoins', this.collectedCoins);
                return false;
            }
            return true;
        });
    }


    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObject();
        }, 200);
    }

    checkThrowObject() {
        if (this.keyboard.THROW && this.collectedBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 150);
            this.throwableObjects.push(bottle);
            this.collectedBottles--;
            this.bottleStatus.setPercentage(this.collectedBottles);
        }
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
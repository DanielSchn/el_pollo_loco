class Character extends MovableObject {
    height = 300;
    width = 152;
    y = 132;
    speed = 5;
    world;
    animationPlayed = 0;
    lastMovementTime = Date.now();

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_SLEEP = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_IDLE[3]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SLEEP);
        this.applyGravity();
        this.animate();
    }


    /**
     * This function execute the move and animation functions for the character.
     */
    animate() {
        setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
        setStoppableInterval(() => this.playCharacter(), 100);
    }


    /**
     * This function handles the character's movements in 3 directions. Corresponding run or jump functions are then called up.
     */
    moveCharacter() {
        if (this.canCharacterMoveRight())
            this.moveRight();
        if (this.canCharacterMoveLeft())
            this.moveLeft();
        if (this.canCharacterJump())
            this.jump();
        this.world.camera_x = -this.x + 100;
    }


    /**
     * This function releases the ability to run to the right.
     * 
     * @returns - Whether it is possible to run to the right. The system checks whether the right button has been pressed and whether the end of the map has not yet been reached.
     */
    canCharacterMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }


    /**
     * Here the character is moved to the right using the moveRight function and the running sound is played.
     */
    moveRight() {
        super.moveRight();
        this.world.soundManager.playSound('run');
    }


    /**
     * This function releases the ability to run to the left.
     * 
     * @returns - Whether it is possible to run to the right. The system checks whether the left button has been pressed and whether the end of the map has not yet been reached.
     */
    canCharacterMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }


    /*
    * Here the character is moved to the left using the moveLeft function and the running sound is played.
    */
    moveLeft() {
        super.moveLeft(true);
        this.world.soundManager.playSound('run');
    }


    /**
     * This checks whether the character is allowed to jump.
     * 
     * @returns - It checks whether the button for jumping has been pressed and whether the character is on the ground.
     */
    canCharacterJump() {
        return this.world.keyboard.JUMP && !this.isAboveGround();
    }


    /**
     * The function for jumping is called up here and a jump sound is played.
     */
    jump() {
        super.jump();
        this.world.soundManager.playSound('jump');
    }


    /**
     * This function handles all the character's animations. There are animations for death, injury, jumping, running and sleeping if no input has been made for a long time.
     */
    playCharacter() {
        const lastMovement = Date.now() - this.lastMovementTime;
        const timeToSleep = lastMovement >= 2000;
        if (this.isDead()) {
            if (this.animationPlayedCounter()) {
                this.playDeathAnimation();
            }
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.lastMovementTime = Date.now();
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
            this.lastMovementTime = Date.now();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
            this.lastMovementTime = Date.now();
        } else if (this.world.keyboard.THROW) {
            this.playAnimation(this.IMAGES_IDLE);
            this.lastMovementTime = Date.now();
        } else if (timeToSleep) {
            this.playAnimation(this.IMAGES_SLEEP);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }


    /**
     * This is the counter for the death animation.
     */
    playDeathAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.animationPlayed++;
        this.world.soundManager.playSound('characterDeath');
    }
}
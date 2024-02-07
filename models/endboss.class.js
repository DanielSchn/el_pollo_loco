class Endboss extends MovableObject {
    height = 405;
    width = 348;
    y = 55;
    x = 3850;
    hadFirstContact = false;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    
    constructor() {
        super().loadImage(this.IMAGES_WALKING[1]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.animateEndboss();
        this.speed = 1;
    }


    animateEndboss() {
        setStoppableInterval(() => this.playEndboss(), 100);
        setStoppableInterval(() => this.moveEndboss(), 1000 / 60);
    }


    playEndboss() {
        let i = 0;
        if (this.isDead()) {
            if (this.animationPlayedCounter())
                this.endbossDeathAnimation();
        } else if (this.isHurt()) {
            this.endbossHurtAnimation();
        } else {
            if (i < 20) {
                this.playAnimation(this.IMAGES_WALKING);
            } 
            else {
                this.playAnimation(this.IMAGES_ATTACK);
            }
            i++;
            if (world.character.x > 3300 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }
            this.animationPlayed = 0;
        }
    }


    endbossDeathAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.animationPlayed++;
    }


    endbossHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
        this.animationPlayed = 0;
    }


    moveEndboss() {
        if ((world.level.endboss[0].x - world.character.x) < 500) {
            setTimeout(() => {
                this.moveLeft(false);    
            }, 3000);
            
        }
    }
}
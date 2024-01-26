class Endboss extends MovableObject {
    height = 405;
    width = 348;
    y = 55;
    x = 3850;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
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
    }
    hadFirstContact = false;
    animateEndboss() {
        let animationPlayed = 0;
        let i = 0;
        setInterval(() => {
            if (this.isDead()) {
                if (animationPlayed < 30) {
                    this.playAnimation(this.IMAGES_DEAD);
                    animationPlayed++;
                }
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                animationPlayed = 0;
            } else {
                if (i < 20) {
                    this.playAnimation(this.IMAGES_WALKING);
                } else {
                    this.playAnimation(this.IMAGES_ATTACK);
                }
                i++;
                if (world.character.x > 3300 && !this.hadFirstContact) {
                    i = 0;
                    this.hadFirstContact = true;
                }
                animationPlayed = 0;
            }
        }, 100);
    }
}
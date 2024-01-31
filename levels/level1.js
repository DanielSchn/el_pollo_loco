let level1;

function initLevel() {
level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(true),
        new Chicken(true),
        new Chicken(true),
        new Chicken(true)

    ],
    [
        new Cloud(680),
        new Cloud(100),
        new Cloud(1500),
        new Cloud(2600),
        new Cloud(3600)
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5)
    ],
    [
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
        new Bottle('img/6_salsa_bottle/salsa_bottle.png')
    ],
    [
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png'),
        new Coin('img/8_coin/coin_2.png')
    ],
    [
        new Endboss()
    ]
);
init();
}
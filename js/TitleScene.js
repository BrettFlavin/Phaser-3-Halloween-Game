class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    preload() {
        // Google WebFonts Loader script
        this.load.script(
            "webfont",
            "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"
        );

        /*** IMAGES ***/
        // lvl 1
        this.load.image('level1_1', 'assets/images/level_1/1.png');
        this.load.image('level1_2', 'assets/images/level_1/2.png');
        this.load.image('level1_3', 'assets/images/level_1/3.png');
        this.load.image('level1_4', 'assets/images/level_1/4.png');
        this.load.image('level1_5', 'assets/images/level_1/5.png');
        this.load.image('level1_6', 'assets/images/level_1/6.png');
        this.load.image('level1_7', 'assets/images/level_1/7.png');

        // lvl 2
        this.load.image('level2_1', 'assets/images/level_2/1.png');
        this.load.image('level2_2', 'assets/images/level_2/2.png');
        this.load.image('level2_3', 'assets/images/level_2/3.png');
        this.load.image('level2_4', 'assets/images/level_2/4.png');
        this.load.image('level2_5', 'assets/images/level_2/5.png');
        this.load.image('level2_6', 'assets/images/level_2/6.png');

        // lvl 3
        this.load.image('level3_1', 'assets/images/level_3/1.png');
        this.load.image('level3_2', 'assets/images/level_3/2.png');
        this.load.image('level3_3', 'assets/images/level_3/3.png');
        this.load.image('level3_4', 'assets/images/level_3/4.png');
        this.load.image('level3_5', 'assets/images/level_3/5.png');
        this.load.image('level3_6', 'assets/images/level_3/6.png');
        this.load.image('level3_7', 'assets/images/level_3/7.png');
        this.load.image('level3_8', 'assets/images/level_3/8.png');
        this.load.image('level3_9', 'assets/images/level_3/9.png');

        // lvl 4
        this.load.image('level4_1', 'assets/images/level_4/1.png');
        this.load.image('level4_2', 'assets/images/level_4/2.png');
        this.load.image('level4_3', 'assets/images/level_4/3.png');
        this.load.image('level4_4', 'assets/images/level_4/4.png');
        this.load.image('level4_5', 'assets/images/level_4/5.png');
        this.load.image('level4_6', 'assets/images/level_4/6.png');
        this.load.image('level4_7', 'assets/images/level_4/7.png');

        // title screen
        this.load.image('titleScene', 'assets/images/title_scene/titleScene.png');

        // animated pumpkin 
        this.load.image('pumpkin1', 'assets/images/title_scene/pumpkin_1.png');
        this.load.image('pumpkin2', 'assets/images/title_scene/pumpkin_2.png');
        this.load.image('pumpkin3', 'assets/images/title_scene/pumpkin_3.png');
        this.load.image('pumpkin4', 'assets/images/title_scene/pumpkin_4.png');

        // explosion
        this.load.image('explosion1', 'assets/images/anims/Explosion_A.png');
        this.load.image('explosion2', 'assets/images/anims/Explosion_B.png');
        this.load.image('explosion3', 'assets/images/anims/Explosion_C.png');
        this.load.image('explosion4', 'assets/images/anims/Explosion_D.png');
        this.load.image('explosion5', 'assets/images/anims/Explosion_E.png');
        this.load.image('explosion6', 'assets/images/anims/Explosion_F.png');
        this.load.image('explosion7', 'assets/images/anims/Explosion_G.png');
        this.load.image('explosion8', 'assets/images/anims/Explosion_H.png');

        // Zombie Man
        this.load.image('zombie_idle1', 'assets/images/enemies/zombie/idle1.png');
        this.load.image('zombie_idle2', 'assets/images/enemies/zombie/idle2.png');
        this.load.image('zombie_idle3', 'assets/images/enemies/zombie/idle3.png');
        this.load.image('zombie_idle4', 'assets/images/enemies/zombie/idle4.png');

        this.load.image('zombie_walk1', 'assets/images/enemies/zombie/idle1.png');
        this.load.image('zombie_walk2', 'assets/images/enemies/zombie/idle2.png');
        this.load.image('zombie_walk3', 'assets/images/enemies/zombie/idle3.png');
        this.load.image('zombie_walk4', 'assets/images/enemies/zombie/idle4.png');
        this.load.image('zombie_walk5', 'assets/images/enemies/zombie/idle1.png');
        this.load.image('zombie_walk6', 'assets/images/enemies/zombie/idle2.png');

        // target crosshairs
        this.load.image('crosshairs', 'assets/images/crosshairs.png');
        this.load.image('pink_fireball', 'assets/images/pink_fireball.png');
        this.load.image('bomb', 'assets/images/bomb.png');

        /*** AUDIO ***/
        this.load.audio("title_audio", "assets/sounds/title_audio.mp3");
        this.load.audio("scene1_audio", "assets/sounds/scene1_audio.mp3");
        this.load.audio("scene2_audio", "assets/sounds/scene2_audio.mp3");
        this.load.audio("scene3_audio", "assets/sounds/scene3_audio.mp3");
        this.load.audio("scene4_audio", "assets/sounds/scene4_audio.mp3");
        this.load.audio("collect_coin", "assets/sounds/collect_coin.wav");
        this.load.audio("creepy_laugh", "assets/sounds/creepy_laugh.mp3");
    }

    create() {
        // 'blink' animation
        this.anims.create({
            key: 'blink',
            frames: [
                { key: 'pumpkin1' },
                { key: 'pumpkin2' },
                { key: 'pumpkin3' },
                { key: 'pumpkin4' },
            ],
            frameRate: .3,
            repeat: -1,
        });

        // 'zombie_idle' animation
        this.anims.create({
            key: 'zombie_idle',
            frames: [
                { key: 'zombie_idle1' },
                { key: 'zombie_idle2' },
                { key: 'zombie_idle3' },
                { key: 'zombie_idle4' },
            ],
            frameRate: 8,
            repeat: -1,
        });

        // 'zombie_walk' animation
        this.anims.create({
            key: 'zombie_walk',
            frames: [
                { key: 'zombie_walk1' },
                { key: 'zombie_walk2' },
                { key: 'zombie_walk3' },
                { key: 'zombie_walk4' },
                { key: 'zombie_walk5' },
                { key: 'zombie_walk6' },
            ],
            frameRate: 5,
            repeat: -1,
        });

        // 'explosion' animation
        this.anims.create({
            key: 'explosion',
            frames: [
                { key: 'explosion1' },
                { key: 'explosion2' },
                { key: 'explosion3' },
                { key: 'explosion4' },
                { key: 'explosion5' },
                { key: 'explosion6' },
                { key: 'explosion7' },
                { key: 'explosion8' },
            ],
            frameRate: 34,
            repeat: 0, // -1 for infinite
            hideOnComplete: true
        });

        // gets width, height from scene scale mgr
        const { width, height } = this.scale;

        // display game title
        var text = this.add.text(width / 2, height / 6, 'Once Upon A Haunting', {
            font: '150px Creepster',
            fill: '#551010',
            stroke: '#000',
            strokeThickness: 5,
            shadow: { offsetX: 6, offsetY: 6, color: '#FF0000', blur: 0, stroke: true, fill: true }
        }).setOrigin(.5, .5);

        // blinking pumpkins
        var pumpkinLeft = this.add.sprite(275, height - 150, 'pumpkin1').play('blink');
        var pumpkinRight = this.add.sprite(width - 275, height - 150, 'pumpkin1').play('blink');
        var background = this.add.image(width * .5, height * .5, 'titleScene');
        background.setScale(1.33);

        // music
        var bgMusic = this.sound.add("title_audio");
        bgMusic.setVolume(0.5);
        bgMusic.play();
        bgMusic.setLoop = true;

        // create a menu from our custom class
        var menu = new SettingsMenu(this);
    }

    update() {
    }
}
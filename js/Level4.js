class Level4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level4' });
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cam = this.cameras.main;
        this.camSpeed = 2;
    }

    create() {
        const { width, height } = this.scale;
        const totalWidth = width * 10;
        // layered images for parallax bg effect
        var sky = this.add.image(width * .5, height * .5, 'level4_1').setScrollFactor(0);
        var trees = new CreateAligned(this, totalWidth, 'level4_2', .25);
        var window = new CreateAligned(this, totalWidth, 'level4_3', .6);
        var houseItems = new CreateAligned(this, totalWidth, 'level4_4', .6);
        var glowingPumpkins = new CreateAligned(this, totalWidth, 'level4_5', .6);
        var fireplace = new CreateAligned(this, totalWidth, 'level4_6', .85);
        var ground = new CreateAligned(this, totalWidth, 'level4_7', 1.25);

        // set camera boundaries
        this.cam.setBounds(0, 0, totalWidth, height)

        // MUSIC
        var music = this.sound.add("scene4_audio");
        music.setVolume(0.5);
        music.play();
        music.loop = true;
    }

    update() {

        if (this.cursors.left.isDown) {
            this.cam.scrollX -= this.camSpeed;
        } else if (this.cursors.right.isDown) {
            this.cam.scrollX += this.camSpeed;
        }
    }

}



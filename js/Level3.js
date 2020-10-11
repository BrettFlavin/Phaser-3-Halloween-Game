class Level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level3' });
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
        var sky = this.add.image(width * .5, height * .5, 'level3_1').setScrollFactor(0);
        var clouds = new CreateAligned(this, totalWidth, 'level3_2', .1);
        var moon = new CreateAligned(this, totalWidth, 'level3_3', .25);
        var backTombstones = new CreateAligned(this, totalWidth, 'level3_4', .5);
        var ironGate = new CreateAligned(this, totalWidth, 'level3_5', .75);
        var frontTombstones = new CreateAligned(this, totalWidth, 'level3_6', 1);
        var ghost = new CreateAligned(this, totalWidth, 'level3_7', 1.25);
        var ground = new CreateAligned(this, totalWidth, 'level3_9', 1.25);
        var hands = new CreateAligned(this, totalWidth, 'level3_8', 1.5);

        // set camera boundaries
        this.cam.setBounds(0, 0, totalWidth, height)

        // MUSIC
        var music = this.sound.add("scene3_audio");
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



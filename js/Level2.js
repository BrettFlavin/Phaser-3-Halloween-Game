class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level2' });
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
        var sky = this.add.image(width * .5, height * .5, 'level2_1').setScrollFactor(0);
        var farTrees = new CreateAligned(this, totalWidth, 'level2_2', .1);
        var closeTrees = new CreateAligned(this, totalWidth, 'level2_3', .25);
        var spiders = new CreateAligned(this, totalWidth, 'level2_4', .5);
        var largeTree = new CreateAligned(this, totalWidth, 'level2_5', 1);
        var ground = new CreateAligned(this, totalWidth, 'level2_6', 1.25);

        // set camera boundaries
        this.cam.setBounds(0, 0, totalWidth, height)

        // MUSIC
        var music = this.sound.add("scene2_audio");
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



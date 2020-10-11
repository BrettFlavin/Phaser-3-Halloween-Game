// Scene_Name should be the same as the .js file name
class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level1' });
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cam = this.cameras.main;
        this.camSpeed = 2;
    }

    create() {
        // gets width, height from scale mgr
        const { width, height } = this.scale;

        // total width of screen w/ parallax effect (10 times the screen)
        const totalWidth = width * 10;

        // BACKGROUND 'sky' will just be a static image
        var sky = this.add.image(width * .5, height * .5, 'level1_1').setScrollFactor(0);

        // layered images for parallax bg effect created w/ our CreateAligned class
        // (scene, total width of scene, image key, and speed to scroll)
        var clouds = new CreateAligned(this, totalWidth, 'level1_2', .1);
        var mountains = new CreateAligned(this, totalWidth, 'level1_3', .25);
        var buildings = new CreateAligned(this, totalWidth, 'level1_4', .5);
        var bridges = new CreateAligned(this, totalWidth, 'level1_5', .75);
        var house = new CreateAligned(this, totalWidth, 'level1_6', .75);
        var ground = new CreateAligned(this, totalWidth, 'level1_7', 1);

        // CAMERA boundaries
        this.cam.setBounds(0, 0, totalWidth, height)

        // MUSIC
        var music = this.sound.add("scene1_audio");
        music.setVolume(0.5);
        music.play();
        music.loop = true;

        // physics groups for zombies and bombs
        this.zombieGroup = this.physics.add.group();
        this.bombGroup = this.physics.add.group();

        // add the first zombie
        this.spawnZombie();
        // then start a timer to dispatch zombies
        this.time.addEvent({
            delay: 5000,
            callback: this.spawnZombie,
            args: [],
            callbackScope: this,
            loop: true,
        });

        // drop bomb when pointer is clicked 
        this.input.on('pointerdown', this.dropBomb, this);

        // collider between bomb and zombie calls bombHit() 
        this.physics.add.collider(this.bombGroup, this.zombieGroup, this.bombHit, null, this);
    }

    spawnZombie() {
        var zombie = this.physics.add.sprite(game.config.width, game.config.height - 100, 'zombie_walk1')
            .setScale(.5)
            .play('zombie_walk');
        // must add sprites physics group BEFORE setting any physics properties are set
        this.zombieGroup.add(zombie);
        zombie.setVelocityX(-100);
    }

    dropBomb(pointer) {
        var bomb = this.physics.add.sprite(pointer.x, 0, 'bomb')
            .setScale(.25);
        // must add sprites physics group BEFORE setting any physics properties are set
        this.bombGroup.add(bomb);
        bomb.setVelocityY(400);
    }

    // destroys the zombie scum on impact
    bombHit(bomb, zombie) {
        console.log("BOMB HIT!");
        zombie.destroy();
        bomb.destroy();

        var explode = this.add.sprite(zombie.x, zombie.y, 'explode1').play('explosion');
    }

    update() {
        // iterate the zombie group to update positions
        this.zombieGroup.children.iterate((child) => {
            if (child.x < 0) {
                child.x = 10;
                child.setVelocityX(100);
            }
            if (child.x > game.config.width) {
                child.x -= 10;
                child.setVelocityX(-100);
            }
        });

        // scroll the camera with left and right arrows
        if (this.cursors.left.isDown) {
            this.cam.scrollX -= this.camSpeed;
        } else if (this.cursors.right.isDown) {
            this.cam.scrollX += this.camSpeed;
        }
    }
}



// Scene_Name should be the same as the .js file name
class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level1' });
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cam = this.cameras.main;
        this.CAM_SPEED = 2;
        this.MAX_BOMBS = 3;
        this.MAX_ZOMBIES = 10;
        this.ZOMBIE_HITPOINTS = 10;
        this.GAME_CLOCK = 10;
        this.SCORE = 0;

        // style for the display text
        var style = {
            font: "50px Caveat",
            fill: "White",
            strokeThickness: 2,
            stroke: 'black',
            shadow: { offsetX: 2, offsetY: 2, color: '#000', blur: 2, stroke: true, fill: true }
        }

        // TIME LEFT TEXT
        this.timeLeft = this.GAME_CLOCK;
        this.timeText = this.add.text(10, 25, "Time: " + this.timeLeft + " ", style).setDepth(10);

        // SCORE TEXT
        this.score = this.SCORE;
        this.scoreText = this.add.text(10, 75, "Score: " + this.score + " ", style).setDepth(10);

        // BOMBS LEFT TEXT
        this.bombsLeft = this.MAX_BOMBS;
        this.bombsText = this.add.text(10, 125, "Bombs Left: " + this.bombsLeft + " ", style).setDepth(10);

        // ENEMY HIT TEXT
        this.zombieDamage = this.ZOMBIE_HITPOINTS;
        this.zombieHitText = this.add.text(0, 0, "+ " + this.zombieDamage + " ", style)
            .setVisible(false)
            .setDepth(10);
    }

    create() {
        // gets width, height from scale mgr
        this.width = this.scale.width;
        this.height = this.scale.height;
        // total width of game w/ scrolling bg effect (10 times the screen)
        this.totalWidth = this.width * 5;

        //this.physics.world.setBounds({ x: 0, y: 0, width: totalWidth, height: height, checkDown: false });

        // BACKGROUND 'sky' image will remain static  
        //            remaining images are layered for a parallax scrolling bg effect. 
        //            images created and positoned w/ our custom CreateAligned class
        //            which extends from Phaser.GameObjects.Image
        var sky = this.add.image(this.width * .5, this.height * .5, 'level1_1').setScrollFactor(0);
        var clouds = new CreateAligned(this, this.totalWidth, 'level1_2', .1);
        var mountains = new CreateAligned(this, this.totalWidth, 'level1_3', .25);
        var buildings = new CreateAligned(this, this.totalWidth, 'level1_4', .5);
        var bridges = new CreateAligned(this, this.totalWidth, 'level1_5', .75);
        var house = new CreateAligned(this, this.totalWidth, 'level1_6', .75);
        var ground = new CreateAligned(this, this.totalWidth, 'level1_7', 1);

        // CAMERA
        this.cam.setBounds(0, 0, this.totalWidth, this.height)

        // MUSIC
        var music = this.sound.add("scene1_audio");
        music.setVolume(0.5);
        music.play();
        music.loop = true;

        // BOMBS GROUP
        this.bombGroup = this.physics.add.group({
            defaultKey: 'bomb',
            maxSize: this.MAX_BOMBS,
        });

        // ZOMBIES GROUP
        this.zombieGroup = this.physics.add.group({
            defaultKey: 'zombie_walk1',
            maxSize: this.MAX_ZOMBIES,
        });

        // // add a zombie as soon as the scene starts
        // this.spawnZombie();

        // EVENT timer will then dispatch more zombies
        this.time.addEvent({
            delay: 3000,
            callback: this.spawnZombie,
            args: [],
            callbackScope: this,
            loop: true,
        });

        // EVENT LISTENER to drop a bomb on pointer down event 
        this.input.on('pointerdown', this.dropBomb, this);

        // OVERLAP between bomb and zombie calls bombHit() 
        this.physics.add.collider(this.bombGroup, this.zombieGroup, this.bombHit, null, this);

        // EVENT timer to call tickClock() every second
        this.timer = this.time.addEvent({
            delay: 1000,
            callback: this.tickClock,
            args: [],
            callbackScope: this,
            loop: true,
        });
    }

    // function to track, update, and display time left
    tickClock() {
        this.timeLeft--;
        this.timeText.setText("Time: " + this.timeLeft + " ");
        // if time is up - game over 
        if (this.timeLeft === 0) {
            this.timer.remove();
            // display text to alert player
            setTimeout(() => {
                this.add.text(this.width / 2, this.height / 2, "Game Over", {
                    font: "150px Creepster",
                    fill: "#FF0000",
                    stroke: "#000",
                    strokeThickness: 8,
                }).setOrigin(.5, .5);
            }, 1000);
        }
    }

    // function to spawn a new zombie
    spawnZombie() {
        // get() scans group for first inactive member, assigns x and y, and returns the member.
        var zombie = this.zombieGroup.get(this.width - 300, this.height - 200);
        if (!zombie) { return; } // none free
        else {
            zombie.setActive(true);
            zombie.setVisible(true);
            zombie.setScale(.5);
            zombie.play('zombie_walk');
            zombie.setVelocityX(-100);
        }
    }

    // function to drop a bomb
    dropBomb(pointer) {
        // get() scans group for first inactive member, assigns x and y, and returns the member.
        var bomb = this.bombGroup.get(pointer.x, 0);
        if (!bomb) { return; } // None free
        else {
            bomb.setActive(true);
            bomb.setVisible(true);
            bomb.setScale(.2);
            bomb.setVelocityY(400);
            this.bombsLeft--;
            this.bombsText.setText("Bombs Left: " + this.bombsLeft + " ");
        }
    }

    // function to destroy the zombie
    bombHit(bomb, zombie) {
        if (bomb.active && zombie.active) {
            var explode = this.add.sprite(bomb.x, bomb.y - 10, 'explode1').play('explosion');
            this.zombieGroup.killAndHide(zombie);
            this.bombGroup.killAndHide(bomb);
            this.bombsLeft++;
            this.bombsText.setText("Bombs Left: " + this.bombsLeft + " ");
            this.score += this.ZOMBIE_HITPOINTS;
            this.scoreText.setText("Score: " + this.score + " ");
        }
    }

    update() {
        // iterate the zombie group to update positions
        this.zombieGroup.children.iterate((zombie) => {
            if (zombie.active) {
                if (zombie.x < 0 || zombie.x > this.width) {
                    this.zombieGroup.killAndHide(zombie);
                }
            }
        });

        // iterate the bomb group to resuse bombs in the .get() function
        // must set active to false when bomb goes off screen
        this.bombGroup.children.each((bomb) => {
            if (bomb.active) {
                if (bomb.y > this.height) {
                    this.bombGroup.killAndHide(bomb);
                    this.bombsLeft++;
                    this.bombsText.setText("Bombs Left: " + this.bombsLeft + " ");
                }
            }
        });

        // camera scrolls with left and right arrows
        if (this.cursors.left.isDown) {
            this.cam.scrollX -= this.CAM_SPEED;
        } else if (this.cursors.right.isDown) {
            this.cam.scrollX += this.CAM_SPEED;
        }
    }
}



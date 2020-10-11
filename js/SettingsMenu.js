class SettingsMenu extends Phaser.Scene {
    /**
     * 
     * @param {Phaser.Scene} scene 
     */

    constructor(scene) {
        super(scene, { key: 'SettingsMenu' });

        // gets width, height from scale mgr
        const { width, height } = scene.scale;

        var red = "#FF0000";
        var white = "#FFF";
        var black = "#000";

        // a style for the display text
        var style = {
            font: "50px Eater",
            fill: white,
            strokeThickness: 6,
            stroke: black,
            shadow: { offsetX: 5, offsetY: 5, color: '#000', blur: 5, stroke: true, fill: true }
        }

        // PLAY GAME text
        var playText = scene.add
            .text(width / 2, height / 2, "Play Game", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .on("pointerover", () => {
                playText.setFill(red);
                playText.setFontSize(60);
            })
            .on("pointerout", () => {
                playText.setFill(white);
                playText.setFontSize(50);
            })
            .on("pointerdown", () => {
                scene.cameras.main.fade(3250, 200); // duration, red (0-255)
                var laugh = scene.sound.add("creepy_laugh");
                laugh.setVolume(0.5);
                laugh.play();
            })
            .on("pointerup", () => {
                setTimeout(() => {
                    scene.sound.pauseAll();
                    scene.scene.switch('Level1');
                }, 3000);
            });

        // OPTIONS text
        var optionsText = scene.add
            .text(width / 2, height / 2 + 100, "Options", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .on("pointerover", () => {
                optionsText.setFill(red);
                optionsText.setFontSize(60);
            })
            .on("pointerout", () => {
                optionsText.setFill(white);
                optionsText.setFontSize(50);
            })
            .on("pointerdown", () => {
            })
            .on("pointerup", () => {
                playText.setVisible(false);
                quitText.setVisible(false);
                optionsText.setVisible(false);
                level1_Text.setVisible(true);
                level2_Text.setVisible(true);
                level3_Text.setVisible(true);
                level4_Text.setVisible(true);
                backText.setVisible(true);
            });

        // LEVEL 1 text
        var level1_Text = scene.add
            .text(width / 2, height / 2 - 200, "Level 1", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setVisible(false)
            .on("pointerover", () => {
                level1_Text.setFill(red);
                level1_Text.setFontSize(55);
            })
            .on("pointerout", () => {
                level1_Text.setFill(white);
                level1_Text.setFontSize(50);
            })
            .on("pointerdown", () => {
                scene.cameras.main.fade(3250, 200); // duration, red (0-255)
                var laugh = scene.sound.add("creepy_laugh");
                laugh.setVolume(0.5);
                laugh.play();
            })
            .on("pointerup", () => {
                setTimeout(() => {
                    scene.sound.pauseAll();
                    scene.scene.switch('Level1');
                }, 3000);
            });

        // LEVEL 2 text
        var level2_Text = scene.add
            .text(width / 2, height / 2 - 100, "Level 2", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setVisible(false)
            .on("pointerover", () => {
                level2_Text.setFill(red);
                level2_Text.setFontSize(60);
            })
            .on("pointerout", () => {
                level2_Text.setFill(white);
                level2_Text.setFontSize(50);
            })
            .on("pointerdown", () => {
                scene.cameras.main.fade(3250, 200); // duration, red (0-255)
                var laugh = scene.sound.add("creepy_laugh");
                laugh.setVolume(0.5);
                laugh.play();
            })
            .on("pointerup", () => {
                setTimeout(() => {
                    scene.sound.pauseAll();
                    scene.scene.switch('Level2');
                }, 3000);
            });

        // LEVEL 3 text
        var level3_Text = scene.add
            .text(width / 2, height / 2, "Level 3", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setVisible(false)
            .on("pointerover", () => {
                level3_Text.setFill(red);
                level3_Text.setFontSize(60);
            })
            .on("pointerout", () => {
                level3_Text.setFill(white);
                level3_Text.setFontSize(50);
            })
            .on("pointerdown", () => {
                scene.cameras.main.fade(3250, 200); // duration, red (0-255)
                var laugh = scene.sound.add("creepy_laugh");
                laugh.setVolume(0.5);
                laugh.play();
            })
            .on("pointerup", () => {
                setTimeout(() => {
                    scene.sound.pauseAll();
                    scene.scene.switch('Level3');
                }, 3000);
            });

        // LEVEL 4 text
        var level4_Text = scene.add
            .text(width / 2, height / 2 + 100, "Level 4", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setVisible(false)
            .on("pointerover", () => {
                level4_Text.setFill(red);
                level4_Text.setFontSize(60);
            })
            .on("pointerout", () => {
                level4_Text.setFill(white);
                level4_Text.setFontSize(50);
            })
            .on("pointerdown", () => {
                scene.cameras.main.fade(3250, 200); // duration, red (0-255)
                var laugh = scene.sound.add("creepy_laugh");
                laugh.setVolume(0.5);
                laugh.play();
            })
            .on("pointerup", () => {
                setTimeout(() => {
                    scene.sound.pauseAll();
                    scene.scene.switch('Level4');
                }, 3000);
            });

        // BACK text
        var backText = scene.add
            .text(width / 2, height / 2 + 250, "Go Back", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setVisible(false)
            .on("pointerover", () => {
                backText.setFill(red);
                backText.setFontSize(60);
            })
            .on("pointerout", () => {
                backText.setFill(white);
                backText.setFontSize(50);
            })
            .on("pointerup", () => {
                // updates all text on back text click
                playText.setVisible(true);
                quitText.setVisible(true);
                optionsText.setVisible(true);
                level1_Text.setVisible(false);
                level2_Text.setVisible(false);
                level3_Text.setVisible(false);
                level4_Text.setVisible(false);
                backText.setVisible(false);
            });

        // QUIT GAME text
        var quitText = scene.add
            .text(width / 2, height / 2 + 200, "Quit Game", style)
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .on("pointerover", () => {
                quitText.setFill(red);
                quitText.setFontSize(60);
            })
            .on("pointerout", () => {
                quitText.setFill(white);
                quitText.setFontSize(50);
            })
            .on("pointerup", () => {
                scene.sound.pauseAll();
                scene.scene.switch('GameOver');
            });
    }
}
// a class that extends from Phaser.GameObjects.Image to create, 
// calculate # needed, and align the parallax images based on game width

class CreateAligned extends Phaser.GameObjects.Image {
    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {number} totalWidth 
     * @param {string} texture 
     * @param {number} scrollFactor 
     */

    constructor(scene, totalWidth, texture, scrollFactor) {
        super(scene, totalWidth, texture, scrollFactor);
        // get width of the image to see how many we will need
        const imageWidth = scene.textures.get(texture).getSourceImage().width;
        // divide total width by width of image to get number of images needed
        // use ceil() to round up to nearest whole number
        let count = Math.ceil(totalWidth / imageWidth);
        let nextStart = 0;
        for (let i = 0; i < count; i++) {
            const addImage = scene.add.image(nextStart, scene.scale.height, texture)
                .setOrigin(0, 1)
                .setScrollFactor(scrollFactor);
            // add the next right after the previous
            nextStart += addImage.width;
        }
    }
}
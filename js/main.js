var game;
window.onload = function () {
    var isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    var w = 480;
    var h = 640;
    if (isMobile != -1) {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    var config = {
        type: Phaser.AUTO,
        width: 1600,
        height: 1025,
        parent: 'phaser-game',
        backgroundColor: '#dc6900',
        physics: { default: 'arcade', arcade: { gravity: { y: 0 }, debug: false } },
        scene: [TitleScene, Level1, Level2, Level3, Level4]
    };
    game = new Phaser.Game(config);
}

//  The Google WebFont Loader looks for this object - create before loading the script.
WebFontConfig = {
    //  Google Fonts to load (put all into the array)
    google: {
        families: ["Creepster", "Eater", "Caveat", "Condiment"],
    },
};
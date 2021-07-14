class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload() {}
    create() {
        console.log("Game over!");
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);
        this.background.displayHeight = game.config.height;
        this.background.displayWidth = game.config.width;
        this.city = this.add.image(game.config.width / 2, game.config.height, "city").setOrigin(0.5, 1);
        Align.scaleToGameW(this.city, 1);
        this.face = this.add.image(0, 0, "alien");
        Align.center(this.face);
        this.aGrid = new AlignGrid({
            scene: this,
            rows: 11,
            cols: 11
        });
        this.aGrid.showNumbers();
        //
        //
        //
        var gameOverText = this.add.text(0, 0, "Game Over", {
            color: '#ffffff',
            fontSize: game.config.width / 10
        });
        gameOverText.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(27, gameOverText);
        //
        //
        //
        var playAgainText = this.add.text(0, 0, "Play Again!", {
            color: '#ffffff',
            fontSize: game.config.width / 10
        });
        playAgainText.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(82, playAgainText);
        playAgainText.setInteractive();
        playAgainText.on('pointerdown', this.playAgain, this);
    }
    playAgain() {
        this.scene.start("SceneMain");
    }
    update() {}
}
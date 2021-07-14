class TextThumb extends Phaser.Group {
    constructor(key, text) {
        super(game);
        this.icon = game.add.image(0, 0, key);
        this.icon.anchor.set(0.5, 0.5);
        this.add(this.icon);
        this.text1 = game.add.text(0, 0, text);
        this.text1.anchor.set(0.5, 0.5);
        this.text1.fontSize=24;
        this.add(this.text1);

    }
    getText() {
        return this.text1;
    }
    getIcon() {
        return this.icon;
    }
}
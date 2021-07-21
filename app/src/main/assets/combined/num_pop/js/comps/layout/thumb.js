class Thumb extends Phaser.Group {
    constructor(key) {
        super(game);
        this.icon = game.add.image(0, 0, key);
        this.icon.anchor.set(0.5, 0.5);
        this.add(this.icon);
    }
    getIcon() {
        return this.icon;
    }
}
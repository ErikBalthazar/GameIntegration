class CircleIcon extends Phaser.Group {
    constructor(backIndex = 0, iconIndex = 0, strike = false) {
        super(game);
        this.back = game.add.sprite(0, 0, "circleBacks");
        this.icon = game.add.sprite(0, 0, "circleIcons");
        this.offSign = game.add.sprite(0, 0, "offSign");
        this.back.anchor.set(0.5, 0.5);
        this.icon.anchor.set(0.5, 0.5);
        this.offSign.anchor.set(0.5, 0.5);
        //
        //
        //
        this.add(this.back);
        this.add(this.icon);
        this.add(this.offSign);
        //
        //
        //
        this.back.frame = backIndex;
        this.icon.frame = iconIndex;
        this.offSign.visible = strike;
    }
    static preload() {
        game.load.spritesheet("circleBacks", "images/ui/icons/backs.png", 105, 100);
        game.load.spritesheet("circleIcons", "images/ui/icons/icons.png", 54, 55);
        game.load.image("offSign", "images/ui/icons/off.png");
    }
    getBack() {
        return this.back;
    }
    getOff() {
        return this.offSign;
    }
    getIcon() {
        return this.icon;
    }
}
class PointBox extends Phaser.Group {
    constructor(xx, yy, points) {
        super(game);
        var pString = "+" + points;
        this.text1 = game.add.text(0, 0, pString, TextUtil.getDefaultPrimary());
        this.text1.anchor.set(0.5, 0.5);
        this.add(this.text1);
        console.log(model.secondaryTextColor);
        //
        //
        //
        this.x = xx;
        this.y = yy;
        var tx = game.add.tween(this).to({
            y: 0,
            alpha: 0
        }, 500, Phaser.Easing.Linear.None, true);
        tx.onComplete.add(this.tweenDone, this);
    }
    tweenDone() {
        this.destroy();
    }
}
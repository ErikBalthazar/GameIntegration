class FlyBox extends Phaser.Group {
    constructor(xx, yy, message, style = null) {
        super(game);
        if (style == null) {
            this.text1 = game.add.text(0, 0, message);
        } else {
            this.text1 = game.add.text(0, 0, message, style);
            console.log(style);
        }
        this.text1.anchor.set(0.5, 0.5);
        this.add(this.text1);
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
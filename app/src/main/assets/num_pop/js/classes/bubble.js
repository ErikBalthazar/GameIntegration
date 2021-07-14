class Bubble extends Phaser.Sprite {
    constructor(text) {
        super(game, 0, 0, "bubbles", 0);
        //add to stage right away
        game.add.existing(this);
        this._value = parseInt(text);
        this.anchor.set(0.5, 0.5);
        this.x = game.world.randomX;
        this.y = game.world.randomY;
        if (this.y < game.height * .25) {
            this.y = game.height * .25;
        }
        var f = game.rnd.integerInRange(0, 3);
        this.frame = f;
        this.width = game.width * .15;
        this.scale.y = this.scale.x;
        this.text1 = game.add.text(-2, 0, text);
        // this.text1.align="center";
        this.text1.anchor.set(0.5, 0.5);
        this.text1.fill = "white";
        this.addChild(this.text1);
        this.inputEnabled = true;
        this.events.onInputDown.add(this.clickMe, this);
    }
    clickMe() {
        eventDispatcher.dispatch("BUBBLE_CLICKED", this);
    }
    setVelocity() {
        var xx = game.rnd.integerInRange(-100, 100);
        var yy = game.rnd.integerInRange(-100, 100);
        this.body.velocity.set(xx, yy);
    }
    get value() {
        return this._value;
    }
}
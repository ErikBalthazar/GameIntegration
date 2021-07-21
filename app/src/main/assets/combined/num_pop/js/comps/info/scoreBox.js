class ScoreBox extends Phaser.Group {
    constructor() {
        super(game);
        this.text1 = game.add.text(0, 0, "Score:0");
        this.text1.anchor.set(0.5, 0.5);
        this.text1.fill = "#ffffff";
        this.text1.font=model.mainFont;
        //
        //
        this.add(this.text1);
        eventDispatcher.add(this.gotEvent, this);
        
        Align.scaleToGameW(this,0.1645833);
    }
    gotEvent(call, params) {
        if (call == G.SCORE_UPDATED) {
            this.text1.text = "Score:" + model.score;
        }
    }
}
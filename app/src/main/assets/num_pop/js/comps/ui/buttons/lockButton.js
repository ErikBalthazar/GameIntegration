class LockButton extends Phaser.Group {
    constructor(level,s = 50) {
        super(game);
        this.level=level;
        this.buttonBack = game.add.graphics();
        this.buttonBack.beginFill(model.mainColor, 1);
        this.buttonBack.drawRoundedRect(0, 0, s, s, 8);
        this.buttonBack.endFill();
        this.add(this.buttonBack);
        //
        //
        this.icon = game.add.sprite(0, 0, "locks");
        this.icon.width = this.buttonBack.width * .7;
        this.icon.height = this.buttonBack.height * .7;
        this.icon.y = this.buttonBack.height / 2;
        this.icon.x = this.buttonBack.width / 2;
        //
        //
        this.icon.anchor.set(0.5, 0.5);
        this.add(this.icon);
        this.icon.frame=1;

        this.buttonBack.inputEnabled=true;
        this.buttonBack.events.onInputDown.add(this.getLevel,this);

        this.text1=game.add.text(0,0,level,TextUtil.getNumberStyle());
        this.text1.anchor.set(0.5,0.5);
        this.text1.visible=false;
        this.text1.x=this.buttonBack.height/2;
        this.text1.y=this.buttonBack.width/2;
        this.add(this.text1);
    }
    getLevel()
    {
    	eventDispatcher.dispatch(G.GET_LEVEL,this.level);
    }
    setLocked(val) {
        if (val == false) {
            this.icon.frame = 1;
            this.icon.visible=false;
            this.text1.visible=true;
        } else {
            this.icon.frame = 0;
            this.text1.visible=false;
            this.icon.visible=true;
        }
    }
}
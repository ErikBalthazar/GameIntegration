class PopUp extends Phaser.Group {
    constructor() {
        super(game);
        this.name = "";
        eventDispatcher.add(this.gotEvent, this);
    }
    drawBack(w,h)
    {
    	this.back=new PopBack(w,h);
    	//
    	this.back.x=-this.back.width/2;
    	this.back.y=-this.back.height/2;
    	//
    	this.add(this.back);
    }
    gotEvent(call, params) {
        switch (call) {
            case G.SHOW_POP_UP:
                if (params == this.name) {
                    this.visible = true;
                }
                break;
            case G.HIDE_POP_UPS:
                this.visible = false;
                break;
        }
    }
}
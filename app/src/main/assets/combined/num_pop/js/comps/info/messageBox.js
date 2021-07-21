class MessageBox extends PopUp {
    constructor() {
        super(game);
        this.visible=false;
        this.drawBack(game.width / 2, game.height / 5);
        this.x = game.width / 2;
        this.y = game.height / 2;
        this.titleText = game.add.text(0, 0, "Title", TextUtil.getTitleStyle());
        this.titleText.anchor.set(0, 0.5);
        this.titleText.y = -this.back.height / 2 + this.titleText.height;
        this.titleText.x = -this.back.width / 2 + 15;
        this.text1 = game.add.text(0, 0, "That Level Is Locked!", TextUtil.getMessageStyle());
        this.text1.anchor.set(0.5, 0.5);
        this.text1.y = -game.height * .05;
        this.add(this.text1);
        this.add(this.titleText);
        /*this.buttonClose=new TextButton("OK",4,4);
        this.buttonClose.getBack().width=game.width*.1;
        this.buttonClose.getBack().height=game.width*.1;
        this.buttonClose.y=this.back.height/2-this.buttonClose.height*1.05;
        this.add(this.buttonClose);*/
        this.buttonClose = new GButton("OK", G.HIDE_POP_UPS);
        this.buttonClose.x = -this.buttonClose.width / 2;
        this.buttonClose.y = this.buttonClose.height;
        this.add(this.buttonClose);
    }
    gotEvent(call, params) {
        super.gotEvent(call, params);
        switch (call) {
            case G.SHOW_MESSAGE_BOX:
                this.text1.text = params.message;
                this.titleText.text = params.title;
                this.visible = true;
                break;
        }
    }
}
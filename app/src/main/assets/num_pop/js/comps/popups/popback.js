class PopBack extends Phaser.Group {
    constructor(w = 400, h = 400) {
        super(game);
        //header
        this.header = game.add.graphics();
        this.header.beginFill(model.headerColor, 1);
        this.header.drawRoundedRect(0, 0, w, 50, 8);
        //hide the rounded corners on the bottom
        this.header.drawRect(0, 30, w, 25);
        this.header.endFill();
        //middle
        //
        this.middle = game.add.graphics();
        this.middle.beginFill(model.windowColor, 1);
        this.middle.drawRect(0, 50, w, h);
        this.middle.endFill();
        //footer
        this.footer = game.add.graphics();
        this.footer.beginFill(model.windowColor, 1);
        this.footer.drawRoundedRect(0, h + 25, w, 50, 8);
        this.footer.endFill();
        //
        //
        //
        this.add(this.header);
        this.add(this.middle);
        this.add(this.footer);
    }
}
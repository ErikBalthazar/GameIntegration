class GButton extends Phaser.Group {
    constructor(text = 'button', event = null, w = 100, backColor = 0xE9B515, size = 22, textColor = '#000000') {
        super(game);
        this.event = event;
        this.buttonBack = game.add.graphics();
        this.buttonBack.beginFill(model.secondaryColor, 1);
        this.buttonBack.drawRoundedRect(0, 0, w, 50, 8);
        this.buttonBack.endFill();
        //
        //
        this.textField = game.add.text(0, 0, text);
        this.textField.anchor.set(0.5, 0.5);
        this.textField.fontSize = size + "px";
        this.textField.x = this.buttonBack.width / 2;
        this.textField.y = this.buttonBack.height / 2;
        this.textField.fill = textColor;
        this.add(this.buttonBack);
        this.add(this.textField);
        this.buttonBack.inputEnabled = true;
        this.buttonBack.events.onInputUp.add(this.onPressed, this);
    }
    getBack() {
        return this.buttonBack;
    }
    onPressed() {
        if (this.event) {
            eventDispatcher.dispatch(this.event);
        }
    }
    setCallBack(callback) {
        this.callback = callback;
    }
    setTextSize(size) {
        this.textField.fontSize = size + "px";
    }
    setTextPos(xx, yy) {
        this.textField.x = xx;
        this.textField.y = yy;
    }
    setTextColor(textColor) {
        this.textField.fill = textColor;
    }
    getTextField() {
        return this.textField;
    }
    getText() {
        return this.textField.text;
    }
}
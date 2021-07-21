class TextButton extends Phaser.Group {
    constructor(text = 'button', set = -1, style = -1, event = null, size = 22, textColor = '#000000') {
        super(game);

        if (set==-1)
        {
            set=model.defButtonSet;
        }
        if (style==-1)
        {
            style=model.defButtonStyle;
        }

        var key = "buttons_" + set + "_" + style;
        //  console.log(key);
        this.key = key;
        //
        //
        //
        this.text = text;
        this.event = event;
        //
        //
        //
        //
        this.buttonBack = this.create(0, 0, this.key);
        this.buttonBack.anchor.set(0.5, 0.5);
        //
        //
        this.textField = game.add.text(0, 0, text);
        this.textField.anchor.set(0.5, 0.5);
        this.textField.fontSize = size + "px";
        this.textField.fill = textColor;
        this.add(this.textField);
        this.buttonBack.inputEnabled = true;
        this.buttonBack.events.onInputUp.add(this.onPressed, this);
    }
    static preload(set, style) {
        var key = "buttons_" + set + "_" + style;
        var path = "images/ui/buttons/" + set + "/" + style + ".png";
        game.load.image(key, path);
    }
    static preloadAll() {
        var lenArray = [10, 8, 15,14,10,10,8,10,10,10];
        for (var i = 1; i < 11; i++) {
            for (var j = 1; j < lenArray[i-1] + 1; j++) {
                TextButton.preload(i, j);
            }
        }
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
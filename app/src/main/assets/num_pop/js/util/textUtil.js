class TextUtil {
    constructor() {}
    static getInstructionText(text) {
        var text1 = game.add.text(0, 0, text);
        text1.anchor.set(0.5, 0.5);
        text1.fontSize = 24;
        text1.fill = "#ff0000";
        text1.backgroundColor = "#ffffff";
        text1.font = model.mainFont;
        text1.wordWrapWidth = game.width * .75;
        text1.wordWrap = true;
        return text1;
    }
    static getMessageStyle() {
        var style = {
            font: model.mainFont,
            fontSize: "24px",
            fill: 'black',
            align: 'center',
            wordWrap: true,
            wordWrapWidth: 250
        }
        return style;
    }
    static getTitleStyle() {
        var style = {
            font: model.mainFont,
            fontSize: "24px",
            fill: 'black',
            align: 'center',
            wordWrap: true,
            wordWrapWidth: 250
        }
        return style;
    }
    static getNumberStyle()
    {
        var style = {
            font: model.mainFont,
            fontSize: "24px",
            fill: 'black',
            align: 'center'
        }
        return style;
    }
    static getDefaultPrimary()
    {
        var style = {
            font: model.mainFont,
            fontSize: "64px",
            fill: "#ff0000",
            align: 'center'
        }
        return style;
    }
}
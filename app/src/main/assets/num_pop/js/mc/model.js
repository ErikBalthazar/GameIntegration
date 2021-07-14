class Model {
    constructor() {
        this.score = 0;
        this.mainFont = "Flamenco";
        this._musicOn = true;
        this.soundOn = true;
        this.lastUnlocked = 1;
        this.defButtonSet = 4;
        this.defButtonStyle = 3;
        //
        //
        //
        this.mainTextColor = 0xffffff;
        this.mainColor = 0xffffff;
        this.secondaryColor = 0xffff00;
        this.windowColor = 0xffffff;
        this.headerColor = 0xE9B515;
        this.soundButtonIndex = 2;
        this.secondaryTextColor = 0xffff00;
    }
    upScore(points) {
        this.score += parseInt(points);
        eventDispatcher.dispatch(G.SCORE_UPDATED);
    }
    set musicOn(val) {
        this._musicOn = val;
        eventDispatcher.dispatch(G.MUSIC_STAT_CHANGED);
    }
    get musicOn() {
        return this._musicOn;
    }
}
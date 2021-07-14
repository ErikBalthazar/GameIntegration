class TimerBar extends Phaser.Group {
    constructor() {
        super(game);
        this.secs = 100;
        this.max = 100;
        this.enabled = false;
        eventDispatcher.add(this.gotEvent, this);
        game.time.events.loop(Phaser.Timer.SECOND / 100, this.tick, this);
        this.bar = game.add.graphics();
        //  this.bar.lineStyle(2, "#00000");
        this.bar.beginFill(0xff0000, 1);
        this.bar.drawRect(0, 0, 200, 20);
        this.bar.endFill();
        this.add(this.bar);
    }
    gotEvent(call, params) {
        switch (call) {
            case G.SET_BAR_TIME:
                this.secs = parseInt(params);
                this.max = this.secs;
                break;
            case G.STOP_BAR_TIME:
                this.enabled = false;
                break;
            case G.START_BAR_TIME:
                this.enabled = true;
                break;
            case G.ADD_BAR_TIME:
                this.secs += parseInt(params);
                this.setText();
                break;
        }
    }
    tick() {
        if (this.enabled == true) {
            this.secs -= .01;
            if (this.secs < 0) {
                this.enabled = false;
                eventDispatcher.dispatch(G.TIMES_UP);
            }
            this.setBar();
        }
    }
    setBar() {
        var per = (this.secs / this.max);
        if (per < 0) {
            per = 0;
        }
        this.bar.width = 200 * per;
    }
}
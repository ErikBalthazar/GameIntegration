class ToggleButton extends Phaser.Group {
    constructor(backIndex = 0, iconIndex = 0, event = "") {
        super(game);
        this.isOn = true;
        this.icon = new CircleIcon(backIndex, iconIndex, false);
        this.event = event;
        this.icon.getBack().inputEnabled = true;
        this.icon.getBack().events.onInputDown.add(this.pressed, this);
        this.add(this.icon);
    }
    pressed() {
        var elapsed = Clock.getTimer() - this.lastClick;
        if (Math.abs(elapsed) < 300) {
            return;
        }
        this.isOn = !this.isOn;
        this.icon.getOff().visible = !this.isOn;
        if (this.event) {
            eventDispatcher.dispatch(this.event, this.isOn);
        }
        this.lastClick = Clock.getTimer();
    }
    setTo(val) {
        this.isOn = val;
        this.icon.getOff().visible = !this.isOn;
    }
}
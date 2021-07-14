var StateLevels = {
    create: function() {
        var soundButtons = new SoundButtons();
        this.grid = new Grid(1.5, 1.5);
        var levels = 25;
        for (var i = 0; i < levels; i++) {
            var level = i + 1;
            var lockButton = new LockButton(level);
            if (parseInt(level) < parseInt(model.lastUnlocked) + 1) {
                lockButton.setLocked(false);
            } else {
                lockButton.setLocked(true);
            }
            this.grid.add(lockButton);
        }
        this.grid.makeGrid(5);
        this.grid.x = game.width / 2 - this.grid.width / 2;
        this.grid.y = game.height / 2 - this.grid.height / 2;
        var messageBox = new MessageBox();
    }
}
class LevelManager {
    constructor() {
        model.lastUnlocked = Saver.getData("lastUnlockedLevel");
        if (model.lastUnlocked == undefined) {
            model.lastUnlocked = 1;
            Saver.save("lastUnlockedLevel", 1);
        }
        eventDispatcher.add(this.gotEvent, this);
    }
    unlockLevel(level) {
        if (level > model.lastUnlocked) {
            model.lastUnlocked = level;
            Saver.save("lastUnlockedLevel", level);
        }
    }
    gotEvent(call, params) {
        switch (call) {
            case G.UNLOCK_LEVEL:
                this.unlockLevel(params);
                break;
        }
    }
    resetLevels() {
        Saver.save("lastUnlockedLevel", 1);
    }
}
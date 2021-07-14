class Controller {
    constructor() {
        eventDispatcher.add(this.gotEvent, this);
    }
    gotEvent(call, params) {
        // console.log("call=" + call);
        switch (call) {
            case G.UP_SCORE:
                model.upScore(params);
                break;
            case G.TOGGLE_SOUND:
                model.soundOn = params;
                break;
            case G.TOGGLE_MUSIC:
                model.musicOn = params;
                break;
            case G.START_GAME:
                game.state.start("StateMain");
                break;
            case G.END_GAME:
                game.state.start("StateOver");
                break;
            case G.INSTRUCTIONS:
                game.state.start("StateInstructions");
                break;
            case G.GET_LEVEL:
                var level = parseInt(params);
                console.log("level=" + level);
                if (level > model.lastUnlocked) {
                    eventDispatcher.dispatch(G.SHOW_MESSAGE_BOX, {
                        "title": "Locked!",
                        "message": "That Level Is Locked!"
                    });
                } else {
                    model.currentLevel = level;
                    game.state.start("StateMain");
                }
                break;
        }
    }
}
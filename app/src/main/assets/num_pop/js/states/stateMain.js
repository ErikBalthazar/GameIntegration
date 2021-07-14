var StateMain = {
    preload: function() {},
    create: function() {
        this.level = -1;
        model.score = 0;
        this.pickHigh = true;
        var background = new Background("backgroundImage");
        var spinner = new Spinner("spinner");
        this.top = game.add.sprite(0, 0, "top");
        Align.scaleToGameW(this.top, 1.04166);
        var infoBar = new InfoBar();
        var soundButtons = new SoundButtons();
        //
        //
        //
        game.stage.backgroundColor = "#121212";
        //
        //  
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.bubbleGroup = game.add.group();
        game.physics.enable(this.top, Phaser.Physics.ARCADE);
        this.top.body.immovable = true;
        //
        //
        //
        //
        //
        //
        this.arrow = game.add.sprite(0, 0, "arrow");
        this.arrow.anchor.set(0.5, 0.5);
        Align.center(this.arrow);
        Align.scaleToGameW(this.arrow, 0.2083333);
        game.physics.enable(this.arrow, Phaser.Physics.ARCADE);
        this.arrow.body.immovable = true;
        this.chooseDir();
        eventDispatcher.add(this.gotEvent, this);
        this.setLevel();
    },
    setLevel() {
        this.level++;
        var deckLength = [10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 99];
        if (this.level > 10) {
            this.level = 10;
        }
        var secs = [20, 20, 30, 30, 40, 60, 60, 60, 60, 60, 60, 60, 60];
        eventDispatcher.dispatch(G.SET_TIME, secs[this.level]);
        this.makeDeck(deckLength[this.level]);
        eventDispatcher.dispatch(G.START_TIME);
    },
    makeBubbles(len) {
        for (var i = 0; i < len; i++) {
            //var v = game.rnd.integerInRange(0, 10);
            var bubble = new Bubble(this.deck[i]);
            Align.scaleToGameW(bubble, .15);
            game.physics.enable(bubble, Phaser.Physics.ARCADE);
            bubble.body.bounce.set(1, 1);
            bubble.body.collideWorldBounds = true;
            bubble.setVelocity();
            this.bubbleGroup.add(bubble);
        }
        this.bubbleGroup.sort('value');
    },
    makeDeck(len = 10) {
        this.deck = [];
        for (var i = 0; i < len; i++) {
            this.deck[i] = i;
        }
        this.shuffle();
        this.makeBubbles(len / 2);
    },
    shuffle() {
        var len = this.deck.length - 1;
        for (var i = 0; i < 100; i++) {
            var p1 = game.rnd.integerInRange(0, len);
            var p2 = game.rnd.integerInRange(0, len);
            //
            var temp = this.deck[p1];
            this.deck[p1] = this.deck[p2];
            this.deck[p2] = temp;
        }
    },
    gotEvent(call, params) {
        switch (call) {
            case "BUBBLE_CLICKED":
                this.bubbleGroup.sort('value');
                this.checkRight(params);
                params.destroy();
                eventDispatcher.dispatch(G.PLAY_SOUND, "pop");
                break;
            case G.TIMES_UP:
                eventDispatcher.dispatch(G.END_GAME);
                break;
        }
    },
    chooseDir() {
        var v = game.rnd.integerInRange(0, 1);
        var arrowAngle;
        if (v == 0) {
            this.pickHigh = true;
            arrowAngle = 0;
        } else {
            this.pickHigh = false;
            arrowAngle = 180;
        }
        if (this.last != this.pickHigh) {
            this.last = this.pickHigh;
            eventDispatcher.dispatch(G.PLAY_SOUND, "whoosh");
            game.add.tween(this.arrow).to({
                angle: arrowAngle
            }, 250, Phaser.Easing.Linear.None, true);
        }
    },
    gotRight() {
        this.chooseDir();
        if (this.bubbleGroup.children.length == 1) {
            this.setLevel();
        }
        eventDispatcher.dispatch(G.UP_SCORE, 1);
    },
    checkRight(bubble) {
        var firstChild = this.bubbleGroup.getChildAt(0);
        var lastChild = this.bubbleGroup.getChildAt(this.bubbleGroup.children.length - 1);
        if (this.pickHigh == true) {
            if (lastChild == bubble) {
                this.gotRight();
                return;
            } else {
                lastChild.scale.set(2, 2);
            }
        } else {
            if (firstChild == bubble) {
                this.gotRight();
                return;
            } else {
                firstChild.scale.set(2, 2);
            }
        }
        console.log("Wrong!");
        this.gameOver();
    },
    gameOver() {
        eventDispatcher.dispatch(G.PLAY_SOUND, "hit");
        this.bubbleGroup.forEach(function(bubble) {
            bubble.body.velocity.set(0, 0);
        });
        game.time.events.add(Phaser.Timer.SECOND * 2, this.gameOver2, this);
    },
    gameOver2() {
        game.state.start("StateOver");
    },
    update: function() {
        game.physics.arcade.collide(this.bubbleGroup);
        game.physics.arcade.collide(this.bubbleGroup, this.top);
        game.physics.arcade.collide(this.bubbleGroup, this.arrow);
    }
}
var StateLoad = {
    preload: function() {
        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");
        empty.anchor.set(0.5, 0.5);
        empty.x = game.width / 2;
        empty.y = game.height / 2;
        //
        //
        full.anchor.set(0, 0.5);
        full.x = game.world.centerX - empty.width / 2;
        full.y = empty.y;
        game.load.setPreloadSprite(full);
        //PRELOAD EVERYTHING HERE
        //
        //
        //
        //
        TextButton.preloadAll();
        CircleIcon.preload();
        game.load.audio("background", "audio/background/background.mp3");
        game.load.audio("pop", "audio/sfx/pop1.mp3");
        game.load.audio("hit", "audio/sfx/hit.mp3");
        game.load.audio("whoosh", "audio/sfx/whoosh.mp3");
        //game.load.spritesheet("locks","images/ui/icons/lockIcons.png",110,120,2);
        game.load.spritesheet("bubbles", "images/main/bubbles.png", 105, 105);
        game.load.image("top", "images/main/top.png");
        game.load.image("arrow", "images/main/arrow.png");
        game.load.image("backgroundImage", "images/main/purple.png");
        game.load.image("spinner", "images/main/spin1.png");
        game.load.image("instructions", "images/main/instructions.png");
        game.load.image("title","images/main/title.png");
    },
    create: function() {
        mediaManager.setBackgroundMusic("background");
        mediaManager.addSound("pop");
        mediaManager.addSound("hit");
        mediaManager.addSound("whoosh");
        game.state.start("StateTitle");
        //model.musicOn = false;
    },
    update: function() {}
}
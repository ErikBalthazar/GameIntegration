var StateLoad = {

    preload: function () {

        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        center(empty);
        full.anchor.set(0, 0.5);
        full.x = game.world.centerX - empty.width / 2;
        full.y = empty.y;

        game.load.setPreloadSprite(full);

        //PRELOAD EVERYTHING HERE
        game.load.spritesheet("buttons", "images/ui/buttons-red.png", 265, 75);
        game.load.spritesheet("soundButtons", "images/ui/soundButtons-blue.png", 44, 44, 4);
        game.load.spritesheet("squares","images/squares.png",250,250);
        game.load.audio("note1","audio/1.mp3");
        game.load.audio("note2","audio/2.mp3");
        game.load.audio("note3","audio/3.mp3");
        game.load.audio("note4","audio/4.mp3");
        game.load.audio("bang","audio/bang.mp3");
    },

    create: function () {
        game.state.start("StateTitle");
    },

    update: function () {
        
    }

}
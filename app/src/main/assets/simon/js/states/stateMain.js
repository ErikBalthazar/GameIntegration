var StateMain = {
    preload: function() {},
    create: function() {
        //define an array to hold the random song
        this.songArray = [];
        //define the notes and sound effects
        var note1 = game.add.audio("note1");
        var note2 = game.add.audio("note2");
        var note3 = game.add.audio("note3");
        var note4 = game.add.audio("note4");
        this.bang = game.add.audio("bang");
        //play the notes on an array for easy indexing
        this.noteArray = [note1, note2, note3, note4];
        //lock the click for while the song is playing
        this.clickLock = true;
        //make the blocks
        var red = this.getBlock(0);
        var blue = this.getBlock(1);
        var yellow = this.getBlock(2);
        var green = this.getBlock(3);
        //
        //put the blocks in a group
        //this will make it easy to center all the blocks
        //
        this.blocks = game.add.group();
        this.blocks.add(red);
        this.blocks.add(blue);
        this.blocks.add(yellow);
        this.blocks.add(green);
        //
        //position the blocks
        //all the postions were set at 0
        //so we just need to set some of the positions
        //
        blue.x = 250;
        yellow.y = 250;
        green.y = 250;
        green.x = 250;
        //make the blocks 80% of the width of the screen
        this.blocks.width = game.width * .8;
        //scale the height to match the width
        this.blocks.scale.y = this.blocks.scale.x;
        //center the blocks on the screen
        this.blocks.x = game.width / 2 - this.blocks.width / 2;
        this.blocks.y = game.height / 2 - this.blocks.height / 2;
        //alpha the blocks
        this.resetBlocks();
        //add a note to the song
        this.addToSong();
        //play the song
        this.playSong();
    },
    /**
     * [getBlock make a sprite, and add the click listener]
     * @param  {[type]} frame [this is the color of the block]
     * @return {[group]}   
     */
    getBlock: function(frame) {
        var block = game.add.sprite(0, 0, "squares");
        block.frame = frame;
        block.inputEnabled = true;
        block.events.onInputDown.add(this.clickBlock, this);
        return block;
    },
    /**
     * [resetBlocks turn all the blocks to 20% alpha]
     * @return {[none]}
     */
    resetBlocks: function() {
        this.blocks.forEach(function(block) {
            block.alpha = .2;
        });
    },
    /**
     * [addToSong push a random note on the songArray]
     */
    addToSong: function() {
        var s = game.rnd.integerInRange(0, 3);
        this.songArray.push(s);
    },
    playSong: function() {
        //set the playIndex to negative one
        this.playIndex = -1;
        //start the timer to play the notes
        this.songTimer = game.time.events.loop(Phaser.Timer.SECOND, this.nextNote, this);
    },
    nextNote: function() {
        //alpha the blocks
        this.resetBlocks();
        //advance the playIndex
        //we start at -1 so the first time the playIndex will be 0
        this.playIndex++;
        //if the play index is equal to the songArray length then
        //song is over
        //
        if (this.playIndex == this.songArray.length) {
            this.clickLock = false;
            this.clickIndex = 0;
            game.time.events.remove(this.songTimer);
            return;
        }
        //get the number of the note from the song
        var note = this.songArray[this.playIndex];
        //play the note
        this.playNote(note);
    },
    playNote: function(note) {
        //get the sound object from the note array
        var sound = this.noteArray[note];
        sound.play();
        //get the block that goes with the sound
        var block = this.blocks.getChildAt(note);
        //light it up!
        block.alpha = 1;
        //turn off the lights after a 1/4 of a second delay
        game.time.events.add(Phaser.Timer.SECOND / 4, this.resetBlocks, this);
    },
    clickBlock: function(target) {
        //if the song is playing return
        if (this.clickLock == true) {
            return;
        }
        //get the frame from the square clicked
        var index = target.frame;
        //if the index is equal to the number
        //in the songArray then the user
        //has pressed the right notes
        if (index == this.songArray[this.clickIndex]) {
            //get the note from the songArray
            var note = this.songArray[this.clickIndex];
            //play the note
            this.playNote(note);
            this.clickIndex++;
            //if the clickIndex is equal to the songArray length we have
            //reached the end of the song
            if (this.clickIndex == this.songArray.length) {
                this.clickLock = true;
                this.playIndex = -1;
                this.addToSong();
                this.playSong();
                return;
            }
        } else {
            //wrong note!
            //Game Over
            this.bang.play();
            this.clickLock = true;
            game.state.start("StateOver");
        }
    },
    update: function() {}
}
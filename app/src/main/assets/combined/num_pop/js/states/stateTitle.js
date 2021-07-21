var StateTitle = {
    create: function() {
        var background = new Background("backgroundImage");
        var spinner = new Spinner("spinner");
        var soundButtons = new SoundButtons();
        var btnStart = new TextButton("Start", 6, 6, G.START_GAME);
        var btnInstructions = new TextButton("How to Play", 6, 6, G.INSTRUCTIONS);
        //Align.center(btnStart);
        var line = new ItemLine();
        line.add(btnStart);
        line.add(btnInstructions);
        line.lineUp();
        Align.center(line);
        line.y = game.height / 2 - line.height / 2;

      //  Align.getScaleToGameW(soundButtons);
       // Align.getScaleToGameW(line);
        Align.scaleToGameW(line,0.4875);

        var title=new Logo("title",.75);
        title.y=game.height*.25;
    }
}
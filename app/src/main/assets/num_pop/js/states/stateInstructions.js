var StateInstructions = {
    create: function() {
        var btnStart = new TextButton("Start", 6, 6, G.START_GAME);
        Align.center(btnStart);
        btnStart.y = game.height - btnStart.height * 1.5;
        //
        //
        //
        var instructions = new Logo("instructions", .5);
        instructions.y=game.height*.25;

         //Align.getScaleToGameW(btnStart);
         Align.scaleToGameW(instructions,.5);
         Align.scaleToGameW(btnStart,0.4875);
       // Align.getScaleToGameW(line);
    }
}
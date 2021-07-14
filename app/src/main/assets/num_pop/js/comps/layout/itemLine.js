class ItemLine extends Phaser.Group {
    constructor() {
        super(game);
    }
    addItem(item) {
        this.add(item);
    }
    lineUp(opt = 1) {
        var len = this.children.length;
        var yy = 0;
        for (var i = 0; i < len; i++) {
            var c = this.getChildAt(i);
            c.y = yy;
            switch (opt) {
                case 1:
                    c.x = 0;
                    break;
                case 2:
                    c.x = game.width / 2;
                    break;
                case 3:
                    c.x = game.width / 2 - c.width / 2;
                    break;
            }
            yy += c.height;
        }
    }
    makeGrid(maxWidth = 200) {
        var len = this.children.length;
        var yy = 0;
        var xx = 0;
        for (var i = 0; i < len; i++) {
            var c = this.getChildAt(i);
            c.x = xx;
            c.y = yy;
            xx += c.width;
            if (xx > maxWidth) {
                xx = 0;
                yy += c.height;
            }
        }
    }
    
}
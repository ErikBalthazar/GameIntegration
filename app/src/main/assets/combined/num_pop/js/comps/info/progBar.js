class ProgBar extends Phaser.Group
{
	constructor()
	{
		super(game);
		this.bar = game.add.graphics();
        //  this.bar.lineStyle(2, "#00000");
        this.bar.beginFill(0x1CF707, 1);
        this.bar.drawRect(0, 0, 200, 20);
        this.bar.endFill();
        this.add(this.bar);
	}

	setPer(per)
	{
		this.scale.x=per;

	}
}

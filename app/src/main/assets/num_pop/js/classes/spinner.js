class Spinner extends Phaser.Group
{
	constructor(key)
	{
		super(game);
		this.image = game.add.sprite(0, 0, key);
        this.image.width = game.width * 1.5;
        this.image.height = game.height * 1.5;
        this.image.anchor.set(0.5, 0.5);
        this.image.alpha = .1;
        this.add(this.image);
        Align.center(this);
	}
	update()
	{
		this.angle++;
	}
}

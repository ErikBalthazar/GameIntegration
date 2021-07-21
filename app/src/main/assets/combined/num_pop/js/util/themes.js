class Themes
{
	constructor()
	{
		
	}

	static useDefault()
	{
		model.mainFont="Flamenco";
		model.defButtonSet=4;
		model.defButtonStyle=3;
		model.mainTextColor=0xffffff;
		model.secondaryTextColor="#ff0000";
		model.mainColor=0xffffff;
		model.secondaryColor=0xffff00;
		model.windowColor=0xffffff;
		model.headerColor=0xE9B515;
		model.soundButtonIndex=2;
	}

	static usePrimary()
	{
		model.mainFont="Indie Flower";
		model.defButtonSet=4;
		model.defButtonStyle=5;
		model.mainTextColor=0x000000;
		model.secondaryTextColor=0xffffff;

		model.mainColor=0xFF0000;
		model.secondaryColor=0x4CFF00;
		model.windowColor=0x0094FF;
		model.headerColor=0xFF0000;
		model.soundButtonIndex=4;
	}
}

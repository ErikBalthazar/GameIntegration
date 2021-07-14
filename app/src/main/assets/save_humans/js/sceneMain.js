class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        //load our images or sounds 
        this.preload2("alien");
        this.preload2("bullet");
        this.preload2("human");
        this.preload2("city");
        this.preload2("background");
        this.load.spritesheet('exp', 'images/exp.png', {
            frameWidth: 256,
            frameHeight: 256
        });
        this.load.audio("boomSound", "audio/boom.wav");
        this.load.audio("pop", "audio/pop.wav");
        this.load.audio("shoot", "audio/shoot.wav");
    }
    preload2(key) {
        var path = "images/" + key + ".png";
        this.load.image(key, path);
    }
    create() {
        this.score = 0;
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);
        this.background.displayHeight = game.config.height;
        this.background.displayWidth = game.config.width;
        //define our objects
        this.charGroup = this.physics.add.group();
        this.bulletGroup = this.physics.add.group();
        //
        //
        //
        //
        console.log("Ready!");
        this.aGrid = new AlignGrid({
            scene: this,
            rows: 11,
            cols: 11
        });
        //this.aGrid.showNumbers();
        this.addChar();
        this.time.addEvent({
            delay: 1500,
            callback: this.addChar,
            callbackScope: this,
            loop: true
        });
        this.input.on('pointerdown', this.addBullet, this);
        this.physics.add.collider(this.charGroup, this.bulletGroup, this.hitChar, null, this);
        this.scoreText = this.add.text(0, 0, "Score:0", {
            color: '#ffffff',
            fontSize: game.config.width / 15
        });
        this.scoreText.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(16, this.scoreText);
        //
        //
        //
        this.city = this.add.image(game.config.width / 2, game.config.height, "city").setOrigin(0.5, 1);
        Align.scaleToGameW(this.city, 1);
        //
        //
        //
        var frameNames = this.anims.generateFrameNumbers('exp');
        this.anims.create({
            key: 'boom',
            frames: frameNames,
            frameRate: 32,
            repeat: 0
        });
        //
        //
        //
        this.pop = this.sound.add("pop");
        this.shoot = this.sound.add("shoot");
        this.boomSound = this.sound.add("boomSound");
    }
    hitChar(char, bullet) {
        if (char.isHuman == true) {
            console.log("HIT HUMAN!");
            this.scene.start("SceneOver");
        } else {
            //get a point
            this.updateScore();
            this.boomSound.play();
            this.exp = this.add.sprite(char.x, char.y, "exp");
            Align.scaleToGameW(this.exp, .25);
            this.exp.play("boom");
            this.exp.on('animationcomplete', function() {
                this.destroy();
                console.log("destroy");
            });
        }
        char.destroy();
        bullet.destroy();
    }
    updateScore() {
        this.score++;
        this.scoreText.setText("Score:" + this.score);
    }
    addChar() {
        var rand = Phaser.Math.Between(0, 100);
        if (rand > 50) {
            var char = this.physics.add.sprite(0, 0, "alien");
            char.isHuman = false;
        } else {
            var char = this.physics.add.sprite(0, 0, "human");
            char.isHuman = true;
        }
        this.aGrid.placeAtIndex(32, char);
        Align.scaleToGameW(char, .1);
        this.charGroup.add(char);
        char.setVelocityX(-100);
    }
    addBullet(pointer) {
        this.shoot.play();
        var bullet = this.physics.add.sprite(pointer.x, game.config.height * .9, "bullet");
        Align.scaleToGameW(bullet, .025);
        this.bulletGroup.add(bullet);
        bullet.setVelocityY(-500);
    }
    update() {
        this.charGroup.children.iterate(function(child) {
            if (child) {
                if (child.x < 0) {
                    child.x = 10;
                    child.setVelocityX(100);
                    child.y += child.displayHeight;
                }
                if (child.x > game.config.width) {
                    child.x -= 10;
                    child.setVelocityX(-100);
                    child.y += child.displayHeight;
                }
                if (child.y > game.config.height * .9) {
                    if (child.isHuman == true) {
                        this.updateScore();
                        this.pop.play();
                    } else {
                        //do game over
                        this.scene.start("SceneOver");
                    }
                    child.destroy();
                }
            }
        }.bind(this));
        //constant running loop
    }
}
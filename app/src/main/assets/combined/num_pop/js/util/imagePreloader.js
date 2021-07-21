class ImagePreloader extends Phaser.Group {
    constructor() {
        super(game);
        this.imageArray = [];
    }
    setCallBack(val, scope) {
        this.callback = val;
        this.scope = scope;
    }
    clear() {
        this.imageArray = [];
    }
    addImage(key, image) {
        var hasKey = game.cache.checkImageKey(key);
        
        if (hasKey == false) {
            this.imageArray.push({
                'key': key,
                'image': image
            });
        }
    }
    batch() {
        
        var len = this.imageArray.length;
        if (len == 0) {
            if (this.callback) {
                this.callback.call(this, this.scope);
                return;
            }
        }
        for (var i = 0; i < len; i++) {
            var path = this.imageArray[i].image;
            var key = this.imageArray[i].key;
            //console.log("key=" + key);
            game.load.image(key, path);
        }
        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.start();
    }
    fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        if (progress == 100) {
            if (this.callback) {
                this.callback.call(this, this.scope);
            }
        }
    }
}
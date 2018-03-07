var obj = require('./getall');
var ctx = require('./context');

var sprite = function(filename, is_pattern) {
    //construct
    this.image = null;
    this.pattern = null;
    this.TO_RADIANS = Math.PI / 180;
    if (filename != undefined && filename != '' && filename != null) {
        this.image = new Image();
        this.image.src = filename;
        if (is_pattern) {
            this.pattern = ctx.create(this.image, 'repeat');
        }
    } else {
        console.log('unable to load sprite');
        this.draw = function(x, y, w, h) {
            // pattern
            if (this.pattern != null) {
                ctx.fillStyle = this.pattern;
                ctx.fillRect(x, y, w, h);
            } else {
                //image
                if (w != undefined || h != undefined) {
                    ctx.drawImage(this.image, x, y, this.image.width, this.image.height)
                } else {
                    //stretched
                    ctx.drawImage(this.image, x, y, w, h);
                }
            }
        }
        this.rotate = function(x, y, angle) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle * this.TO_RADIANS);
            ctx.drawImage(this.image, -(this.image.width / 2), -(this.image.height / 2));
            ctx.restore();
        }
    }

}
module.exports = sprite;
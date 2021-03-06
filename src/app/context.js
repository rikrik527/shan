var obj = require('./getall');



var ctx = {
    canvas: null,
    context: null,
    create: function(canvas_tag) {
        this.canvas = document.getElementById(canvas_tag);
        this.context = this.canvas.getContext('2d');
        return this.context;

    }
}
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
                ctx.context.fillStyle = this.pattern;
                ctx.context.fillRect(x, y, w, h);
            } else {
                //image
                if (w != undefined || h != undefined) {
                    ctx.context.drawImage(this.image, x, y, this.image.width, this.image.height)
                } else {
                    //stretched
                    ctx.context.drawImage(this.image, x, y, w, h);
                }
            }
        }
        this.rotate = function(x, y, angle) {
            ctx.context.save();
            ctx.context.translate(x, y);
            ctx.context.rotate(angle * this.TO_RADIANS);
            ctx.context.drawImage(this.image, -(this.image.width / 2), -(this.image.height / 2));
            ctx.context.restore();
        }
    }

}



module.exports = {
    ctx: ctx,
    sprite: sprite
}
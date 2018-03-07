var obj = require('./getall');
var sprite = require('./sprite');


var ctx = {
    canvas: null,
    context: null,
    create: function(canvas_tag) {
        this.canvas = document.getElementById(canvas_tag);
        this.context = this.canvas.getContext('2d');
        return this.context;

    }
}



module.exports = ctx;
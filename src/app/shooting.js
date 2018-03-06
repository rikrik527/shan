var obj = require('./getall');

module.exports.shooting = function() {
    var canvas = obj.getId('shooting');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    this.arc = function(x, y, radius, start, end) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.start = start;
        this.end = end;
        ctx.arc(x, y, radius, start, end);
    }

    function crossHair() {
        ctx.beginPath();
        arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
        ctx.lineTo()
    }
}
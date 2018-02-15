var obj = require('./getall');

module.exports.setGame = function() {
    var canvas = null,
        context = null,
        img = null;
    var assets = ['r1.png', 'r2.png', 'r3.png', 'r4.png', 'r5.png', 'r6.png', 'r7.png', 'r8.png', 'r9.png', 'r10.png', 'r11.png'];
    var frameRate = 1000 / 30,
        frame = 0,
        frames = [];
    var setup = function() {
        var shanBtn = obj.get('.shan-btn');
        canvas = obj.getId('canvas');
        context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for (var i = 0; i < assets.length; i++) {
            frames.push(new Image());
            frames[i].src = assets[i];
            frames[i].onload = onImageLoad;
            console.log(frames[i]);
        }
        setInterval(animate, frameRate);

    };
    var onImageLoad = function() {
        console.log('image');

    };
    var animate = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(frames[frame], 192, 192);
        frame = (frame + 1) % frames.length;
    }
    setup();
}
var obj = require('./getall');
module.exports.setGame = function() {
    var canvas = null,
        context = null,
        img = null;
    var assets = ['../images/r1.png', '../images/r2.png', '../images/r3.png', '../images/r4.png', '../images/r5.png', '../images/r6.png', '../images/r7.png', '../images/r8.png', '../images/r9.png', '../images/r10.png', '../images/r11.png'];
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
        context.drawImage(frames[assets], 192, 192);
        frame = (frame + 1) % frames.length;
    }
    setup();
}
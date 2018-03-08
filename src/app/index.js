require('../sass/app.scss');

var todo = require('./todo');
var $ = require('jquery');
var prologue = require('./prologue');
var add = require('./addAbility');
var obj = require('./getall');
var fix = require('./fix');
var object = require('./object');
var shanLi = require('./shanStatus');
var speech = require('./speech');
var shan = require('./shanConversation');
var say = require('./say');
var sourceUrl = ["//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"];
var location = require('./location');
var awake = require('./spa');
var xsMenu = require('./xsMenu');
var gametest = require('./gametest');
var ctx = {
    canvas: null,
    context: null,
    create: function(canvas_tag) {
        console.log(this.canvas, this.context);
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

window.onload = function() {

    //initialize canvas

    // ctx.create('canvas');
    console.log('yes finished jquery')
    var wall = require('../images/background-rock.png');


    // var image = new sprite(wall, false);
    // var pattern = new sprite(wall, true);
    // var angle = 0;
    // setInterval(function() {
    //     ctx.context.fillStyle = 'black';
    //     ctx.context.fillRect(0, 0, 800, 800);
    //     image.draw(0, 0, 64, 64);
    //     image.draw(0, 74, 256, 32);
    // }, 25)






    prologue.slides();






    // (function() {
    //     awake.canvas.octagon();
    // })();

    // awake.shanLiAwaken.story();
    fix.robot();

    fix.robotMenu();
    fix.topMenu();
    fix.arrows();
    fix.music();
    fix.talkToYuShan();
    shan.talk.talkingDialog();


    xsMenu.toggleXsmenu();

    xsMenu.gameMenu();
}




timerIncrease();
var idleTime = 0;
document.onmousemove = function() {

    clearInterval(timerIncrease);
    idleTime = 0;
};
document.onkeypress = function() {
    clearInterval(timerIncrease);
    idleTime = 0;
};
document.ontouchstart = function() {
    clearInterval(timerIncrease);
    idleTime = 0;

};
document.ontouchend = function() {

}
document.onmousedown = function() {

}
document.onmouseup = function() {

}

function timerIncrease() {
    console.log(idleTime);
    idleTime += 1;
    if (idleTime > 30) {

        setTimeout(function() {
            shan.talkBot.createLi();
        }, shan.talkBot.random(5000));

    }

};
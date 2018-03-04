import { talkBar } from './fix';

require('../sass/app.scss');

var todo = require('./todo');
var $ = require('jquery');
var prologue = require('./prologue');
var add = require('./addAbility');
var obj = require('./getall');
var fix = require('./fix');
var object = require('./object');
var shanLi = require('./shanStatus');

var shan = require('./shanConversation');
var say = require('./say');
var sourceUrl = ["//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"];
var location = require('./location');
var awake = require('./spa');
var xsMenu = require('./xsMenu');
var gametest = require('./gametest');
var robot = require('./robot');

window.onload = function() {


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
require('../sass/app.scss');
import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from '../component/search_bar';

const API_KEY = 'AIzaSyBFSDdU03uRqcU7QWNXV966pf1HJVJqxLE';

var update = require('./update');
var helper = require('./helperFunction');
var robotMenu = require('./robotMenu');
var todo = require('./todo');
var $ = require('jquery');
var prologue = require('./prologue');
var add = require('./addAbility');
var obj = require('./getall');
var fix = require('./fix');
var object = require('./object');
var shanLi = require('./shanStatus');
var speech = require('./speech');

var say = require('./say');
var sourceUrl = ["//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"];
var location = require('./location');
var awake = require('./spa');
var shan = require('./shanConversation');
var gametest = require('./gametest');
var ctx = require('./context');
var sprite = require('./context');
var shanli = require('./shanLiAct');








window.onload = function() {


    switch (document.readyState) {
        case "loading":document.querySelector('.loading-line').innerHTML = 'now loading';


          break;
        case "interactive":
          // The document has finished loading. We can now access the DOM elements.
         obj.get('.loading-progress').style.transition = 'all 1s linear';
         obj.get('.loading-progress').style.width ='100px';



          break;
        case "complete":
          // The page is fully loaded.

              document.querySelector('.loading').style.display = 'none';

          console.log('loaded');
          (function(){
              console.log('iffe')
           var robotOutLine = obj.get('.robot-outline');
           robotOutLine.id = 'robot-shake';
          })();
          robotMenu.addDiv('robot-1000','#robot');
          prologue.slides();






    // (function() {
    //     awake.canvas.octagon();
    // })();

    // awake.shanLiAwaken.story();

    // fix.robot();
robotMenu.robotFlyDown();
    // fix.robotMenu();
    // fix.topMenu();
    // fix.arrows();
    // fix.selectMusic();
    // fix.talkToYuShan();
    shan.talk.talkingDialog();
    robotMenu.fightList();
    fix.updates();
robotMenu.init();
robotMenu.robotEStatus();
robotMenu.iconRobotFix();
robotMenu.iconRobotPersonal();
robotMenu.topMenu();
robotMenu.submit();
robotMenu.todoIconSlider();
helper.updateLi.call(update);


fix.robotDead();

console.log('load end')

          break;
      }

    //initialize canvas

    // ctx.ctx.create('canvas');
    // console.log('yes finished jquery')
    // var wall = require('../images/background-rock.png');


    // var image = new sprite.sprite(wall, false);
    // var pattern = new sprite.sprite(wall, true);
    // var angle = 0;
    // setInterval(function() {
    //     ctx.context.fillStyle = 'black';
    //     ctx.context.fillRect(0, 0, 800, 800);
    //     image.draw(0, 0, 64, 64);
    //     image.draw(0, 74, 256, 32);
    // }, 25)







};
window.onresize = function() {

}

fix.add('circle', 'div', 'circle', obj.get('.shan-btn'))
fix.add('number', 'div', 'number', obj.getId('shan-li'));
fix.add('robotNum','div','robot-number',obj.getId('robot'));
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



    }
}

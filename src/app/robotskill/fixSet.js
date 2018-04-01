// fixset is depandancy for robotmenu.submitBtn, its a skill set function for robot

var obj = require('../getall');
var requestAnimationFrame = require('../requestAnimationFrame');
var transform = require('../transform');
var transition = require('../transform');
var robotMenu = require('../robotMenu');

var robot = obj.get('#robot');
var crossHair = obj.get('.cross-hair');
var fireball = obj.get('.fireball');
var fire = false;
var ready = false;

module.exports.crossFire = function(){

infinityLoopAnimation('robot-cross-get','robot-cross-charging',3000);
console.log('crossfire ready',ready);
if(ready){
    console.log('ready');
    shootLove();
}

console.log('infiniteloopanimation');
}

//infiniteloopanimation is a decorate class function
function infinityLoopAnimation(cls,cls2,time){
    //first class is robot charging stance second paremeter is charging stance infinite loop , it stops depands on user action ,this.fire is a boolean on everyskill robot have ,it return to false when skill is fired, its default is false,
    console.log('infiniteloopanimation is fired')
    robot.removeAttribute('class');
    robot.classList.add(cls);
setTimeout(()=>{
    ready = true;
    robot.classList.remove(cls);
    robot.classList.add(cls2);
    console.log('readysetimeout',ready)
},time);
setTimeout(()=>{
    console.log('ready',ready)
},10000);
// if(fire){
//     console.log('fired');
//     robot.classList.remove(cls);
//         robot.classList.add(cls2);

// }





}
var mouseDown = false;
var touchDown = false;
var lastpostion = [null,null];
var position = [0,0];
// set the crossfire fireball position
function shootLove(){
    fire = true;//fire set to true

    var fireball = obj.get('.fireball');
    var crossHair = obj.get('.cross-hair');
    $('.cross-hair').css('display','block');
    $('.fireball').css('display','block');
    $('.cross-hair').on('mousedown touchstart',function(e){   touchDown = true;
        var touch = targetTouches;
    });
    $('.cross-hair').on('mouseup touchend',function(e){
        touchDown = false;
    });
    $('.cross-hair').on('mousemove touchmove',function(e){
       if(!touchDown){
           return false;
       }
       var touched = e.changedTouches[0];
       var changeX = 0;
       var changeY = 0;
       if(lastpostion[0]){
         console.log(lastpostion[0]);
         changeX = (lastpostion[0] - e.clientX);
         if(Math.abs(changeX)>20){
             changeX = 0;
         }
       }
       if(lastpostion[1]){
        console.log(lastpostion[1]);
        changeX = (lastpostion[1] - e.clientX);
        if(Math.abs(changeX)>20){
            changeX = 0;
        }
      }
       lastpostion = e.clientX;
       position[0] -= changeX;
       crossHair.style.cssText = 'left'+(position[0]-25)+'px;top:'+(position[1]-25)+'px';

    });

}
function setCrossFireballPos(){
    console.log('setcrossfireballpos')
    var robot = obj.getId('robot');
    var fireball = obj.get('.fireball');
    var crossHair = obj.get('.cross-hair');
    fireball.style.display = 'block';
    crossHair.style.display = 'block';
    var rx = robot.getBoundingClientRect().x + robot.offsetWidth / 2;
    var ry = robot.getBoundingClientRect().y + robot.offsetHeight / 2;
    console.log('rx', rx, 'ry', ry);
    return (function () {
        console.log('crossfireballpos returned')
        fireball.style.left = rx + 'px';
        fireball.style.top = ry + 'px';
        crossHair.style.left = rx+'px';
        crossHair.style.top = ry+'px';
        console.log('left', window.getComputedStyle(fireball).getPropertyValue('left'), 'top', window.getComputedStyle(fireball).getPropertyValue('top'));
})()
}
// fixset is depandancy for robotmenu.submitBtn, its a skill set function for robot

var obj = require('../getall');
var requestAnimationFrame = require('../requestAnimationFrame');
var transform = require('../transform');
var transition = require('../transform');
var robotMenu = require('../robotMenu');

var robot = obj.get('#robot');
var crossHair = obj.get('.cross-hair');
var fireball = obj.get('.fireball');


module.exports.crossFire = function(){
setCrossFireballPos();
infinityLoopAnimation.call(robotMenu,'robot-cross-get','robot-cross-ready');
}
//infiniteloopanimation is a decorate class function
function infinityLoopAnimation(cls,cls2){
    //first class is robot charging stance second paremeter is fired stance and after 2 seconds fired stance will be removed ,this.fire is a boolean on everyskill robot have ,it return to false when skill is fired, its default is false,
    console.log('infiniteloopanimation is fired')
    robot.removeAttribute('class');
    robot.classList.add(cls);
    console.log('infiniteloopanimation add',cls,'robot-getreaady',this.getReady);
    if(this.getReady == true){
        console.log('fired',this.getReady);
        robot.classList.remove(cls);
        robot.classList.add(cls2);
        setTimeout(()=>{ //removing class after 2 seconds
            robot.classList.remove(cls2);
        },2000)
    }
}
// set the crossfire fireball position
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
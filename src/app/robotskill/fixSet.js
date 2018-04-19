// fixset is depandancy for robotmenu.submitBtn, its a skill set function for robot

var obj = require('../getall');
var requestAnimationFrame = require('../requestAnimationFrame');
var transform = require('../transform');
var transition = require('../transform');
var robotMenu = require('../robotMenu');
var helper = require('../helperFunction');
var robot = obj.get('#robot');
var crossHair = obj.get('.cross-hair');
var fireball = obj.get('.fireball');
var fire = false;
var ready = false;

module.exports.crossFire = function(){

infinityLoopAnimation('robot-cross-get','robot-cross-charging',3000);
console.log('crossfire ready',ready);
setTimeout(() => {
    console.log('ready after 10 ',ready);
}, 3500);
setTimeout(() => {
    if(ready){
        console.log('ready');
        shootLove();
    }
}, 11000);


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
    console.log('ready',ready);
    fire = true;//fire set to true
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
    console.log('shoot love is ready',fire);



    var fireball = obj.get('.fireball');

    var crossHair = obj.get('.cross-hair');
    var robotOutline = obj.get('.robot-outline');
    var rtop = window.getComputedStyle(robotOutline).getPropertyValue('top');
    fireball.style.top = parseInt(rtop)*1.5+'px';
    window.onresize = function(){
        var rtop = window.getComputedStyle(robotOutline).getPropertyValue('top');
    fireball.style.top = parseInt(rtop)*1.5+'px';
    }
    helper.description('.cross-hair','.description');

    $('.cross-hair').css('display','block');
    $('.fireball').css('display','block');
    var click = 0;
    crossHair.onclick = function(){
        console.log('cross clicked');
        click++
        return (function(){
            if(!fire){
                return false;
                console.log('fire is false');
            }
            if(click == 10) fire = false;

            console.log(click);
            var fireball = obj.get('.fireball');
        var shanLiOutline = obj.get('.shanli-outline');
        var shanLeft = window.getComputedStyle(shanLiOutline).getPropertyValue('left');
        var shanTop = window.getComputedStyle(shanLiOutline).getPropertyValue('top');
        fireball.style.left = shanLeft;
        fireball.style.top = shanTop;
        setTimeout(() => {
            fireball.parentNode.removeChild(fireball);
            var div = obj.create('div');
            div.className = 'fireball';
            var shanBtn = obj.get('.shan-btn').appendChild(div);

        }, 50);

        console.log('clicked',click)
    })();
    };


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
require('../sass/_main.scss');
var $ = require('jquery');
var obj = require('./getall');
var transform = require('./transform');
var transition = require('./transform');
var requestAnimationFrame = require('./requestAnimationFrame');
var judo = require('../main/components/judoAct');

var shanLi = require('../main/components/shanLiAct');
var samurai = require('../main/components/samuraiAct');

var beast = require('../main/components/beastAct');
var nopo = require('../main/components/nopoAct');

var crazy = require('../main/components/crazyAct');
var magic = require('../main/components/magicAct');
var hands = require('../main/components/hands');
var canvas = require('./canvas');
window.onload = function () {
    switch (document.readyState) {
        case "loading":
            document.querySelector('.loading');
            break;
        case "interactive": // add methods here
            break;
        case "complete":
            document.querySelector('.loading').style.display = 'none';
            console.log('loaded');

            if ($(window).width() > 400) {
                // add large screen function
                hands.original();

                // var id = setInterval(function(){
                //     for(var i  = 0; i < 10;i++){
                //     x = cw/2;
                //     y = 0;
                //     d = 1.5;
                //     y += d* i;
                //     ctx.fillStyle = 'red';
                //     ctx.clearRect(0,0,cw,ch);
                //     ctx.arc(x,y,3,0,Math.PI*2);
                //     ctx.fill();
                //     console.log('fill')
                //     if(y > ch){
                //     y = 0;}
                //     }},20);




                judo.judoAppear();
                judo.judoProfile();
                shanLi.shanAppear();

                shanLi.shanProfile();
                crazy.crazyAppear();
                crazy.crazyProfile();
                beast.beastAppear();
                beast.beastProfile();
                samurai.samuraiAppear();
                // samurai.samuraiProfile();
               samurai.circle();

                magic.magicAppear();



            } else {
                // add small screen javascript
                hands.original();

                $('.btn-pos2').on('click', function () {
                    alert('雨珊,你好不好?每一天.....只想你!!羞');
                    setTimeout(() => {
                        window.location.href = './shan.html';
                    }, 3000);

                })



                judo.judoAppear();
                judo.judoProfile();
                shanLi.shanAppear();
                shanLi.shanProfile();
                crazy.crazyAppear();
                crazy.crazyProfile();
                beast.beastAppear();
                beast.beastProfile();
                samurai.samuraiAppear();
                // samurai.samuraiProfile();
                samurai.circle();



                magic.magicAppear();



            }
    }
}




var idleTime = 0;
document.onmousemove = function () {

    clearInterval(timerIncrease);
    idleTime = 0;
};
document.onkeypress = function () {
    clearInterval(timerIncrease);
    idleTime = 0;
};
document.ontouchstart = function () {
    clearInterval(timerIncrease);
    idleTime = 0;

};
document.ontouchend = function () {

}
document.onmousedown = function () {

}
document.onmouseup = function () {

}

function timerIncrease() {
    idleTime += 1;
    if (idleTime > 30) {
        // shanTalking.shanTalking();
        if (shanTalking) {
            idleTime = 0;
        }
    }

}

// function rain(){

// var ctx = obj.getId('canvas').getContext('2d');
// var shanBtn = obj.get('.shan-btn');
// var cw = ctx.canvas.width ;
// var ch = ctx.canvas.height ;
// cw = window.innerWidth;
// ch = window.innerHeight;
// var flakes = [];
// function addFlaskes(){
//     var x = Math.floor(Math.random()*cw)+1;
//     var y = 0;
//     var s  = Math.floor(Math.random()* 3 )+1;
//     flakes.push({
//         'x':x,
//         'y':y,
//         's':s
//     })
// }
// function rainrain(){
//     addFlaskes();
//     for(var i = 0;i < flakes.length;i++){
//         ctx.fillStyle = 'rgba(255,255,255,.7)';
//         ctx.beginPath();
//         ctx.arc(flakes[i].x,flakes[i].y,flakes[i].s*5,0,Math.PI*2,false);
//         ctx.fill();
//         if(flakes[i].y > ch){
//             flakes.splice(i,1);

//         }
//     }
// }
// function animate(){
//     ctx.clearRect(0,0,cw,ch);
//     rainrain();

// }
// var animateRain = setInterval(animate,30);
// }
// rain();

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


hands.original();



var idleTime = 0;
document.onmousemove = function(){

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
    document.ontouchend = function(){

    }
    document.onmousedown = function(){

    }
    document.onmouseup = function(){

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

$('.btn-pos2').on('click',function(){
    alert('雨珊,你好不好?每一天.....只想你!!羞');
    setTimeout(() => {
        window.location.href = './shan.html';
    }, 3000);

})
judo.judoAppear();
judo.judoBio();
crazy.crazyAppear();
crazy.crazyProfile();
shanLi.shanAppear();
shanLi.shanProfile();

magic.magicAppear();
beast.beastApear();

beast.beastProfile();


samurai.samuraiAppear();

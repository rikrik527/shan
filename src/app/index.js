require('../sass/app.scss');

var todo = require('./todo');
var $ = require('jquery');
var prologue = require('./prologue');
var add = require('./addAbility');
var obj = require('./getall');

var object = require('./object');
var shanLi = require('./shanStatus');

var shan = require('./shanConversation');
var say = require('./say');
var sourceUrl = ["//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"];
var location = require('./location');
var awake = require('./spa');
var xsMenu = require('./xsMenu');
window.onload = function() {


        prologue.slides();

        awake.script.addScript(sourceUrl[0]);

        awake.call.shanAppear();

        awake.image.show();

        (function() {
            awake.canvas.octagon();
        })();

        // awake.shanLiAwaken.story();
        awake.command.nameSvg();

        awake.shanLiAwaken.title();
        shan.talk.talkingDialog();
        setTimeout(() => {
            shan.talk.createLi.call(shanLi, Math.floor(Math.random() * Date.now()), Math.floor(Math.random() * Date.now()));
        }, 3000);

        xsMenu.toggleXsmenu();
        add.parts();
        awake.button.select('.awake').onclick = function() {
            console.log('clicked')
            if (awake.command.awakeFirst().style.top == "-100%") {
                console.log('its -100%');
            } else {
                awake.command.awakeFirst().style.top = '0%';
            }
            console.log('yesyeysyeysyeysyeyes');
        }
        awake.button.select('.prologue').onclick = function() {
            console.log('yesyeysyeysyeysyeyes');
        };
        awake.button.select('.location').onclick = function() {
            console.log('yesyeysyeysyeysyeyes');
        };
        awake.button.select('.epilogue').onclick = function() {
            console.log('yesyeysyeysyeysyeyes');
        };



    }
    // awake.app.calendarApp();
var btn = obj.get('.btn-next');


var btnBack = obj.get('.btn-back');


var click = 1;
btn.onclick = (function() {
    if (click = 4) click = 1;
    return function() {
        switch (click) {
            case 1:
                awake.command.awakeFirst().classList.add('rotatey');
                console.log(click);
                break;

            case 2:
                awake.command.prologue().classList.add('rotatey');
                console.log(click);
                break;
            case 3:
                awake.command.location().classList.add('rotatey');
                console.log(click);
                break;
            case 4:
                awake.command.epilogue().classList.add('rotatey');

                console.log(click);
                break;
        }
        click++;
    }
})();
btnBack.onclick = (function() {

    if (click = 1) click = 4;
    return function() {
        switch (click) {
            case 1:
                awake.command.epilogue().classList.add('rotateyback');

                console.log(click);




                break;

            case 2:
                awake.command.location().classList.add('rotateyback');
                console.log(click);

                break;
            case 3:
                awake.command.prologue().classList.add('rotateyback');
                console.log(click);

                break;
            case 4:
                awake.command.awakeFirst().classList.add('rotateyback');
                console.log(click);

                break;
        }
        click--;
    }
})();


// window.onresize = function() {
//     awake.canvas.resize();
// }
// awake.canvas.arc(50, 10, 50, 0, Math.PI / 180);




// window.onscroll = function(){
//     var mainBc = obj.get('.main-boxcontrol');
//     var extend = "<div class='extend'></div>";
//     if(mainBc.clientHeight > window.innerHeight){
//         console.log('oh yes its true');
//         mainBc.innerHTML += extend;
//     }
// }
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





var iframeProperty = ['allow-forms', 'allow-modals', 'allow-orientation-lock', 'allow-pointer-lock', 'allow-popups', 'allow-popups-to-escape-sandbox', 'allow-presentation', 'allow-same-origin', 'allow-scripts', 'allow-top-navigation', 'allow-top-navigation-by-user-activation'];
// var iframe = obj.get('.iframe');


// var darkShadow = iframe.contentWindow.document.querySelector('.shan-li-boxcontrol');
// var x = document.importNode(darkShadow, true);
// obj.get('shan-btn').appandChild(x);
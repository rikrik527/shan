var obj = require('./getall');
var requrestAnimationFrame = require('./requestAnimationFrame');
var Hammer = require('hammerjs');
var speech = require('./speech');
var memories = require('../audio/memories.mp3');
var epic = require('../audio/epic.mp3');
var robotFix = require('./skill');
var wind = require('../audio/b1.wav');
var robotmove = require('../audio/robotmove.wav');
var gameover = require('../audio/gameover.wav');
var fire1 = require('../audio/fire1.wav');
var charging = require('../audio/charging.wav');
var electric = require('../audio/electric.mp3');
var explosion = require('../audio/explosion.mp3');
var explosion2 = require('../audio/explosion2.mp3');
var arrow = require('../audio/arrow.mp3');
var missle = require('../audio/missle.mp3');
var helper = require('./helperFunction');
var update = require('./update');
var transform = require('./transform');
var transition = require('./transform');
var tocca = require('tocca');





var iconTodo = obj.get('.icon-todo');
var robotOutLine = obj.get('.robot-outline');
var robot = obj.getId('robot');
var robotE = obj.get('.robot-energy-bar');
var robotEnergy = 100;
robotE.style.width = robotEnergy + 'px';
console.log('robotE is style 100px');


module.exports.robotMenu = function () {
    var iconPersonal = obj.get('.icon-personal'),
        iconService = obj.get('.icon-service'),
        iconFix = obj.get('.icon-fix'),
        iconSubmit = obj.get('.icon-submit'),
        robotOutLine = obj.get('.robot-outline'),
        robot = obj.getId('robot'),
        robotSaying = obj.get('.robot-saying'),
        robotSpeak = obj.get('.robot-speak'),
        robotTriangle = obj.get('.robot-triangle'),
        robotEnergyBar = obj.get('.robot-energy-bar'),
        gameActionOutline = obj.get('.game-action-outline'),
        todoList = obj.get('.todo-list'),
        iconClose = obj.get('.icon-close-todo'),
        todoIcon = obj.get('.todo-icon'),
        todoTitle = obj.get('.todo-title'),
        resetBtn = obj.get('.reset-btn'),
        submitBtn = obj.get('.submit-btn'),
        todoIconSlide = obj.get('.todo-icon-slide'),
        pos = obj.get('.pos'),
        pos1 = obj.get('.pos1'),
        pos2 = obj.get('.pos2'),
        pos3 = obj.get('.pos3'),
        gameAction = obj.get('.game-action'),
        awakeSecond = obj.get('.awake-second-section');

    iconFix.onclick = (function () {
        var click = 0;
        return function () {
            click++;
            if (click == 3) click = 1;
            switch (click) {
                case 1:
                    todoList.style.display = 'block';
                    todoList.classList.add('todolistshow');
                    iconFix.style.cssText = 'transform:scale(1.5)';

                    break;
                case 2:
                    todoList.style.display = 'none';
                    todoList.classList.remove('todolistshow');
                    iconFix.style.cssText = 'transform:scale(1)';
                    break;
            }
        }

    })();
    $('.icon-personal').on('click',(function(){
        var click = 0;
        console.log('iconperosonal clicked')
        return function(){
            console.log('iconp clicked')
            click++
            if(click == 3) click = 1;
            switch(click){
              case 1: robot.removeAttribute('class');
              robot.setAttribute('class','robot-repair-to-fight-instance');
              talk('戰鬥模式已經啟動',3000);
        setTimeout(() => {
                  robot.classList.remove('robot-repair-to-fight-instance');
                  robot.classList.add('robot-fight-instance');

                  talk('幹你娘的!雨珊!你看!我把戰鬥力提高了二十倍!夠屌吧我的造型!媽呀!這個力量已經超過我本身能控制的程度了!',3000);
                  console.log('paralax have been excuted');

              }, 4000);


              break;
              case 2: robotOutLine.style.left = '11%';
              awakeSecond.style.left = '100%';
              awakeSecond.style.zIndex = '9';

              break;
            }
        }
    })());

 function paralax(){
     console.log('paralax actived');
    var back4 = obj.get('.background-4');
    var back = obj.get('.background');
var back3  = obj.get('.background-3');
    var robotOutLine = obj.get('.robot-outline');
    var fly = 11;
    var ba = 0;
    return (function(){
        console.log('returned');
        var id = setInterval(function(){
            console.log('setinterval',fly,ba);
            fly ++;
            ba --;
            back4.style.right = fly/2+'%';
            robotOutLine.style.left = fly +'%';
            back.style.transform = 'translatex('+ba +'px)';
            back3.style.transform = 'translatex('+fly/2+'px)';

            if(fly >= 130){
                clearInterval(id);
                console.log('cleared');
            }
            console.log('runing')
        },50);



    })();
 }


}



module.exports.topMenu = function () {
    var crossHair = obj.get('.cross-hair');
    crossHair.style.display = 'none';
    var touchBc = obj.get('.touch-boxcontrol');

    var loveEnergyy = false;
    (function () {
        var excute = 0;
        return function(){
        excute++
            console.log('excute',excute)
        var robotEnergyBar = obj.get('.robot-energy-bar');
        if (window.getComputedStyle(robotEnergyBar).getPropertyValue('width') == '0px') {
            console.log('its over');
            robotDead();

        } else {
            console.log('robotEnergyBar');
        }}
    })();

    var hands = obj.getAll('.hands0,.hands1, .hands2, .hands3, .hands4, .hands5, .hands6, .hands7, .hands8, .hands9');
    hands[0].onclick = (function () {
        var love = 0;
        return function () {
            love++;
            if (love == 3) love = 1;
            switch (love) {
                case 1:
                    loveEnergy();
                    loveEnergyy = true;
                    console.log('case1',loveEnergyy)
                    break;
                case 2:
                    removeLoveEnergy();
loveEnergyy = false;
console.log('case2',loveEnergyy);
                    break;
            }
        }


    })();

    var love = '愛的弓箭';
    var submit = false;


    var bigWords = obj.get('.big-words');
    bigWords.style.display = 'none';

    function removeLoveEnergy() {
        console.log('removing love')
        submit = false;
        var li = obj.get('.outside');
        li.parentNode.removeChild(li);
    }
    var submitBtn = obj.get('.submit-btn').onclick = function () {
        if (!submit) {
            return false;
            console.log('not gonna happen');
        }
        if(submit){
            console.log('submitted');
            obj.get('.todo-list').style.display = 'none';
            var robot = obj.getId('robot');
            robot.classList.remove('robot-change');
        }
        if(loveEnergyy){

            console.log('its love enerygy');
            var iconFix = obj.get('.icon-fix');
            iconFix.style.transform = 'scale(1)';

            loveEnergy();
            loveBomb.call(robotFix, 0);
            console.log('lovebomb');
            setTimeout(function () {
                loveSparrow();
                console.log('fire')
            }, 7000)
            removeLoveEnergy();
        }









    }



    function loveBomb(arr) {

        console.log('lovebomb')
        var shanLi = obj.get('.shanli-outline');



        var robot = obj.get('#robot');
        var bigWords = obj.get('.big-words');
        bigWords.style.display = 'none';
        setTimeout(() => {
            bigWords.style.display = 'block';
            bigWords.classList.add('leftright');
            bigWords.textContent = this.skill[arr];
            speech(this.skill[arr])
        }, 2000);

        setTimeout(() => {
            bigWords.classList.remove('leftright');
            console.log('remove leftright');
        }, 3000);

        setTimeout(() => {
            robot.classList.add('robot-cross');
            console.log('robot-cross')
            talkBar('愛的弓箭啟動', 4000);
        }, 4000);
        setTimeout(function () {
            robot.classList.remove('robot-cross');
            console.log('remove robot-cross')


        }, 7000);
    }

    function talkBar(robotTalk, time) {
        var robotSaying = obj.get('.robot-saying');
        robotSaying.style.display = 'block';
        var div = obj.create('div');
        div.classList.add('robot-speak');
        robotSaying.appendChild(div);

        speech(robotTalk);
        div.innerHTML = robotTalk;


        setTimeout(() => {
            div.parentNode.removeChild(div);
            robotSaying.style.display = 'none';
            robot.removeAttribute('class');
        }, time);
    }

    function loveSparrow() {
        getFireballPos();
        $('.cross-hair').css('display','block');
        console.log('loveSparrow have been activeted')
        var robot = obj.getId('robot');
        var handle1 = obj.get('.handle1');


        robot.style.transition = 'all .5s linear';


        var fireball = obj.get('.fireball');

        var shanLiOutline = obj.get('.shanli-outline');


        var isDown = false;
        var getShan = false;
        var lastposition = [null,null];
        $('#robot').addClass('robot-cross-set')
        document.ontouchmove = function(e){
            if(!isDown){
                return false;
            }
            crossHairDetection();
            fireballCollision();

                var crossHair = obj.get('.cross-hair');


            var touches = e.targetTouches[0];

            crossHair.style.cssText = 'left:'+(touches.clientX-25)+'px;top:'+(touches.clientY-25)+'px';
            var click  = 0;
            $('.cross-hair').on('click',function(e){
                click++;
                if(click == 3)click = 1;
                switch(click){
                    case 1:$('.touch-boxcontrol').css('display','block');
                    console.log('what is touch')
                    case 2:$('.touch-boxcontrol').css('display','none');
                    console.log('what is touch not')
                }
                if(e.id == 'shan-li'){
                    console.log('gotit');
                    getShan = true;
                    crossHair.classList.add('crosshair')
                    touchBc.style.transition ='all 1s linear'
            touchBc.style.display = 'block';
                }else{
                    crossHair.classList.remove('crosshair');
                }
                if(getShan){
                    console.log('getShan');
                   crossHair.style.left = window.getComputedStyle(shanli).getPropertyValue(
                       'left'
                   );
                   crossHair.style.top = window.getComputedStyle(shanli).getPropertyValue('top');
                }

            })

            console.log(touches.clientX,touches.clientY);}
            document.onmousemove = function(e){
            if(!isDown){
                return false;
                console.log('is not down')
            }   crossHairDetection();
                fireballCollision();
                var shanli = obj.getId('shan-li');
                var crossHair = obj.get('.cross-hair');


                crossHair.style.cssText = 'left:'+(e.clientX-25)+'px;top:'+(e.clientY-25)+'px';
                console.log(e.clientX,e.clientY,crossHair);

               crossHair.onclick = (function(e){
                var click = 0;
                return function(){
                click++;


                    if(click == 3)click = 1;
                    console.log('corss clicked',click)
                    switch(click){
                        case 1:var touchBc = obj.get('.touch-boxcontrol');touchBc.style.display = 'block';
                        console.log('what')
                        case 2:var touchBc = obj.get('.touch-boxcontrol');
                        touchBc.style.display = 'none';
                        console.log('what what')
                    }}})();
                    if(e.id == 'shan-li'){
                        console.log('gotit');
                        getShan = true;
                        crossHair.classList.add('crosshair')
                        touchBc.style.transition ='all 1s linear'
                touchBc.style.display = 'block';
                    }else{
                        crossHair.classList.remove('crosshair');
                    }
                    if(getShan){
                        console.log('getShan');
                       crossHair.style.left = window.getComputedStyle(shanli).getPropertyValue(
                           'left'
                       );
                       crossHair.style.top = window.getComputedStyle(shanli).getPropertyValue('top');
                    }


            }
            $('.cross-hair').on('mousedown',function(e){
                  isDown = true;
                  if(e.target.className =='cross-hair'){
                      console.log('got crosshair')

                  }
            })
            $('.cross-hair').on('touchstart',function(e){
                isDown = true;
                var touch = e.touches[0];
                if(touch.target.className =='cross-hair'){
                    console.log('got crosshair')

                }
          });
          $('.cross-hair').on('mouseup',function(e){
            isDown = false;
            console.log('mouse is up')

      })
      $('.cross-hair').on('touchend',function(e){
        isDown = false;
        console.log('touch is up');

  })


        $('.handle4').on('pointerdown mousedown touchstart', function () {

            shootOut();
            setTimeout(() => {

                console.log('after 2 seconds this been excuted');
                var fireball = obj.get('.fireball');
                fireball.parentNode.removeChild(fireball);
                var div = obj.create('div');
                var shanBtn = obj.get('.shan-btn');
                div.className = 'fireball';
                shanBtn.appendChild(div);
                console.log('fireball is ready');

            }, 1000);
        })
$('.handle1').on('click',function(){
    console.log('clicked handle1')
    var power = 0;
    return function(){
      power++
      console.log('power',power);
      $('.power').val(power);
      $('.handle4').on('click',function(){
          console.log('handle4',power);
      })
    }
});


        function shootOut() {
robot.classList.add('robot-cross-ready');
            var fireball = obj.get('.fireball');
            fireball.style.display = 'block';
            for (var i = 0; i < 10; i++) {
                var div = obj.create('div');
                div.className = 'ball' + i;
                fireball.appendChild(div);
                console.log(div)
            }
            robotEnergy -= 10;
            console.log('shooting');


            setTimeout(() => {
                robot.classList.remove('robot-cross-ready');

            }, 1000);


            shoot = setInterval(fireshoot, 50);

            function fireshoot() {
                // fireball.style.left = fleft + '%';
                // fireball.style.top = ftop + '%';
                fireball.style.transform = 'rotatez(' + deg + 'deg)translate(' + speed + 'px' + ',' + speed + 'px)';

            }
            var get = function get(ele, attr) {
                return parseInt(ele.style[attr], 10);
            }

            console.log(fleft, ftop, 'window', window.innerWidth, window.innerHeight)


            console.log(get(fireball, 'width'), get(fireball, 'height'))
            fireballCollision();

            robotE.style.width = robotEnergy + 'px';
            robot.style.transform = 'rotatez(0deg)';

        }


        var shanW = 0;

        var hit = false;
        var ex = 0;
        var lv = 0;

        function fireballCollision() {
            console.log('begin',hit);
            console.log('fireballdetection have been activeted')

            var fireball = obj.get('.fireball');
            var shanLi = obj.get('.shanli-outline');
            var value = 0;

            var fw, fh, fx, fy, sw, sh, sx, sy,cw,ch,cx,cy;
            fw = fireball.offsetWidth;
            fh = fireball.offsetHeight;
            fx = fireball.offsetLeft;
            fy = fireball.offsetTop;

            sw = shanLi.offsetWidth;
            sh = shanLi.offsetHeight;
            sx = shanLi.offsetLeft;
            sy = shanLi.offsetTop;
            console.log(fw, fh, fx, fy, sw, sh, sx, sy);
            if ((fx + fw) > sx && fx < (sx + sw) && (fy + fh) > sy && fy < (sy + sh)) {
                hit = true;
                var playerEx = obj.get('.player-experience');
                var robotNum = obj.get('.robot-number');
                ex += 10;
                playerEx.textContent = ex;
                robotNum.innerHTML = ex;

                var playerLv = obj.get('.player-level');

                switch (ex) {
                    case 100:
                        lv += 1;
                        playerLevel();
                        console.log('ex')
                    case 2000:
                        lv += 1;
                        playerLevel();

                }


                console.log('detected');
                shanW += 1;
                value -= 30;
                console.log(value, shanW);
                var number = obj.get('.number');
                var shanLiEb = obj.get('.shanli-energy-bar');
                shanLi.classList.add('shanliget');
                shanLiEb.style.width = shanW + 'px';
                number.style.display = 'block';
                number.innerHTML = window.getComputedStyle(shanLiEb).getPropertyValue('width').slice(0, 2);
                number.style.top = value + 'px';
                setTimeout(() => {
                    shanLi.classList.remove('shanliget');
                    number.style.display = 'none';
                }, 3000);



            }else{
                hit = false;
            }
            function playerLevel() {
                console.log('excuting playerlevel')
                var playerLv = obj.get('.player-level');
                var robotNum = obj.get('.robot-number');

                playerLv.innerHTML = lv;
                robotNum.innerHTML = '等級增加了' + lv;
                robotNum.style.top = value + 'px';
            }


console.log('end',hit)
        }
        var hit2 = false;
        function crossHairDetection(){
            var crossHair = obj.get('.cross-hair');
            var shanLi = obj.get('.shanli-outline');

            var cw,ch,cx,cy,sw,sh,sx,sy;
            cw = crossHair.offsetWidth;
            ch = crossHair.offsetHeight;
            cx = crossHair.offsetLeft;
            cy = crossHair.offsetTop;
            sw = shanLi.offsetWidth;
            sh = shanLi.offsetHeight;
            sx = shanLi.offsetLeft;
            sy = shanLi.offsetTop;
            console.log('active',cw,ch,cx,cy,sw,sh,sx,sy);


                if ((cx + cw) > sx && cx < (sx + sw) && (cy + ch) > sy && cy < (sy + sh)) {
                    hit2 = true;
                    console.log('hit crosshair',hit);
                    crossHair.classList.add('crosshair');
                }else{
                    hit2 = false;
                    crossHair.classList.remove('crosshair');
                }

            console.log('hit test',hit);
        }

    }


     function getFireballPos() {
        console.log('getfireballposition is active')
        var robot = obj.getId('robot');
        var fireball = obj.get('.fireball');
        var crossHair = obj.get('.cross-hair');
        var rx = robot.getBoundingClientRect().x + robot.offsetWidth / 2;
        var ry = robot.getBoundingClientRect().y + robot.offsetHeight / 2;
        console.log('rx', rx, 'ry', ry);
        return (function () {
            fireball.style.left = rx + 'px';
            fireball.style.top = ry + 'px';
            crossHair.style.left = rx+'px';
            crossHair.style.top = ry+'px';
            console.log('left', window.getComputedStyle(fireball).getPropertyValue('left'), 'top', window.getComputedStyle(fireball).getPropertyValue('top'));
        })();

    }


    function detecRect(el) {
        var rect = el.getBoundingClientRect();
        return (
            (rect.x + rect.width) < 0 || (rect.y + rect.height) < 0 || (rect.x > window.innerWidth || rect.y > window.innerHeight)
        )
    }



    var robotOutLine = obj.get('.robot-outline');

    var touchBc = obj.get('.touch-boxcontrol');

    var lastPosition = null;

    function robotDead() {
        // robot's energy bar is down to zero
        // its game over
        console.log('robot is dead');
        var audio = new Audio();
        audio.src = gameover;
        audio.play();
        var robot = obj.getId('robot');
        var iconEnergy = obj.get('icon-energy');
        var robotEnergy = obj.get('robot-energy');
        $('.robot-energy-bar .robot-energy .icon-energy').css('display', 'none');
        robot.removeAttribute('class');
        robot.setAttribute('class', 'robot-dead');
    }


    function loveEnergy() {

        //todolist add LI to todotitle called love
        //it only a function to appear skills
        submit = true;

        var todoTitle = obj.get('.todo-title');

        var li = obj.create('li');
        li.className = 'outside';

        todoTitle.appendChild(li);


        li.innerHTML = love;
        console.log('excuted');

        var outside = obj.get('.outside');
        outside.insertAdjacentHTML('afterbegin', '<span class="love"></span>');
        console.log('span')
    }


}
module.exports.robotDead = function () {

    var robot = obj.getId('robot');
    var iconEnergy = obj.get('icon-energy');
    var robotEnergy = obj.get('robot-energy');
    if($('.robot-energy-bar').css('width')=='0px'){
        console.log('robotdead');
        var audio = new Audio()|| new webkitAudio();
    audio.src = electric;
    audio.play();
    setTimeout(() => {
        var audio2 = new Audio()|| new webkitAudio();
        audio.src = explosion;
        audio2.play();
    }, 2000);
        $('.robot-energy-bar .robot-energy .icon-energy').css('display', 'none');
    robot.removeAttribute('class');
    robot.setAttribute('class', 'robot-dead');

    }

}

module.exports.arrows = function () {
    var hands = obj.getAll('.hands0,.hands1,.hands2,.hands3,.hands4,.hands5,.hands6,.hands7,.hands8,.hands9');
    for(var k = 0; k < hands.length; k++){
        hands[k].innerHTML = k;
    }
    var right = obj.get('.right');
    var left = obj.get('.left');

    var click = 0;
    var sleft = 0;
    var position = 0;
    var touchDown = false;
    var lastposition = null;
    var todoIcon = false;
    var mouseDown = false;
    document.onmousedown = function(event){
        mouseDown = true;

        console.log(event)
        if(event.target.className == 'hands0'||event.target.className == 'hands1'||event.target.className == 'hands2'||event.target.className == 'hands3'||event.target.className == 'hands4'||event.target.className == 'hands5'||event.target.className == 'hands6'||event.target.className == 'hands7'||event.target.className == 'hands8'||event.target.className == 'hands9'){
            console.log('todo-slide');
            todoIcon = true;
        }
    }

    document.ontouchstart = function(event){
        touchDown = true;
        var touch = event.targetTouches;
        console.log(touch)
        if(event.target.className == 'hands0'||event.target.className == 'hands1'||event.target.className == 'hands2'||event.target.className == 'hands3'||event.target.className == 'hands4'||event.target.className == 'hands5'||event.target.className == 'hands6'||event.target.className == 'hands7'||event.target.className == 'hands8'||event.target.className == 'hands9'){
            console.log('todo-slide');
            todoIcon = true;
        }
    }
    document.onmousemove = function(event){
        if(!mouseDown){
            return false;
        }


        if(todoIcon){
            console.log('todo-icon-slide');
            var todo = obj.getId('todo-icon-slide');
            var change = 0;
            if(lastposition){
                console.log(lastposition);
                change = (lastposition - event.clientX);

            }
            if(window.getComputedStyle(todo).getPropertyValue('left') <= '-250px'){
               console.log('smaller')
               var hands = obj.getAll('.hands0,.hands1,.hands2,.hands3,.hands4');
               for(var i = 0; i < hands.length; i++){
                   var hand = Object.assign(hands);
                   console.log(hand);
                   for(var j = 0; j < hands.length;j++){
                       hands[j].parentNode.removeChild(hands[j]);
                       console.log('removing',hands[j])
                       obj.getId('todo-icon-slide').appendChild(hand[j]);
                       console.log('repairing',hand[j])
                   }

               }
           }
           if(window.getComputedStyle(todo).getPropertyValue('left') >= '0px'){
               console.log('bigger');
              todo.style.left = '0px';
           }
            lastposition = event.clientX;
            position = change;
            todo.style.left = (position-150) +'px';


        }
   }
   document.onmouseup = function(event){
       mouseDown = false;
       todoIcon = false;
       console.log('not up')
   }
    document.ontouchmove = function(event){
         if(!touchDown){
             return false;
         }

         var touched = event.changedTouches[0];
         if(todoIcon){
             console.log('todo-icon-slide');
             var todo = obj.getId('todo-icon-slide');
             var change = 0;
             if(lastposition){
                 console.log(lastposition);
                 change = (lastposition - touched.clientX);

             }
             if(window.getComputedStyle(todo).getPropertyValue('left') <= '-250px'){
                console.log('smaller')
                var hands = obj.getAll('.hands4,.hands3,.hands2,.hands1,.hands0');
                for(var i = 0; i < hands.length; i++){
                    var hand = Object.assign(hands);
                    console.log(hand);
                    for(var j = 0; j < hands.length;j++){
                        hands[j].parentNode.removeChild(hands[j]);
                        console.log('removing',hands[j])
                        obj.getId('todo-icon-slide').appendChild(hand[j]);
                        console.log('repairing',hand[j])
                    }

                }
            }
            if(window.getComputedStyle(todo).getPropertyValue('left') >= '0px'){
                console.log('bigger');
               todo.style.left = '0px';
            }
             lastposition = touched.clientX;
             position = change;
             todo.style.left = (position-150) +'px';


         }
    }
    document.ontouchend = function(event){
        touchDown = false;
        todoIcon = false;
        console.log('not touched')
    }
    left.onclick = function () {



        console.log('arrows left clicked')
        click++;
        sleft -= 50;
        if (click === 6) click = 0;

        switch (click) {
            case 1:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case1l',sleft)
                break;
            case 2:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case2l',sleft)
                break;
            case 3:
                todoIconSlide.style.left = sleft  + 'px';
                console.log('case3l',sleft)
                break;
            case 4:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case4l',sleft)
                break;
            case 5:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case5l',sleft)
                break;

        }

        console.log(click);
    };
    right.onclick = function () {
        var todoIconSlide = obj.get('.todo-icon-slide');


        console.log('right clicked')
        click--;
        sleft += 50
        if (click === 0) click = 5;
        switch (click) {
            case 5:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case1r',sleft)
                break;
            case 2:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case2r',sleft)
                break;
            case 3:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case3r',sleft)
                break;
            case 4:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case4r',sleft)
                break;
            case 5:
                todoIconSlide.style.left = sleft + 'px';
                console.log('case5r',sleft)
                console.log('right case1')
                break;

        }

        console.log(click);
    };
}
module.exports.robot = function () {
    var robot = obj.getId('robot'),

        robotSaying = obj.get('.robot-saying');
    robotOutLine = obj.get('.robot-outline');
    robotOutLine.style.cssText = 'top:-27%;left:35%';
    robotOutLine.style.transition = 'all 5s linear';

    robotSaying.style.display = 'none';
    robot.classList.add('robot-fly-down');
    setTimeout(function () {
        robotOutLine.style.top = '37%';
    }, 3000);
    setTimeout(function () {

        robot.classList.remove('robot-fly-down');
        robot.classList.add('robot-talk');

        talk('請下命令,主要目標是修復雨珊!', 2000);

    }, 8000);
    setTimeout(() => {
        robot.classList.remove('robot-talk');
        robot.classList.add('robot-right');

        robotOutLine.style.cssText = 'top:17%;left:11%;transition:all 5s linear';
    }, 10000);
    setTimeout(() => {
        robot.classList.remove('robot-right');
        robot.classList.add('robot-fly-turn');


        talk('變身', 2000);
        var audio = new Audio || webkitAudio;
        audio.src = electric;
        audio.play();
    }, 13000);
    setTimeout(() => {
        robot.classList.remove('robot-fly-turn');
        robot.classList.add('robot-change');
        robotOutLine.style.transition = 'none';
    }, 15000);
    setTimeout(() => {
        talk('修理模式已經啟動', 3000);
    }, 18000);

}
var wholeContext = [];

function talk(word, time) {
    var robotSaying = obj.get('.robot-saying');
    robotSaying.style.display = 'block';
    var txt = document.createTextNode(word);
    var div = obj.create('div');
    var robotSaying = obj.get('.robot-saying');
    robotSaying.appendChild(div);
    div.classList.add('robot-speak');
    var local = localStorage.setItem('history', wholeContext.push(word));
    var getLocal = localStorage.getItem('history');
    speech(word);
    div.innerHTML = word;
    setTimeout(() => {
        var robotSpeak = obj.get('.robot-speak');
        div.innerHTML = '';
        robotSaying.style.display = 'none';
        robotSpeak.parentNode.removeChild(robotSpeak);
        console.log('removed');

    }, time);

    var historyBtn = obj.get('.history-btn');
    historyBtn.onclick = function () {
        var historyBoard = obj.get('.history-board');
        historyBoard.innerHTML = getLocal.toString();
    }
}
module.exports.selectMusic = function () {

    document.onkeydown = function (e) {
        var key = e.which || e.keyCode;
        if (key == 81) {
            audio.pause();
            audio2.pause();
        }
    }
}




module.exports.talkToYuShan = function () {
    var yushanBtn = obj.get('.icon-talk-to-yushan');
    yushanBtn.onclick = function () {
        var robot = obj.getId('robot');
        robot.removeAttribute('class');
        robot.setAttribute('class', 'robot-fly');

        talkShan();
        talkBar('看看雨珊怎麼樣了', 4000);
        talkBar('雨珊,你還好吧?', 8000);
    };

    function talkBar(robotTalk, time) {
        var robotSaying = obj.get('.robot-saying');
        robotSaying.style.display = 'block';
        var div = obj.create('div');
        div.classList.add('robot-speak');
        robotSaying.appendChild(div);

        speech(robotTalk);
        div.innerHTML = robotTalk;


        setTimeout(() => {
            div.parentNode.removeChild(div);
            robotSaying.style.display = 'none';
            robot.removeAttribute('class');
        }, time);
    }



    function talkShan() {
        console.log('yushanbtn have been clicked')

        var robotOutLine = obj.get('.robot-outline');
        robotOutLine.style.cssText = 'top:70%;left:58%;transition:all 4s ease-in;';
    }



}
module.exports.add = function (name, type, cls, parent) {
    this.name = name;
    this.type = type;
    this.cls = cls;
    this.parent = parent;
    this.name = obj.create(this.type);
    this.name.className = this.cls;
    this.parent.appendChild(this.name);
}


module.exports.updates = function () {
    var click = 0;
    var iconlatestupdate = obj.get('.icon-latest-update');
    iconlatestupdate.onclick = function () {
        console.log('click update')
        click++;
        if (click === 3) click = 1;



        switch (click) {
            case 1:
                $('.shan-talk').css('display', 'block');
                helper.updateLi.call(update);
                console.log('1')
                break;
            case 2:
                $('.shan-talk').css('display', 'none');
                console.log('2')
                break;



        }
    };




}
module.exports.repairTouch = function (e) {
    var touchDown = false,
        mouseDown = false,
        position = [34, 0, 0],
        mposition = [34, 0, 0],
        mlastposition = [null, null],
        lastPosition = [null, null],
        todoIconSlide = obj.get('.todo-icon-slide');

    todoIconSlide.addEventListener('touchmove', function (e) {
        if (!touchDown) {
            return false;
        }
        var touches = e.changedTouches[0];
        console.log('touches', touches);
        var changeX = 0;
        if (lastPosition[0]) {
            changeX = (lastPosition[0] - touches.screenX);
            if (Math.abs(changeX) > 20) {
                changeX = 0;
            }
        }
        lastPosition = [touches.screenX, touches.screenY];
        position[0] -= changeX;
        todoIconSlide.style.left = position[0] + 'px';
    });
    todoIconSlide.addEventListener('touchstart', function (e) {
        var touched = e.touches[0];
        if (e.touched.target.className == 'todo-icon-slide') {
            console.log('touched fuck');
            e.touched.target = todoIconSlide;
        }
        touchDown = true;
        console.log('touched');
    })
    todoIconSlide.addEventListener('touchend', function (e) {
        touchDown = false;
        console.log('touchend mouseup')
    })
}
module.exports.getFireballPos=function() {

    var robot = obj.getId('robot');
    var fireball = obj.get('.fireball');
    var crossHair = obj.get('.cross-hair');
    var rx = robot.getBoundingClientRect().x + robot.offsetWidth / 2;
    var ry = robot.getBoundingClientRect().y + robot.offsetHeight / 2;
    console.log('rx', rx, 'ry', ry);
    return (function () {
        fireball.style.left = rx + 'px';
        fireball.style.top = ry + 'px';
        crossHair.style.left = rx+'px';
        crossHair.style.top = ry+'px';
        console.log('left', window.getComputedStyle(fireball).getPropertyValue('left'), 'top', window.getComputedStyle(fireball).getPropertyValue('top'));
    })();

}
module.exports.snow = function(){


    function initCanvas(){
        console.log('shooting')
        var ctx = obj.getId('shooting').getContext('2d');
        var cw = ctx.canvas.width, ch = ctx.canvas.height;
        var flakes = [];
        function addFlake(){
            var x = Math.floor(Math.random() * cw)+1;
            var y = 0
            var s = Math.floor(Math.random() * 8)+1;
            flakes.push({"x":x,"y":y,"s":s});
        }
        function snow(){

            addFlake();
            for(var i = 0; i< flakes.length;i++){
                ctx.fillStyle = 'rgba(255,255,255,.75)'
                ctx.beginPath();
                // arc(x,y,radius,startangle,endangle,aniticlockwise);
                ctx.arc(flakes[i].x,flakes[i].y+= flakes[i].s*.5,flakes[i].s*.5,0,Math.PI*2,false);
                ctx.fill();
                if(flakes[i].y > ch){
                    flakes.splice(i,1);
                }
                obj.get('.shan-talk').innerHTML = 'snowFlake count ='+flakes.length;
            }
        }
        function animate(){

            ctx.clearRect(0,0,cw,ch);

            snow();
        }
        var animateInterval = setInterval(animate,30);
    }
    initCanvas();
}
module.exports.drawCanvas = function(){

        var canvas = obj.getId('canvas');
        var ctx = canvas.getContext('2d');
        var w = canvas.width = window.innerWidth;
        var h = canvas.height = window.innerHeight;



    function resizing(){
        w = window.innerWidth;
        h = window.innerHeight;
        console.log('resize canvas');

    }
    document.ontouchstart = function(e){

        var touch = e.targetTouches[0];
        console.log('touchstart')
    }
    window.addEventListener('resize',resizing,false);
    document.ontouchmove = function(e){
        console.log('touchmove')
        var touched = e.changedTouches[0];
        var mouse = {
            x:touched.clientX,
            y:touched.clientY
        }
        function draw(){
            ctx.beginPath();
            ctx.clearRect(0,0,w,h);
            ctx.moveTo(obj.getId('robot').getBoundingClientRect().x,obj.getId('robot').getBoundingClientRect().y);
            ctx.bezierCurveTo(mouse.x,mouse.y,mouse.x+mouse.y,Math.PI*2,Math.sin(mouse.x),Math.cos(mouse.y));
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
            console.log('yes');
        }
        draw();
    }
    document.onmousemove = function(e){
      console.log('move')
        var mouse = {
            x:e.clientX,
            y:e.clientY
        }
        function draw(){
            ctx.beginPath();
            ctx.clearRect(0,0,w,h);
            ctx.moveTo(obj.getId('robot').getBoundingClientRect().x,obj.getId('robot').getBoundingClientRect().y);
            ctx.bezierCurveTo(mouse.x,mouse.y,mouse.x+mouse.y,Math.PI*2,Math.sin(mouse.x),Math.cos(mouse.y));
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
            console.log('yes');
        }
        draw();
    }
}
module.exports.circle = function(){
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/2;
    var mouse = {
        x:innerWidth/2,
        y:innerHeight/2
    }
    var colors = [
        '#2185c5'
    ]

    addEventListener('mousemove',event =>{
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
    addEventListener('resize',()=>{
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    })
    function randomIntFromRange(min,max){
        return Math.floor(Math.random()*(max - min + 1)+ min);
    }
    function randomColor(colors){
        return colors[Math.floor(Math.random()* colors.length)];
    }
    console.log('circle');
    function particle(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.05;
        this.distanceFromCenter = {
            x:randomIntFromRange(50,120),
            y:randomIntFromRange(50,120)
        };
        this.update = function(){
            this.radians += this.velocity;
            this.x = x + Math.cos(this.radians)* this.distanceFromCenter.x;
            this.y = y + Math.sin(this.radians)* 100;


            this.draw();
        };
        this.draw = function(){
            c.beginPath();
            c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        }
    }
    let particles;
    function init(){
        particles = [];
        for(var i = 0; i < 50; i++){
            particles.push(new particle(canvas.width,canvas.height/2,5,'blue'))
        }
        console.log(particles);
    }
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(particle =>{
            particle.update();
        })
    }
    init();
    animate();

}
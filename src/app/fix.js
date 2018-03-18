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
var helper = require('./helperFunction');
var update = require('./update');
var transform = require('./transform');
var transition = require('./transform');





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
        gameAction = obj.get('.game-action');

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




}
module.exports.topMenu = function () {
    var crossHair = obj.get('.cross-hair');
    crossHair.style.display = 'none';
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
            robot.classList.add('robot-power');
            console.log('robot-power')
            talkBar('愛的弓箭啟動', 4000);
        }, 4000);
        setTimeout(function () {
            robot.classList.remove('robot-power');
            console.log('remove robot-power')


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
        var handle2 = obj.get('.handle2');
        var handle3 = obj.get('.handle3');
        var handle4 = obj.get('.handle4');
        var powerx = obj.get('.power-x');
        var powery = obj.get('.power-y');
        robot.style.transition = 'all .5s linear';
        var idleTime = 0;
        var increase = [];
        var increaseS = '';
        var decrease = '';
        var decreaseS = '';
        var shoot = '';
        var power = 0;
        var powerX= 0;
        var powerY = 0;
        var fLeft = 0;
        var fTop = 0;
        var speed = 40;
        var deg = 0;
        var translateX = 0;
        var translateY = 0;
        var down = false;
        var fireball = obj.get('.fireball');
        // var increase2 = '';
        // var increase2S = '';
        // var increase3S = '';
        // var increase3 = '';
        // var decrease2S = '';
        // var decrease3S = '';
        // var decrease2 = '';
        // var decrease3 ='';
        var shanLiOutline = obj.get('.shanli-outline');

        var angle;
        var left = 0;
        var top = 0;
        var isDown = false;
        var getShan = false;
        var lastposition = [null,null];
        document.ontouchmove = function(e){
            if(!isDown){
                return false;
            }
            crossHairDetection();
            fireballCollision();

                var crossHair = obj.get('.cross-hair');


            var touches = e.targetTouches[0];

            crossHair.style.cssText = 'left:'+(touches.clientX-25)+'px;top:'+(touches.clientY-25)+'px';
            $('.cross-hair').on('click',function(e){
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
                $('.cross-hair').on('click',function(e){
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
          })
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



        function shootOut() {
robot.classList.add('robot-shooting');
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
                robot.classList.remove('robot-shooting');

            }, 1000);

            var fleft = (fLeft += deltaX);
            var ftop = (fTop += deltaY);
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
            var shanLi = obj.getId('shan-li');
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

                function playerLevel() {
                    console.log('excuting playerlevel')
                    var playerLv = obj.get('.player-level');
                    var robotNum = obj.get('.robot-number');

                    playerLv.innerHTML = lv;
                    robotNum.innerHTML = '等級增加了' + lv;
                    robotNum.style.top = value + 'px';
                }


            }else{
                hit = false;
            }

console.log('end',hit)
        }
        function crossHairDetection(){
            var crossHair = obj.get('.cross-hair');
            var shanLi = obj.getId('shan-li');
            var hit = false;
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
            return function(){
                console.log('returned detection')
                if ((cx + cw) > sx && cx < (sx + sw) && (cy + ch) > sy && cy < (sy + sh)) {
                    hit = true;
                    console.log('hit crosshair',hit);
                    crossHair.classList.add('crosshair');
                }else{
                    hit = false;
                    crossHair.classList.remove('crosshair');
                }
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
    var audio = new Audio();
    audio.src = gameover;
    audio.play();
    var robot = obj.getId('robot');
    var iconEnergy = obj.get('icon-energy');
    var robotEnergy = obj.get('robot-energy');
    if($('.robot-energy-bar').css('width')=='0px'){
        console.log('robotdead');
        $('.robot-energy-bar .robot-energy .icon-energy').css('display', 'none');
    robot.removeAttribute('class');
    robot.setAttribute('class', 'robot-dead');
    }

}

module.exports.arrows = function () {
    var right = obj.get('.right');
    var left = obj.get('.left');
    var click = 0;
    left.onclick = function () {
        var todoIconSlide = obj.get('.todo-icon-slide');


        console.log('arrows left clicked')
        click++;
        if (click === 6) click = 0;
        switch (click) {
            case 1:
                todoIconSlide.style.left += 50 + 'px';
                console.log('case1')
                break;
            case 2:
                todoIconSlide.style.left += 50 + 'px';
                break;
            case 3:
                todoIconSlide.style.left += 50 + 'px';
                break;
            case 4:
                todoIconSlide.style.left += 50 + 'px';
                break;
            case 5:
                todoIconSlide.style.left += 50 + 'px';
                console.log('case2')
                break;

        }

        console.log(click);
    };
    right.onclick = function () {
        var todoIconSlide = obj.get('.todo-icon-slide');


        console.log('right clicked')
        click--;
        if (click === 0) click = 5;
        switch (click) {
            case 5:
                todoIconSlide.style.left -= 50 + 'px';
                console.log('right case5')
                break;
            case 2:
                todoIconSlide.style.left -= 50 + 'px';
                break;
            case 3:
                todoIconSlide.style.left -= 50 + 'px';
                break;
            case 4:
                todoIconSlide.style.left -= 50 + 'px';
                break;
            case 5:
                todoIconSlide.style.left -= 50 + 'px';
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
    }, 13000);
    setTimeout(() => {
        robot.classList.remove('robot-fly-turn');
        robot.classList.add('robot-change');
        robotOutLine.style.transition = 'none';
    }, 15000);
    setTimeout(() => {
        talk('修理模式已經啟動', 3000);
    }, 18000);
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
}
module.exports.selectMusic = function () {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new window.AudioContext;
    var audio = new Audio();
    var audio2 = new Audio();
    var songList = [epic, memories, wind, gameover, charging, fire1, robotmove];

    audio.src = songList[0];

    audio2.src = songList[2];


    console.log(audio)
    audio.loop = true;
    audio2.loop = true;
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
var obj = require('./getall');
var requrestAnimationFrame = require('./requestAnimationFrame');
var Hammer = require('hammerjs');
var speech = require('./speech');
var memories = require('../audio/memories.mp3');
var epic = require('../audio/epic.mp3');
var iconTodo = obj.get('.icon-todo');
var robotOutLine = obj.get('.robot-outline');
var robot = obj.getId('robot');
var robotE = obj.get('.robot-energy-bar');

module.exports.robotMenu = function() {
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

    iconFix.onclick = (function() {
        var click = 0;
        return function() {
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
module.exports.topMenu = function() {

    var hands = obj.getAll('.hands0,.hands1, .hands2, .hands3, .hands4, .hands5, .hands6, .hands7, .hands8, .hands9');
    hands[0].onclick = (function() {
        var love = 0;
        return function() {
            love++;
            if (love == 3) love = 1;
            switch (love) {
                case 1:
                    loveEnergy();

                    break;
                case 2:
                    removeLoveEnergy();

                    break;
            }
        }


    })();

    var love = '愛的能源';
    var submit = false;
    var fire = false;

    var bigWords = obj.get('.big-words');
    bigWords.style.display = 'none';

    function removeLoveEnergy() {
        submit = false;
        var li = obj.get('.outside');
        li.parentNode.removeChild(li);
    }
    var submitBtn = obj.get('.submit-btn').onclick = function() {
        if (!submit) {
            return false;
            console.log('not gonna happen');
        }
        var iconFix = obj.get('.icon-fix');
        iconFix.style.transform = 'scale(1)';
        var todolist = obj.get('.todo-list').style.display = 'none';
        var robot = obj.getId('robot');
        robot.classList.remove('robot-change');


        fire = true;
        removeLoveEnergy();

        console.log(fire)
        if (fire == true) {
            loveBomb();
            console.log('lovebomb');
            setTimeout(function() {
                loveSparrow();
                console.log('fire')
            }, 7000)
        }


    }



    function loveBomb() {

        console.log('i got fired')
        var shanLi = obj.get('.shanli-outline');



        var robot = obj.get('#robot');
        var bigWords = obj.get('.big-words');
        bigWords.style.display = 'none';
        setTimeout(() => {
            bigWords.style.display = 'block';
            bigWords.classList.add('leftright');
            bigWords.textContent = love;
            speech(love)
        }, 2000);

        setTimeout(() => {
            bigWords.classList.remove('leftright');
            console.log(bigWords);
        }, 3000);
        setTimeout(function() {

            var handle = obj.get('.handle');
            handle.style.display = 'block';


        }, 8000);
        setTimeout(() => {
            robot.classList.add('robot-power');
            console.log('robot-power')
            talkBar('啊啊啊啊!看我的小宇宙爆發!', 4000);
        }, 4000);
        setTimeout(function() {
            robot.classList.remove('robot-power');
            console.log('remove robot-power')
            touchBc.style.display = 'block';
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
        console.log('loveSparrow have been activeted')
        var robot = obj.getId('robot');
        var handle = obj.get('.handle');
        robot.style.transition = 'all .5s linear';
        var idleTime = 0;
        var setint = '';
        var power = 0;
        var fLeft = 0;
        var fTop = 0;
        var speed = 1;
        var deg = 0;
        var angle = 30 * Math.PI / 180;
        var fireball = obj.get('.fireball');

        var shanLiOutline = obj.get('.shanli-outline');
        var sTop = window.getComputedStyle(shanLiOutline).getPropertyValue('top');
        var sLeft = window.getComputedStyle(shanLiOutline).getPropertyValue('left');


        handle.onmousedown = (function(e) {

            console.log('returned')
            fireball.style.display = 'block';
            clearInterval(setint);
            $('.handle').addClass('maxpower');
            robot.classList.add('robot-shooting');
            robot.style.transform = 'rotatez(30deg)';

            power = 0;
            setint = setInterval(function() {
                speed += 1;

                $('.power').val(++power);
                console.log('mousehold', speed, power);
            }, 50);

        })();
        $('.handle').on('mouseleave mouseup', function() {
            $('.power').val(power);
            $('.handle').removeClass('maxpower');
            clearInterval(setint);
            shootOut();
            console.log(power);
        })






        var deltaX = Math.cos(angle) * speed;
        var deltaY = Math.sin(angle) * speed;
        console.log(deltaX, deltaY, 'delta');

        function shootOut() {

            console.log('shooting');


            setTimeout(() => {
                robot.classList.remove('robot-shooting');
                robot.style.transform = 'rotatez(30deg)';
            }, 1000);

            setInterval(function() {
                fireball.style.left = (fLeft += deltaX) + '%';
                fireball.style.top = (fTop += deltaY) + '%';



            }, 60)
            var f = fireball.getBoundingClientRect();
            if (f.x >= window.innerWidth || f.y >= window.innerHeight) {
                console.log('dectect bigger');
                window.clearInterval();
                var fireball2 = Object.assign(fireball);

                fireball.parentNode.removeChild(fireball);
                var shanBtn = obj.get('.shan-btn');
                shanBtn.appendChild(fireball2);
                console.log('into appends')
            }
            var robotEnergyBar = obj.get('.robot-energy-bar');
            robotEnergyBar.style.width -= 30 + 'px';
            console.log('this is end');


        }

    }


    var robotOutLine = obj.get('.robot-outline');

    var touchBc = obj.get('.touch-boxcontrol');

    var lastPosition = null;



    function loveEnergy() {
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
module.exports.arrows = function() {
    var right = obj.get('.right');
    var left = obj.get('.left');
    var click = 0;
    left.onclick = (function() {
        var todoIconSlide = obj.get('.todo-icon-slide');

        return function() {
            click++;
            if (click === 5) click = 5;
            switch (click) {
                case 1:
                    todoIconSlide.style.left = 50 + 'px';
                    break;
                case 2:
                    todoIconSlide.style.left = 100 + 'px';
                    break;
                case 3:
                    todoIconSlide.style.left = 150 + 'px';
                    break;
                case 4:
                    todoIconSlide.style.left = 200 + 'px';
                    break;
                case 5:
                    todoIconSlide.style.left = 250 + 'px';
                    break;

            }
        }
        console.log(click);
    })();
    right.onclick = (function() {
        var todoIconSlide = obj.get('.todo-icon-slide');

        return function() {
            click--;
            if (click === 0) click = 5;
            switch (click) {
                case 5:
                    todoIconSlide.style.left = 200 + 'px';
                    break;
                case 2:
                    todoIconSlide.style.left = 150 + 'px';
                    break;
                case 3:
                    todoIconSlide.style.left = 100 + 'px';
                    break;
                case 4:
                    todoIconSlide.style.left = 50 + 'px';
                    break;
                case 5:
                    todoIconSlide.style.left = 0 + 'px';
                    break;

            }
        }
        console.log(click);
    })();
}
module.exports.robot = function() {
    var robot = obj.getId('robot'),
        asideBc = obj.get('.aside-boxcontrol'),
        robotSaying = obj.get('.robot-saying');
    robotOutLine = obj.get('.robot-outline');
    robotOutLine.style.cssText = 'top:-27%;left:35%';
    robotOutLine.style.transition = 'all 5s linear';
    asideBc.style.display = 'none';
    robotSaying.style.display = 'none';
    robot.classList.add('robot-fly-down');
    setTimeout(function() {
        robotOutLine.style.top = '37%';
    }, 3000);
    setTimeout(function() {

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

        asideBc.style.display = 'block';
        talk('變身', 2000);
    }, 13000);
    setTimeout(() => {
        robot.classList.remove('robot-fly-turn');
        robot.classList.add('robot-change');
        robotOutLine.style.transition = 'none';
    }, 15000);
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
        historyBtn.onclick = function() {
            var historyBoard = obj.get('.history-board');
            historyBoard.innerHTML = getLocal.toString();
        }
    }
}
module.exports.music = function() {
    var mp3File = obj.getId('mp3file');
    mp3File.src = memories;
    var audio = new Audio();
    var songList = [epic, memories];

    audio.src = songList[0];
    audio.play();

    console.log(audio)
    audio.loop = true;
    document.onkeydown = function(e) {
        var key = e.which || e.keyCode;
        if (key == 81) {
            audio.pause();
        }
    }
}

function removeIcons() {
    var asideBc = obj.get('.aside-boxcontrol');
    asideBc.style.display = 'none';
}


module.exports.talkToYuShan = function() {
    var yushanBtn = obj.get('.icon-talk-to-yushan');
    yushanBtn.onclick = function() {
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
        removeIcons();
        var robotOutLine = obj.get('.robot-outline');
        robotOutLine.style.cssText = 'top:70%;left:58%;transition:all 4s ease-in;';
    }



}
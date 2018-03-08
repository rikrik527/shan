var obj = require('./getall');
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
        robot.classList.add('robot-love-arrow');
        robot.style.transform = 'rotatez(25deg)';
        removeLoveEnergy();
        fire = true;
        console.log(fire)
        if (fire == true) {
            loveBomb();
            console.log('fired')
        }


    }



    function loveBomb() {

        console.log('i got fired')
        var shanLi = obj.get('.shanli-outline');




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
            var loveArrow = obj.get('.love-arrow');
            loveArrow.style.display = 'block';
            var handle = obj.get('.handle');
            handle.style.display = 'block';
            var touchBc = obj.get('.touch-boxcontrol');
            touchBc.style.display = 'block';

        }, 4000);
    }

    function fire() {



    }
    var robotOutLine = obj.get('.robot-outline');
    var loveArrow = obj.get('.love-arrow');
    var loveLeft = window.getComputedStyle(loveArrow).getPropertyValue('left');
    var touchBc = obj.get('.touch-boxcontrol');
    var powerMb = obj.get('.power-meter-bar');
    var mouseDown = false;
    var isHandled = false;
    var handle = obj.get('.handle');
    var mouseX, mouseY;
    var power = 0;
    var straight = 0;
    var maxPower = 10;
    var minPower = 40;


    touchBc.onmousedown = function(e) {

        mouseDown = true;
        console.log('mousedown');
        if (e.target.className === 'handle') {
            console.log('got handle');
            isHandled = true;
        }
    }
    touchBc.onmouseup = function(e) {
        mouseDown = false;
        isHandled = false;

    }

    function fireball(e) {

        var fireball = obj.get('.fireball');

    }
    touchBc.onmousemove = function(e) {


        if (!mouseDown) {
            return false;
            console.log('arrow isnt down');

        }
        if (isHandled) {
            console.log('ishandled');
            mouseX = Math.floor(e.clientX / 10 * 5);
            mouseY = Math.floor(e.clientY / 5);
            if (mouseX <= maxPower) {
                powerMb.style.left = mouseX - 300 + 'px';
                mouseX = 10;
                handle.classList.add('maxpower');

                arrowBc.onmouseup = function() {

                }


            } else if (mouseX > maxPower) {
                handle.classList.remove('maxpower');

            } else if (mouseX >= minPower) {
                mouseX = 40;
                console.log('60');
                handle.style.left = (-mouseX) + 'px)';
            }
            switch (mouseX) {
                case 10:
                    power = 30;
                    console.log('case30', power)
                    break;
                case 20:
                    power = 20;
                    console.log('case40', power)
                    break;
                case 30:
                    power = 10;
                    console.log('case50', power);
                    break;
                case 40:
                    power = 0;
                    console.log('case60', power);
                    break;
            }

            handle.style.left = mouseX + 'px';

            console.log(mouseX)
        }

    }










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

    function shooting(e) {
        var gameAction = obj.get('.game-action');
        gameAction.style.display = 'block';
        console.log('shooting star')
        var canvas = obj.getId('shooting');
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }



        function arc() {
            var x = mouse.x;
            var y = mouse.y;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();

            ctx.arc(x, y, 100, 0, 2 * Math.PI);

            ctx.strokeStyle = 'red';
            ctx.lineWidth = '5';

            ctx.stroke();
            ctx.closePath();
        }
        canvas.onmousemove = function(e) {
            arc();
            var mouse = {
                x: e.clientX,
                y: e.clientY
            }
            console.log(mouse.x, mouse.y);
        }

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
                    todoIconSlide.style.left -= 50 + 'px';
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
                    break;

            }
        }
        console.log(click);
    })();
    right.onclick = (function() {
        var todoIconSlide = obj.get('.todo-icon-slide');

        return function() {
            click--;
            if (click === 0) click = 0;
            switch (click) {
                case 1:
                    todoIconSlide.style.left += 50 + 'px';
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

        speech(talk('請下命令,主要目標是修復雨珊!', 2000));

    }, 8000);
    setTimeout(() => {
        robot.classList.remove('robot-talk');
        robot.classList.add('robot-right');

        robotOutLine.style.cssText = 'top:17%;left:11%;transition:all 5s linear';
    }, 10000);
    setTimeout(() => {
        robot.classList.remove('robot-right');
        robot.classList.add('robot-origin');

        asideBc.style.display = 'block';
        speech(talk('變身', 2000));
    }, 13000);
    setTimeout(() => {
        robot.classList.remove('robot-origin');
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
        talkBar(4000);

    };



    function talkBar(time) {
        var robotSaying = obj.get('.robot-saying');
        robotSaying.style.display = 'block';
        var div = obj.create('div');
        div.classList.add('robot-speak');
        robotSaying.appendChild(div);
        var robotTalk = '看看雨珊怎麼樣了';
        speech(robotTalk);
        div.innerHTML = robotTalk;


        setTimeout(() => {
            div.parentNode.removeChild(div);
            robotSaying.style.display = 'none';
        }, time);
    }

    function talkShan() {
        console.log('yushanbtn have been clicked')
        removeIcons();
        var robotOutLine = obj.get('.robot-outline');
        robotOutLine.style.cssText = 'top:70%;left:58%;transition:all 4s ease-in;';
    }



}
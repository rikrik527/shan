var obj = require('./getall');
var Hammer = require('hammerjs');
var memories = require('../audio/memories.mp3');
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
        var todolist = obj.get('.todo-list').style.display = 'none';
        var robot = obj.getId('robot');
        robot.classList.remove('robot-change');
        robot.classList.add('robotlove');

        var gameAction = obj.get('.game-action');
        gameAction.classList.add('love');
        removeLoveEnergy();
        fire = true;
        console.log(fire)
        if (fire == true) {
            loveBomb();
            console.log('fired')
        }


    }



    function loveBomb() {
        var gameAction = obj.get('.game-action');
        gameAction.style.cssText = 'left:20%;top:23%;display:none';
        console.log('i got fired')
        var shanLi = obj.get('.shanli-outline');
        var shanLiTop = window.getComputedStyle(shanLi).getPropertyValue('top');
        var shanLiLeft = window.getComputedStyle(shanLi).getPropertyValue('left');

        gameAction.style.cssText = 'left:70%;top:76%;display:block;transition:all 1s linear;opacity:1';
        var div = obj.create('div');
        div.className = 'fireball';
        gameAction.insertAdjacentElement('afterend', div);
        var bigWords = obj.get('.big-words');
        bigWords.style.display = 'none';
        bigWords.classList.add('leftright');
        bigWords.textContent = love;
        setTimeout(() => {
            bigWords.classList.remove('leftright');
        }, 2000);


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

        talk('請下命令,主要目標是修復雨珊!', 2000);

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
        talk('變身', 2000)
    }, 13000);
    setTimeout(() => {
        robot.classList.remove('robot-origin');
        robot.classList.add('robot-change');
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
        var session = sessionStorage.setItem(wholeContext.push(word));
        var getSession = sessionStorage.getItem(session);
        div.innerHTML = word;
        setTimeout(() => {
            div.innerHTML = '';
            robotSaying.style.display = 'none';
            robotSpeak.parentNode.removeChild();
            console.log('removed');
        }, time);
        var historyBtn = obj.get('.history-btn');
        historyBtn.onclick = function() {
            var historyBoard = obj.get('.history-board');
            historyBoard.innerHTML = getSession;
        }
    }
}
module.exports.music = function() {
    var mp3File = obj.getId('mp3file');
    mp3File.src = memories;
    audio.play();
}
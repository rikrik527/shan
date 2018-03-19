var obj = require('./getall');
var requrestAnimationFrame = require('./requestAnimationFrame');
var transform = require('./transform');
var transition = require('./transform');
var Hammer = require('hammerjs');
var speech = require('./speech');
var memories = require('../audio/memories.mp3');
var epic = require('../audio/epic.mp3');
var transform = require('./transform');

var robotMenu = robotMenu || {};
robotMenu = {
    todoIcon: obj.get('.todo-icon'),
    iconFix: obj.get('.icon-fix'),
    iconPersonal: obj.get('.icon-personal'),
    iconService: obj.get('.icon-service'),
    iconTalkToYuShan: obj.get('.icon-talk-to-yushan'),
    todoList: obj.get('.todo-list'),
    iconClose: obj.get('.icon-close-todo'),
    right: obj.get('.right'),
    left: obj.get('.left'),
    todoIconSlide: obj.get('todo-icon-slide'),

    hands: obj.getAll('.hands0,.hands1, .hands2, .hands3, .hands4, .hands5, .hands6, .hands7, .hands8, .hands9'),

    todoTitle: obj.get('.todo-title'),
    resetBtn: obj.get('.reset-btn'),
    submitBtn: obj.get('.submit-btn'),
    fireball: obj.get('.fireball'),

    shanLiOutline: obj.get('.shanli-outline'),
    shanLi: obj.getId('shan-li'),
    shanLiEnergy: obj.get('.shanli-energy'),
    shanLiEnergyBar: obj.get('.shanli-energy-bar'),
    iconEnergy: obj.get('.icon-energy'),
    bigWords: obj.get('.big-words'),
    touchBc: obj.get('.touch-boxcontrol'),
    power: obj.get('.power'),
    handle1: obj.get('.handle1'),
    gameAction: obj.get('.game-action'),
    shooting: obj.getId('shooting'),
    robotOutLine: obj.get('.robot-outline'),
    robotSaying: obj.get('.robot-saying'),
    robotTriangle: obj.get('.robot-triangle'),
    robotSpeak: obj.get('.robot-speak'),
    robot: obj.getId('robot'),
    robotEnergy: obj.get('.robot-energy'),
    robotEnergyBar: obj.get('.robot-energy-bar'),
    canvas: obj.getId('canvas'),
    shanBtn: obj.get('.shan-btn'),
    playerLevel: obj.get('.player-level'),
    playerMoeny: obj.get('.player-money'),
    playerExperience: obj.get('.player-experience'),
    robotE: 100,
    robotEStatus: function() {
        this.robotEnergyBar.style.width = this.robotE + 'px';
    },
    iconRobotFix: function() {
        this.iconFix.onclick = (function() {
            var click = 0;
            return function() {
                click++;
                if (click == 3) click = 1;
                switch (click) {
                    case 1:
                        this.todoList.style.display = 'block';
                        this.todoList.classList.add('todolistshow');
                        this.iconFix.style.cssText = 'transform:scale(1.5)';
                        break;
                    case 2:
                        this.todoList.style.display = 'none';
                        this.todoList.classList.remove('todolistshow');
                        this.iconFix.style.cssText = 'transform:scale(1)';
                        break;
                }
            }
        })();
    },

    iconRobotPersonal: function() {
        this.iconPersonal.onclick = (function() {
            var click = 0;
            return function() {
                click++;
                if (click == 3) click = 1;
                switch (click) {
                    case 1:
                        this.fightList().style.display = 'block';
                        this.fightList().classList.add('todolistshow');
                        this.iconFix.style.cssText = 'transform:scale(1.5)';
                        break;
                    case 2:
                        this.todoList.style.display = 'none';
                        this.todoList.classList.remove('todolistshow');
                        this.iconFix.style.cssText = 'transform:scale(1)';
                        break;
                }
            }
        })();
    },
    topMenu: function() {
        this.hands[0].onclick = (function() {
            var love = 0;
            if (love == 3) love = 1;
            switch (love) {
                case 1:
                    this.loveEnergy();
                    break;
                case 2:
                    this.removeLoveEnergy();
                    break;
            }
        })();
        this.hands[1].onclick = (function() {
            var baseball = 0;
            if (baseball == 3) baseball = 1;
            switch (baseball) {
                case 1:
                    this.baseBallRule();
                    break;
                case 2:
                    this.removeBaseBallRule();
                    break;
            }
        })();
        this.hands[2].onclick = (function() {
            var breath = 0;
            if (breath == 3) breath = 1;
            switch (robotBreath) {
                case 1:
                    this.robotBreath();
                    break;
                case 2:
                    this.removeRobotBreath();
                    break;
            }
        })();
        this.hands[3].onclick = (function() {
            var electric = 0;
            if (electric == 3) electric = 1;
            switch (electric) {
                case 1:
                    this.electric100();
                    break;
                case 2:
                    this.removeEletric100();
                    break;
            }
        })();
        if (playerLevel == 2) {
            hands[4].onclick = (function() {
                console.log('player-level')
            })()
        }
    },
    love: '愛的能源',
    submit: false,
    fire: false,
    removeLoveEnergy: function() {
        this.submit = false;
        var li = obj.get('.outside');
        li.parentNode.removeChild(li);
    },
    submitBtn:function() {
        if (!this.submit) {
            return false;
            console.log('not gonna happen');
        }
        this.iconFix.style.transform = 'scale(1)';
        this.iconPersonal.style.transform = 'scale(1)';
        this.iconService.style.transform = 'scale(1)';
        this.iconTalkToYuShan.style.transform = 'scale(1)';
    },
    fightList: function() {
        this.shanBtn.insertAdjacentHTML('afterend', '<section class="fight-list"><span class="icon-close-fight"></span><div class="fight-icon"><div class="fight-right"></div><div class="fight-left"></div><div class="fight-icon-slide"></div></div><ul class="fight-title"></ul><input type="reset" class="fight-reset-btn"><input type="submit" class="fight-submit-btn"></section>');

    },
    increase: '',
    decrease: '',
    speed: 1,
    deg: 0,






}
module.exports = robotMenu;
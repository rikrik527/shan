var obj = require('./getall');
var iconTodo = obj.get('.icon-todo');
var robotOutLine = obj.get('.robot-outline');
var robot = obj.getId('robot');
var robotE = obj.get('.robot-energy-bar');
module.exports.fixMenu = function() {
    var iconTodo = obj.get('.icon-todo'),
        iconPersonal = obj.get('.icon-personal'),
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
        gameAction = obj.get('.game-action');
    iconPersonal.style.left = '0px';
    iconService.style.left = '0px';
    iconFix.style.left = '0px';
    iconFix.style.zIndex = '-9';
    iconPersonal.style.zIndex = '-9';
    iconService.style.zIndex = '-9';
    iconTodo.onclick = (function() {
        var click = 0;

        return function() {
            console.log('i have been excuted');

            click++;
            console.log(click)
            if (click == 3) click = 1
            console.log(click)
            switch (click) {
                case 1:
                    iconTodo.style.boxShadow = ' 0px -3px 52px 5px yellow';
                    setTimeout(function() {
                        iconTodo.style.boxShadow = '0px 0px 0px 0px transparent';
                    }, 500);
                    setTimeout(function() {
                        iconPersonal.style.left = '64px';
                        iconService.style.left = '64px';
                        iconFix.style.left = '64px';
                    }, 0);
                    setTimeout(function() {
                        iconService.style.left = '120px';
                        iconFix.style.left = '120px';
                    }, 500);
                    setTimeout(function() {
                        iconFix.style.left = '180px';
                    }, 1000);
                    iconFix.style.zIndex = '999';
                    iconPersonal.style.zIndex = '9999';
                    iconService.style.zIndex = '99999';
                    break;
                case 2:
                    iconTodo.style.boxShadow = ' 0px -3px 52px 5px yellow';
                    setTimeout(function() {
                        iconTodo.style.boxShadow = '0px 0px 0px 0px transparent';
                    }, 500);
                    setTimeout(function() {
                        iconFix.style.left = '120px';

                        console.log('0')
                    }, 0);
                    setTimeout(function() {
                        iconService.style.left = '64px';
                        iconFix.style.left = '64px';
                        console.log('500')
                    }, 500);
                    setTimeout(function() {
                        iconFix.style.left = '0px';
                        iconPersonal.style.left = '0px';
                        iconService.style.left = '0px';
                        console.log('1000')
                    }, 1000);
                    iconFix.style.zIndex = '-9';
                    iconPersonal.style.zIndex = '-9';
                    iconService.style.zIndex = '-9';
                    break;
            }

        }
    })();
    iconTodo.onmouseover = function() {
        robotSpeak.textContent = '點擊即可出現選單'
    }
    iconTodo.onmouseout = function() {
        robotSpeak.textContent = '';
    }

    iconFix.onclick = function() {
        iconFix.style.boxShadow = '0px 0px 52px 3px yellow';
        robotOutLine.classList.remove('robot-outline-fly-back');
        setTimeout(function() {
            iconFix.style.boxShadow = '0px 0px 0px 0px transparent';

        }, 100);
        robot.classList.add('robot-fly');
        setTimeout(function() {
            robotOutLine.classList.add('robot-outline-fly');
        }, 1000);

        setTimeout(function() {
            robot.classList.remove('robot-fly');
            robot.classList.add('robot-fix-1');
        }, 3000);
        setTimeout(function() {
            gameAction.classList.add('heart-explode');
        }, 4000);
        setTimeout(function() {
            robotOutLine.classList.remove('robot-outline-fly');
            robotOutLine.classList.add('robot-outline-fly-back');
            robot.classList.remove('robot-fix-1');
            gameAction.classList.remove('heart-explode');
        }, 10000);
    };

}
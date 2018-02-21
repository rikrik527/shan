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
        pos = obj.get('.pos'),
        pos1 = obj.get('.pos1'),
        pos2 = obj.get('.pos2'),
        pos3 = obj.get('.pos3'),
        gameAction = obj.get('.game-action');
    iconPersonal.style.left = '4px';
    iconService.style.left = '4px';
    iconFix.style.left = '4px';
    iconFix.style.display = 'none';
    iconPersonal.style.display = 'none';
    iconService.style.display = 'none';
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

                    iconTodo.classList.add('icontodo');

                    iconPersonal.style.cssText = 'transform:rotate(16deg)translate(79px);transition:all 1s linear';
                    iconPersonal.addEventListener('click', function() {
                        iconPersonal.classList.add('iconpersonal');
                    })



                    iconService.style.cssText = 'transform:rotate(29deg)translate(114px);transition:all 1s linear';
                    iconService.addEventListener('click', function() {
                        iconService.classList.add('iconservice');
                    })


                    iconFix.style.cssText = 'transform:rotate(40deg)translate(142px);transition:all 1s linear';
                    iconFix.addEventListener('click', function() {
                        iconFix.classList.add('iconfix');
                    })
                    setTimeout(function() {
                        iconFix.style.display = 'block';
                        iconPersonal.style.display = 'block';
                        iconService.style.display = 'block';
                    }, 500);

                    break;
                case 2:
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

}
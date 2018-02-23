var obj = require('./getall');
var iconTodo = obj.get('.icon-todo');
var robotOutLine = obj.get('.robot-outline');
var robot = obj.getId('robot');
var robotE = obj.get('.robot-energy-bar');
module.exports.fixMenu = function() {
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
    todoList.style.display = 'none';

    iconFix.onclick = (function() {

        var click = 0;

        return function() {
            console.log('i have been excuted');

            click++;
            console.log(click)
            if (click == 3) click = 1
            console.log(click)
            switch (click) {
                case 1:
                    todoList.style.display = 'block';
                    todoList.classList.add('todolistshow');

                    break;
                case 2:
                    todoList.style.display = 'none';
                    todoList.classList.remove('todolistshow');
                    break;
            }

        }
    })();
    for (var i = 0; i < 10; i++) {
        var div = obj.create('div');
        todoIconSlide.appendChild(div);
        div.className = 'hands' + i;
        div.innerHTML = i;
    }
    todoIconSlide.style.left = '-250px';
    var lastPosition = null;
    var mouseDown = false;
    todoIconSlide.onmousemove = function(e) {
        if (!mouseDown) {
            return false;
            console.log('false')
        } else if (mouseDown == true) {
            console.log('mosemove')
            var pos = e.clientX / 2;
            if (lastPosition) {
                console.log('null');
            }
            todoIconSlide.style.left = pos + 'px';
        }
    }
    todoIconSlide.onmousedown = function(e) {
        document.onmousedown = true;
        mouseDown = true;
        lastPosition = e.clientX;
        console.log('moudown')
    }
    todoIconSlide.onmouseup = function(e) {
        mouseDown = false;
        document.onmouseup = true;
        console.log('up')
    }


}
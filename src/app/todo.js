var obj = require('./getall');
var object = require('./object');

module.exports.touchElement = function() {

    var touchDown = false;
    var position = [34, 0, 0];
    var lastposition = [null, null];
    var todoList = obj.getId('todo-list');
    todoList.style.left = position[0] + '%';


    todoList.ontouchmove = function(e) {
        if (!touchDown) {
            return false;
        }
        var touches = e.targetTouches[0];

        console.log('touchmove', touches)
        var changeX = 0,
            changeY = 0;
        if (lastposition[0]) {
            console.log('lastpostion[0]', lastposition[0]);
            changeX = (lastposition[0] - touches.screenX) / 5;
            if (Math.abs(changeX) > 20) {
                console.log('Math.abs(changeX)>20', Math.abs(changeX));
                changeX = 0;
            }
        }
        if (lastposition[1]) {
            console.log('lastpostion[1]', lastposition[1]);
            changeY = (lastposition[1] - touches.screenY) / 5;
            if (Math.abs(changeY) > 20) {
                changeY = 0;
            }
        }
        lastposition = [touches.screenX, touches.screenY];
        position[0] -= changeX;
        position[1] -= changeY;

        todoList.style.left = position[0] + '%';
        todoList.style.top = position[1] + '%';
        e.preventDefault();
        console.log(todoList.style.left, todoList.style.top);
    }
    todoList.ontouchstart = function(e) {
        touchDown = true;
        console.log('touched')
    }
    todoList.ontouchend = function(e) {
        touchDown = false;
        console.log('touchend');
    }
}
var obj = require('./getall');
var object = require('./object');

module.exports.touchElement = function() {
    // (function() {
    //     if ('ontouchstart' in window) {
    //         window.evt = {
    //             push: 'touchstart',
    //             move: 'touchmove',
    //             release: 'touchend'
    //         };
    //     } else {
    //         window.evt = {
    //             push: 'mousedown',
    //             move: 'mousemove',
    //             release: 'mouseup'
    //         };
    //     }
    // }());
    var touchDown = false;
    var position = [34, 0, 0];
    var lastposition = [null, null];
    var todoList = obj.getId('todo-list');
    todoList.style.left = position[0] + 'px';


    todoList.addEventListener('touchmove', function(e) {


        if (!touchDown) {
            return false;
        }
        var touches = e || e.targetTouches[0];

        console.log('touchmove', touches)
        var changeX = 0,
            changeY = 0;
        if (lastposition[0]) {
            console.log('lastpostion[0]', lastposition[0]);
            changeX = (lastposition[0] - touches.screenX);
            if (Math.abs(changeX) > 20) {
                console.log('Math.abs(changeX)>20', Math.abs(changeX));
                changeX = 0;
            }
        }
        if (lastposition[1]) {
            console.log('lastpostion[1]', lastposition[1]);
            changeY = (lastposition[1] - touches.screenY);
            if (Math.abs(changeY) > 20) {
                changeY = 0;
            }
        }
        var shanBtn = obj.get('shan-btn');
        if (window.getComputedStyle(todoList).getPropertyValue('left') >= shanBtn.clientWidth) {
            console.log('shanbtn bigger');
            position[0] = shanBtn.clientWidth;
        }
        lastposition = [touches.screenX, touches.screenY];
        position[0] -= changeX;
        position[1] -= changeY;

        todoList.style.left = position[0] + 'px';
        todoList.style.top = position[1] + 'px';
        e.preventDefault();
        console.log(todoList.style.left, todoList.style.top);
        console.log(touches)
    });

    todoList.addEventListener('touchstart', function(e) {



        touchDown = true;
        console.log('touched')
    });
    todoList.addEventListener('touchend', function(e) {


        touchDown = false;
        console.log('touchend');
    });
    todoList.addEventListener('mousemove', function(e) {


        if (!touchDown) {
            return false;
        }
        var touches = e || e.targetTouches[0];

        console.log('touchmove', touches)
        var changeX = 0,
            changeY = 0;
        if (lastposition[0]) {
            console.log('lastpostion[0]', lastposition[0]);
            changeX = (lastposition[0] - touches.screenX);
            if (Math.abs(changeX) > 20) {
                console.log('Math.abs(changeX)>20', Math.abs(changeX));
                changeX = 0;
            }
        }
        if (lastposition[1]) {
            console.log('lastpostion[1]', lastposition[1]);
            changeY = (lastposition[1] - touches.screenY);
            if (Math.abs(changeY) > 20) {
                changeY = 0;
            }
        }
        lastposition = [touches.screenX, touches.screenY];
        position[0] -= changeX;
        position[1] -= changeY;

        todoList.style.left = position[0] + 'px';
        todoList.style.top = position[1] + 'px';
        e.preventDefault();
        console.log(todoList.style.left, todoList.style.top);
        console.log(touches)
    });

    todoList.addEventListener('mousedown', function(e) {



        touchDown = true;
        console.log('touched')
    });
    todoList.addEventListener('mouseup', function(e) {


        touchDown = false;
        console.log('touchend');
    });
}
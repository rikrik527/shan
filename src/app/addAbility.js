var obj = require('./getall');
var object = require('./object');

// var ability = ability || {};
// ability = {
//     submit: function() {

//     },
//     parts: function() {

//     }

// }
module.exports.parts = function() {
    document.querySelector('.todo').addEventListener('click', addParts, false);
    document.querySelector('#todo-submit-btn').addEventListener('click', submitParts)
    document.querySelector('#todo-reset-btn').addEventListener('click', resetParts);
    var add = 0;
    var adding = false;
    var parts = [];
    var total;
    var todoparts = document.querySelector('.todo-parts');

    function addParts() {
        adding = true;

        console.log('add')



        console.log('todoparts returning')
        add++;
        total = parts.push(add);
        console.log(add, total);
        if (add < 5) {
            document.querySelector('.todo-set').textContent = '準備為雨珊加' + add + '個零件!';
            document.querySelector('.todo-set').classList.add('todoset');
            setTimeout(() => {
                obj.get('.todo-set').classList.remove('todoset');
            }, 2000);
        } else {
            document.querySelector('.todo-set').textContent = '加油!繼續增加中!準備為雨珊加' + add + '個零件!';
            document.querySelector('.todo-set').classList.add('todoset');
            setTimeout(() => {
                obj.get('.todo-set').classList.remove('todoset');
            }, 2000);
        }

    };

    function submitParts() {
        if (adding == true) {
            console.log('submit', parts, add, total);
            todoparts.value += add;
            parts = [];

            add = 0;
            document.querySelector('.todo-set').textContent = '已經為雨珊加了' + total + '個零件!';
            document.querySelector('.todo-set').classList.add('todoset');
            setTimeout(() => {
                obj.get('.todo-set').classList.remove('todoset');
            }, 2000);

        } else {
            document.querySelector('.todo-set').textContent = '你還沒有為雨珊攤加任何東西哦';
            document.querySelector('.todo-set').classList.add('todoset');
            setTimeout(() => {
                obj.get('.todo-set').classList.remove('todoset');
            }, 2000);
        }
        adding = false;

    }

    function resetParts() {
        console.log('reset', parts, add, total)
        parts = [];
        add = 0;

        document.querySelector('.todo-set').textContent = '已取消';
        document.querySelector('.todo-set').classList.add('todoset');
        setTimeout(() => {
            obj.get('.todo-set').classList.remove('todoset');
        }, 2000);
        adding = false;
    }
    var todo = document.querySelector('.todo');
    todo.onmouseover = function() {
        console.log('mouseover')
        document.querySelector('.todo-set').textContent = '為雨珊加點零件吧!';
        var todoparts = document.querySelector('.todo-parts');

    }

}
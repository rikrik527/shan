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

    function addParts() {
        var todoparts = document.querySelector('.todo-parts');
        var add = 0;
        var parts = [];
        return function() {
            add++;
            var total = parts.push(add);
            console.log(add, total);
            todoparts.value += total;
            if (document.querySelector('#todo-submit-btn').onsubmit) {
                todoparts.value += total;

                console.log(total);
            } else if (document.querySelector('#todo-reset-btn').onreset) {
                parts = [];
                console.log(parts);
            }
        }
    };

    var todo = document.querySelector('.todo');
    todo.onmouseover = function() {
        console.log('mouseover')
        document.querySelector('.todo-set').textContent = 'add parts for shan li';
        var todoparts = document.querySelector('.todo-parts');
        var sumbit = document.querySelector('#todo-submit-btn').setAttribute('parts', true);
    }
    todo.onmouseout = function() {
        console.log('mouseout');
        document.querySelector('.todo-set').textContent = '';
    }
}
var obj = require('./getall');
var object = require('./object');
exports.choice = function(a, b) {
    var answer = this.answer;
    if (a > b) {
        answer = "sign";
    } else if (b < a) {
        answer = "greeting";
    }

}
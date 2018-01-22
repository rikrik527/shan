var obj = require('./getall');
var object = require('./object');
exports.choice = function(a, b) {

    if (a > b) {
        return alert(JSON.stringify(this.conversation["sigh"]));
    } else if (b < a) {
        return alert(JSON.stringify(this.conversation["greeting"]));
    }

}
var update = require('./update');
var helper = helper || {};

helper = {
    updateLi: function() {
        function create() {
            console.log('created')
            var div = document.createElement('div');
            div.className = 'shan-conversation';
            $('.shan-talk').append(div);
            div.innerHTML = this.month;

        }
        create.call(update);
    }
}
module.exports = helper;
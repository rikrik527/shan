var update = require('./update');
var helper = helper || {};

helper = {
    updateLi: (function() {
        var excute = false;
        return function(){
            if(!excute){
                excute = true;
                console.log('created');

            var div = document.createElement('div');
            div.className = 'shan-conversation';
            $('.shan-talk').append(div);
            switch(this.dater()){
                case '316':div.innerHTML = this.march16;
                console.log('excuted')
                break;
                case '317':div.innerHTML = this.march17;
                break;
                case '318':div.innerHTML = this.march18;
                break;
                case '319':div.innerHTML = this.march19;
                console.log('excuted')
                break;
                case '320':div.innerHTML = this.march20;
                break;
                case '321':div.innerHTML = this.march21;
break;
            }}}})(),

        }









module.exports = helper;
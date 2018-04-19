var update = require('./update');
var obj = require('./getall');
var helper = helper || {};

helper = {
    description:function(elem,elem2){
        var object1 = obj.get(elem);
         var top = object1.offsetHeight;
        var left = object1.offsetWidth;
        var object = obj.get(elem2);
        object.style.top = (top+100)+'px';
        object.style.left = (left)+'px';
    },
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
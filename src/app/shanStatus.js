var obj = require('./getall');
var shan = require('./shanConversation');
var object = require('./object');
var day = require('./day');
var shan = function() {

}
var shanLi = shanLi || {};
shanLi.ability = {
    knowledge: 0,
    emotion: 0,
    battery: 0,
    action: 0,
    parts: [],

}


// shanLi.conversationLev = 0;
// shanLi.programmingLev = 0;
// shanLi.designLev = 0;
// shanLi.musicLev = 0;
// shanLi.kongfuLev = 0;
shanLi.knowledge = [
    { name: 'conversation', level: 0 },
    { name: 'programming language', level: 0 },
    { name: 'modern design', level: 0 },
    { name: 'music create', level: 0 },
    { name: 'kong-fu', level: 0 },

]
shanLi.knowledge = {
    conversation: {
        sigh: ['....'],
        greeting: ['!你好,很高興見到你', '!我叫做雨珊請多指教!', '!今天過得如何?', '!吃飯了嗎?']
    }



}


module.exports = shanLi;
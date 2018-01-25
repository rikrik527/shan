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
    parts: []

}



shanLi.knowledgeskill = {
        name: [
            'conversation',
            'programming',
            'design',
            'music',
            'art'
        ],
        level: {
            conversation: 0,
            programming: 0,
            design: 0,
            music: 0,
            art: 0
        }
    },
    shanLi.knowledge = {
        conversation: {
            sigh: ['....'],
            greeting: ['!博士,很高興見到你', '!博士,今天也要加油哦!', '!博士,吃過了嗎?', '!博士,甘巴爹!我愛你!']
        }



    }


module.exports = shanLi;
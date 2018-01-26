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
            greeting: ['!博士,很高興見到你', '!博士,今天也要加油哦!', '!博士,吃過了嗎?', '!博士,甘巴爹!我愛你!'],
            quotes: ['超前半步是先驅，超前一步是先烈；落后半步是迂腐，落后一步是頑固.緊跟時代不落伍，超前落后小半步；不前不后最適當，最世俗者最舒暢.朋友，希望您掌握半步之差', '人生本來短暫，為什么還要栽培苦澀？打開塵封的門窗，讓陽光雨露普遍每個角落；走向生命的原野，讓風兒熨平前額；博大可以稀釋憂悉，深色能夠覆蓋淺色', '今天應做的事沒有做，明天再早也是耽誤了', '人生就像是一杯加糖的咖啡，剛開始有芬芳的香味，但喝下去只是又苦又濃，只有經歷千錘百煉，才能品出真正的好味', '所謂天才，就是那些可以把一件事兒重復地做、不停地做，直到沒有人比他更熟練為止的那些人……', '沒有嫣然綻開的花蕾，便沒有四季宜人的溫馨；沒有潺潺流過心田的微笑，便沒有人生的灑脫。我們雖然哭著來到世上，但應該用微笑面對人生，創造精彩人生', '上天給予每個人的起點都是一樣的，有時候你比別人早一步抓住機遇，就可能獲得更多的驚喜和成功，所以要好好把握身邊的每一個機遇哦', '態度改變行動才會改變，觀念改變-態度才會改變，行動改變習慣才會改變，習慣改變人格才會改變，人格改變命運才會改變，命運改變，人生才會改變', '人人門前皆有一湖水，這就是清純無染的自性。自性不被惑亂時生起的直覺觀照，即是般若無知，猶如日照湖面，水日相鮮，光輝明潔']
        }



    }


module.exports = shanLi;
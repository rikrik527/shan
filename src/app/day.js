var obj = require('./getall');
var shan = require('./shanConversation');
var day = day || {};
day.command = {
    mon: 1,
    tue: 2,
    wed: 3,
    thr: 4,
    fri: 5,
    sat: 6,
    sun: 0,
    time: function(words) {
        this.words = words;
        var dayTime = ['早安', '午安', '晚安'];
        var dateNow = new Date();
        var getHours = dateNow.getHours();
        if (getHours >= 4 && getHours <= 12) {
            words = dayTime[0];
            console.log('morining')

        };
        if (getHours >= 13 && getHours <= 18) {
            words = dayTime[1];
            console.log('afternoon')
        };
        if (getHours >= 19 && getHours <= 3) {
            words = dayTime[2];
            console.log('evening');
        };
        return words;
    },
    day1: '雨珊,似乎沒有因為電流而故障,看起來狀況好極了,請開始為雨珊添加一些"待辦事項".'

}

module.exports = day;
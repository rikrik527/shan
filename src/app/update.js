var update = update || {};

var update = {
    d: function () {
        var t;
        return t = new Date()
    },
    year: function () {
        return this.d().getFullYear()
    },
    date: function () {
        return this.d().getDate()
    },
    month: function () {
        return this.d().getMonth() + 1
    },
    dater: function () {
        var c = this.month().toString().concat(this.date().toString())
        return c;
    },
    march16: '2018,3,16:加入了更新紀錄,愛的能源已經可以發射,但是還有bug也加入了碰撞物件函式,oh yeah~我學會了一個招式了,哈哈哈哈,就是只把函式執行一次的招式',
    march17: '2018,3,17:圖書館好多人啊,滿滿早上都是人,一直到下午四點多還是人,不過下午四點有個位置,而且是那個有插座在旁邊德～看沒人馬上佔位置,那今天的主要做的功能是把先前的愛的弓箭的函式做了一些改動,為了要更增加遊戲性,(這只是芝麻小菜拉,不過對我來說還是有難度),然後～～～這個函式會動用到很龐大的coding,意思就是說要打很多字,主要就是把愛的弓箭給細化了,還沒做出來所以不說了',
    march18:'2018,3,18:吼,今天做功能,那個hit detection 就是出不來,啊明明就已經碰撞了,明天找另一個方法來測試碰撞,如果這個測試碰撞做不出來(基本上是不會做不出來的,只要我想寫什麼就一定寫得出來,多虧了我們的google大神,但是有些高智商人類才看得懂的code,那還真是沒辦法@@ ,重點是我的數學太差了,我也沒有資工背景,哈哈哈)哦不,我是說....做不出來就不用做下一個功能了,等到功能越來越多按照我腦中的想法呈現出來之後!WOOOOW!!THIS WILL BE ASWOME!!!!'
}



module.exports = update;
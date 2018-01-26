var obj = require('./getall');
var day = require('./day');
var shanLi = require('./shanStatus');
var say = require('./say');
var shan = shan || {};
shan.talk = {


    shanConversation: ['有,你好嗎?', '看成好朋友', '好不,但', '不要常見面,對,我媽是最保護我的人,你要記得每個女孩子,都是父母的寶貝,你也是,等...我登入電腦', '嗯呀..有些事情過去就過了,我懂', '我也會,但是你心不要放在我這,或感請暫時停', '你可以,像你今天這樣,我不敢跟你碰面', '那很好,確定了一件事情,我會鼓勵你,但是我們有各自的生活,你要記著,面對你我會想把你推開可能是因為,我怕我們又在一起了,我真的不想要,你知道嗎', '嗯,現在真的很累,我以為,我醒來以為事隔天早上了,然後要起來畫畫,我媽擔心你,又擔心我跟網友,可是我沒有對象說話,我會瘋掉', '還好啦,畢竟你都上新聞啦,要想想現實面嘛', '考!我電腦又摔到,被貓推到,臭貓,颳風的天,過了就好,過了就好,我很想哭,珊瑚海,可是我不愛妳了'],
    talkingDialog: function() {
        var div = obj.create('div');
        var div2 = obj.create('div');
        div.className = 'shan-talk';

        var shanBtn = obj.get('.shan-btn');
        shanBtn.appendChild(div);



    },


    time: 0,
    random: function(num) {
        return Math.floor(Math.random() * num);
    },
    // moment: function() {
    //     var words = this.words;
    //     var txt = document.createTextNode(words);
    //     var dayTime = ['早安', '午安', '晚安'];
    //     var dateNow = new Date();
    //     var getHours = dateNow.getHours();
    //     if (getHours >= 4 && getHours <= 12) {
    //         words = dayTime[0];
    //         console.log('morining')

    //     };
    //     if (getHours >= 13 && getHours <= 18) {
    //         words = dayTime[1];
    //         console.log('afternoon')
    //     };
    //     if (getHours >= 19 && getHours <= 3) {
    //         words = dayTime[2];
    //         console.log('evening');
    //     };
    //     console.log(words);
    //     return words;
    // },



    shanLiManner: ['哈囉!你好!我可以為您服務什麼呢', '你好,我是雨珊', '你好'],
    that: this,
    createLi: function(a, b) {
        var yushan = '雨珊: ';
        console.log('this', this, 'that', this);
        var sigh = 'sigh';
        var greeting = 'greeting';
        var quotes = 'quotes';
        var sigh = this.knowledge['conversation'][sigh];
        var greeting = this.knowledge['conversation'][greeting];
        var quotes = this.knowledge['conversation'][quotes];
        // greeting and sigh refers to shanLi.knowledge.conversation
        if (a > b) {
            console.log('a')
            create().innerHTML = yushan + '!' + greeting[qq()];
            speech(moment() + greeting[qq()])
        } else if (a < b) {
            console.log('b')
            create().innerHTML = yushan + moment() + '!' + quotes[jj()];
            speech(moment() + quotes[jj()]);
        }

        function qq() {
            return Math.floor(Math.random() * greeting.length);
        }

        function jj() {
            return Math.floor(Math.random() * quotes.length);
        }

        function create() {
            var div = document.createElement('div');
            div.className = 'shan-conversation';
            var shanTalk = document.querySelector('.shan-talk');
            var txt = shanTalk.appendChild(div);
            return txt;
        }

        function moment() {
            var words = '';
            var c = document.createTextNode(words);
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
            if (getHours >= 19 && getHours <= 24 || getHours <= 3) {
                words = dayTime[2];
                console.log('evening');
            };
            console.log(words);
            return words;
        }

        function speech(say) {
            if ('speechSynthesis' in window) {
                var utterance = new SpeechSynthesisUtterance(say);
                speechSynthesis.speak(utterance);
            }
        }

        console.log('finished li');

    }

}





module.exports = shan;
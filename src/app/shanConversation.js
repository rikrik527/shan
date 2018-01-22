var obj = require('./getall');
var day = require('./day');
var shanLi = require('./shanStatus');
var say = require('./say');
var shan = shan || {};
shan.talkBot = {

    yushan: '雨珊: ',
    shan: '雨珊',
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
    moment: function() {
        var words = this.words;
        var txt = document.createTextNode(words);
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
        console.log(words);
        return words;
    },



    shanLiManner: ['哈囉!你好!我可以為您服務什麼呢', '你好,我是雨珊', '你好'],
    createLi: function() {
        var div = document.createElement('div');
        div.className = 'shan-conversation';
        var shanTalk = document.querySelector('.shan-talk');
        shanTalk.appendChild(div);
        div.innerHTML = this.yushan + this.moment() + '!' + this.shanLiManner[this.random(3)] + shanLi.shanLi.knowledge.conversation['greeting'];
        console.log('finished li')
    }
}

function speech(say) {
    if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(say);
        speechSynthesis.speak(utterance);
    }
}



module.exports = shan;
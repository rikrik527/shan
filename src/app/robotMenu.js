var obj = require('./getall');
var requrestAnimationFrame = require('./requestAnimationFrame');
var transform = require('./transform');
var transition = require('./transform');
var Hammer = require('hammerjs');
var speech = require('./speech');
var memories = require('../audio/memories.mp3');
var epic = require('../audio/epic.mp3');
var transform = require('./transform');
var fixSet = require('./robotskill/fixSet');

var robotMenu = robotMenu || {};
robotMenu = {
    todoIcon: obj.get('.todo-icon'),
    iconFix: obj.get('.icon-fix'),
    iconPersonal: obj.get('.icon-personal'),
    iconService: obj.get('.icon-service'),
    iconTalkToYuShan: obj.get('.icon-talk-to-yushan'),
    todoList: obj.get('.todo-list'),
    iconClose: obj.get('.icon-close-todo'),
    right: obj.get('.right'),
    left: obj.get('.left'),
    todoIconSlide: obj.get('todo-icon-slide'),

    hands: obj.getAll('.hands0,.hands1, .hands2, .hands3, .hands4, .hands5, .hands6, .hands7, .hands8, .hands9'),

    todoTitle: obj.get('.todo-title'),
    resetBtn: obj.get('.reset-btn'),
    submitBtn: obj.get('.submit-btn'),
    fireball: obj.get('.fireball'),

    shanLiOutline: obj.get('.shanli-outline'),
    shanLi: obj.getId('shan-li'),
    shanLiEnergy: obj.get('.shanli-energy'),
    shanLiEnergyBar: obj.get('.shanli-energy-bar'),
    iconEnergy: obj.get('.icon-energy'),
    bigWords: obj.get('.big-words'),
    touchBc: obj.get('.touch-boxcontrol'),
    power: obj.get('.power'),
    handle1: obj.get('.handle1'),
    gameAction: obj.get('.game-action'),
    shooting: obj.getId('shooting'),
    robotOutLine: obj.get('.robot-outline'),
    robotSaying: obj.get('.robot-saying'),
    robotTriangle: obj.get('.robot-triangle'),
    robotSpeak: obj.get('.robot-speak'),
    robot: obj.getId('robot'),
    robotEnergy: obj.get('.robot-energy'),
    robotEnergyBar: obj.get('.robot-energy-bar'),
    canvas: obj.getId('canvas'),
    shanBtn: obj.get('.shan-btn'),
    playerLevel: obj.get('.player-level'),
    playerMoeny: obj.get('.player-money'),
    playerExperience: obj.get('.player-experience'),
    background4:obj.get('.background-4'),
    background:obj.get('.background'),
    background3:obj.get('.background-3'),
    crossHair:obj.get('.cross-hair'),
    robotE: 100,
    // init
    init:function(){
        this.bigWords.style.display = 'none';
        this.robotSaying.style.display = 'none';
        this.crossHair.style.display ='none';
        this.robot.classList.add('robot-normal-instance')
    },
    robotEStatus: function() {
        this.robotEnergyBar.style.width = this.robotE + 'px';
    },
    // iconrobotfix is the fix button click it todolist for fixing shan will pop up , inside todolist there are small functions each function is a robot skill set
    iconRobotFix: function() {
        this.iconFix.onclick = (function() {
            var todoList = obj.get('.todo-list');
            var iconFix = obj.get('.icon-fix');
            var click = 0;
            return function() {
                click++;
                if (click == 3) click = 1;
                switch (click) {
                    case 1:
                        todoList.style.display = 'block';
                        todoList.classList.add('todolistshow');
                        iconFix.style.cssText = 'transform:scale(1.5)';
                        break;
                    case 2:
                        todoList.style.display = 'none';
                        todoList.classList.remove('todolistshow');
                        iconFix.style.cssText = 'transform:scale(1)';
                        break;
                }
            }
        })();
    },
//iconpersonal click this will jump into fighting instance and will go straight to fight scene
    iconRobotPersonal: function() {
        this.iconPersonal.onclick = (function() {
            var click = 0;
            var robot = obj.getId('robot');
            var iconPersonal = obj.get('.icon-personal');
            var self = this;
            return function() {
                click++;
                if (click == 3) click = 1;
                switch (click) {
                    case 1:if(

                        robot.hasAttribute('class')){
                        robot.removeAttribute('class');
                        robot.setAttribute('class','robot-normal-to-fight-instance');
                        robotMenu.talk('戰鬥模式已經啟動',3000);

                            robotMenu.paralax();
                            console.log('paralax');

                    }

                        iconPersonal.style.cssText = 'transform:scale(1.5)';
                        break;
                    case 2:
   //needs to add here later on

                        iconPersonal.style.cssText = 'transform:scale(1)';
                        break;
                }
            }
        })();
    },
    // paralax effect for going to fight scene
    paralax:function(){
        // a paralax effect its useless
        console.log('paralax actived');
        var fly = 11;
        var back = 0;
        var op = 0;
        var background4 = obj.get('.background-4'),
        background3 = obj.get('.background-3'),
        robotOutLine = obj.get('.robot-outline'),
        background = obj.get('.background');

        return (function(){
            console.log('return');
            var id = setInterval(function(){
                fly++;
                back--;
                op+=0.1;
                console.log('setinterval',back,fly,op)
                background4.style.right = fly/2+'%';
                robotOutLine.style.cssText='margin:-50px 0 0 -50px';
                robotOutLine.style.left = fly +'%';
                robot.style.transform = 'scale('+op+')';
                robotOutLine.style.top = fly+'%';
                background.style.transform = 'translatex('+back+'px)';
                background3.style.transform = 'translatex('+fly/2+'px';
                if(fly >= 50 || op >= 2){
                    console.log('interval clear')
                    clearInterval(id);
                    var awakeSecondSection = obj.get('.awake-second-section');
                    awakeSecondSection.style.transition ='all .5s linear'
                    awakeSecondSection.style.left ='0%';
                }
            },50);
        })();

    },
    talk:function(word,time){
        //talk function use to speech words
        var robotSaying = obj.get('.robot-saying');
     robotSaying.style.display = 'block';
     var txt = document.createTextNode(word);
     var div = document.createElement('div');
     robotSaying.appendChild(div);
     div.classList.add('robot-speak');
     this.speech(word);
     div.innerHTML = word;
     setTimeout(() => {
         div.innerHTML = '';
         div.style.display = 'none';
         div.parentNode.removeChild(div);
         robotSaying.style.display = 'none';
         console.log('removed talk');
     }, time);
    },
    speech:function(say){
        // function speech import into other function to speak out
    if('speechSynthesis' in window){
        var utterance = new SpeechSynthesisUtterance(say);
        speechSynthesis.speak(utterance);
    }
    },
    topMenu: function() {
        // menu for icon fix there are 10
        this.hands[0].onclick = (function() {
var cross = 0;
            return function(){
                if (cross == 3) cross = 1;
                console.log('love return',cross);
                switch (cross) {
                    case 1:
                        robotMenu.loveEnergy();
                        break;
                    case 2:
                    robotMenu.removeLoveEnergy();
                        break;
                } cross++;
            }

        })();
        // this.hands[1].onclick = (function() {
        //     var baseball = 0;
        //     if (baseball == 3) baseball = 1;
        //     switch (baseball) {
        //         case 1:
        //             this.baseBallRule();
        //             break;
        //         case 2:
        //             this.removeBaseBallRule();
        //             break;
        //     }
        // })();
        // this.hands[2].onclick = (function() {
        //     var breath = 0;
        //     if (breath == 3) breath = 1;
        //     switch (robotBreath) {
        //         case 1:
        //             this.robotBreath();
        //             break;
        //         case 2:
        //             this.removeRobotBreath();
        //             break;
        //     }
        // })();
        // this.hands[3].onclick = (function() {
        //     var electric = 0;
        //     if (electric == 3) electric = 1;
        //     switch (electric) {
        //         case 1:
        //             this.electric100();
        //             break;
        //         case 2:
        //             this.removeEletric100();
        //             break;
        //     }
        // })();
        // if (playerLevel == 2) {
        //     hands[4].onclick = (function() {
        //         console.log('player-level')
        //     })()
        // }
    },
    // skillset functions below
    love:[ '愛的弓箭','愛的花束','愛的光束','機工呼吸','棒球的精髓','觸電一百'],
    submit: false,
    skillSet1:false,
    getReady:false,
    fired:false,

    loveEnergy:function(){
        this.submit = true;
        this.skillSet1 = true;
        var li = document.createElement('li');
        li.className = 'outside';
        this.todoTitle.appendChild(li);
        li.innerHTML = this.love[0];
        var outside = obj.get('.outside');
        outside.insertAdjacentHTML('afterbegin','<span class="love"></span>');
        console.log('loveenergy been excuted',this.skillSet1,this.submit)

    },
    removeLoveEnergy: function() {
        this.submit = false;
        this.skillSet1 = false;
        var li = obj.get('.outside');
        li.parentNode.removeChild(li);
        console.log('removeloveenergy',this.submit,this.skillSet1)
    },
    submit:function() {
        this.submitBtn.onclick = function(){
            console.log('submitbtn clicked',robotMenu.skillSet1,robotMenu.submit)
            if (!robotMenu.submit) {
                return false;
                console.log('not gonna happen');
            }
            robotMenu.todoList.style.display = 'none';
            robotMenu.robot.classList.remove('robot-change');
            robotMenu.iconFix.style.transform = 'scale(1)';
            robotMenu.iconPersonal.style.transform = 'scale(1)';
            robotMenu.iconService.style.transform = 'scale(1)';
            robotMenu.iconTalkToYuShan.style.transform = 'scale(1)';
            if(robotMenu.skillSet1){
                robotMenu.skillSet1 = false;
                robotMenu.getReady = true;
                // make skillset1 back to false so we can count it again next round
                console.log('skillset1');
                robotMenu.showTime(0,'robot-cross-get');//this function has a class added to robot which will let robot get cross action and will be removed in 7seconds
                if(robotMenu.getReady == true){
                   robotMenu.removeLoveEnergy();
                   console.log('removed loveenergy')
                }
                fixSet.crossFire();

            }
        }
    },
    // decorate function use to make effect in background its purpose is to control classes and robotmenu.love[num],there are multi settimeout the parameters are set
        showTime:function(num,cls){
            // first call var love array number and than call class
setTimeout(()=>{
    this.bigWords.style.display = 'block';
    this.bigWords.classList.add('leftright');
    this.bigWords.textContent = this.love[num];
    this.speech(this.love[num]);
},2000);
setTimeout(()=>{
    this.bigWords.classList.remove('leftright');
    console.log('remove-leftright')
},3000);
setTimeout(() => {
    this.robot.classList.add(cls);
    console.log('add',cls,'4sec');
    this.talk(this.love[num],4000);// speech skillset 4 secs later
}, 4000);
setTimeout(()=>{
    this.robot.classList.remove(cls);// removing class after 7 seconds
    console.log('removed',cls,'7sec');
},7000)
        },

        //addDiv is a function allows you to add div and append it to an element you choose the first argument is classname you want to assign to newly created div the second arguments is the elem you want the div to append to
        addDiv:function(cls,elem){//add div and append to its parent element first parameter is class second is element you want to append
            var div = document.createElement('div');
            div.className = cls;
    var el = document.querySelector(elem);
    el.append(div);
    console.log('appended')

        },

// a fight todolist is depandecy is icon-personal
    fightList: function() {
        this.shanBtn.insertAdjacentHTML('afterbegin', '<section class="fight-list"><span class="icon-close-fight"></span><div class="fight-icon"><div class="fight-right"></div><div class="fight-left"></div><div class="fight-icon-slide"></div></div><ul class="fight-title"></ul><input type="reset" class="fight-reset-btn"><input type="submit" class="fight-submit-btn"></section>');

    },
    increase: '',
    decrease: '',
    speed: 1,
    deg: 0,


    //robot first fly down the openning scene begins from here
    robotFlyDown:function(){

        this.robotOutLine.style.cssText ='transition:all 3s linear;top:-27%;left:35%';
        this.robotSaying.style.display = 'none';
        this.robot.classList.add('robot-fly-down');
        console.log('robot-fly-down')
     setTimeout(() => {
        this.robotOutLine.style.top = '37%';
        console.log('robot outline style 37 3secs')
     }, 1000);


      setTimeout(()=>{
        this.robot.classList.remove('robot-fly-down');
        console.log('robotflydown removed add robot talk 4 secs')
        this.robot.classList.add('robot-landing-open-mask');
      },4000)

setTimeout(() => {
    this.robot.classList.remove('robot-landing-open-mask');
    this.robot.classList.add('robot-nice-to-meet-you');
    this.talk('哦,伊,哦,初次見面多多指教',3000);
    console.log('romove robot talk add robot introduce 8 secs')
}, 5000);
setTimeout(()=>{
    this.robot.classList.remove('robot-nice-to-meet-you');
    this.robot.classList.add('robot-fireworks');
    this.talk('我是原型機器人1000',3000);
obj.get('.robot-1000').innerHTML = '原型機器人'+'</br>1000';



},8000);
setTimeout(()=>{
$('.robot-1000').text('');
document.querySelector('.robot-1000').parentNode.removeChild(document.querySelector('.robot-1000'));//remove robot-1000
this.robot.classList.remove('robot-fireworks')
   this.robot.classList.add('robot-that-is-shan');
    this.talk('咿,呦,那是雨珊,那是雨珊,那是雨珊',4000);

},13000);
// setTimeout(()=>{
//     this.robot.classList.remove('robot-that-is-shan');
//     this.robot.classList.add('robot-say-long-story1')
//     this.talk('說來話長...我們是在前往火星的途中遭受到隕石擊中我們駕駛的宇宙太空挺j-725號',5000);
//     this.talk('想起來就他媽的嘔',2000);
// },19000)
// ;

// this.talk('我們被迫降在距離火星2000萬英里的,宇宙代號為Devil planet的小型行星',5000);
//this.talk('......',3000);
// this.talk('你的主要目標有四個!',2000);
// this.talk('修理太空船,修理雨珊,將前來干擾的Devil planet的異形生物擊退','順利從Devil planet脫身',5000);
//         },23000)
// setTimeout(() => {

//     this.robot.classList.add('robot-right');
//     this.robotOutLine.style.cssText='transition:all 4s linear;top:17%;left:11%;'
// }, 17000);
setTimeout(()=>{
    this.robot.classList.remove('robot-that-is-shan');
    this.robot.classList.add('robot-fly-turn');
    this.robotOutLine.style.cssText ='transition:all 4s linear;top:17%;left:11%'
    this.talk('請下達命令',2000);
},18000);




    }


}
module.exports = robotMenu;
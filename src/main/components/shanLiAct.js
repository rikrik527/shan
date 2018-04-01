var shan = require('./shanLi');
var obj = require('../getall');
var transform = require('../transform');
var transition = require('../transform');
var requestAnimationFrame = require('../requestAnimationFrame');
module.exports.shanAppear = function () {
    var shan = "<div class='shan-li-hair1'></div><div class='shan-li-hair2'></div><div class='shan-li-hair3'></div><div class='shan-li-head'><div class='shan-li-eyebrow'></div><div class='shan-li-eyebrow2'></div><div class='shan-li-eye'><div class='shan-li-eyeball'></div></div><div class='shan-li-eye2'><div class='shan-li-eyeball2'></div></div><div class='shan-li-nose'></div><div class='shan-li-lips'></div><div class='shan-li-mouth'><div class='shan-li-teeth'></div></div><div class='shan-li-lips2'></div></div><div class='shan-li-neck'></div><div class='shan-li-body'><div class='shan-li-mimi'></div><div class='shan-li-mimi2'></div></div><div class='shan-li-arm'></div><div class='shan-li-arm2'></div><div class='shan-li-lowarm'><div class='shan-li-hand'></div></div><div class='shan-li-lowarm2'><div class='shan-li-hand2'></div></div><div class='shan-li-stomache'></div><div class='shan-li-peegu'></div><div class='shan-li-leg'></div><div class='shan-li-leg2'></div><div class='shan-li-lowleg'><div class='shan-li-feet'></div></div><div class='shan-li-lowleg2'><div class='shan-li-feet2'></div></div><div class='shan-li-horse-hair'></div><div class='shan-li-horse-hair2'></div><div class='shan-li-horse-head'><div class='shan-li-horse-eye'><div class='shan-li-horse-eyeball'></div></div><div class='shan-li-horse-eye2'><div class='shan-li-horse-eyeball2'></div></div><div class='shan-li-horse-nose'></div><div class='shan-li-horse-lips'></div><div class='shan-li-horse-mouth'><div class='shan-li-horse-teeth'></div></div><div class='shan-li-horse-lips2'></div></div><div class='shan-li-horse-neck'></div><div class='shan-li-horse-neck2'></div><div class='shan-li-horse-body'></div><div class='shan-li-horse-sit'>愛</div><div class='shan-li-horse-sitside'></div><div class='shan-li-horse-sitside2'></div><div class='shan-li-horse-mask'></div><div class='shan-li-horse-circle'></div><div class='shan-li-horse-line'></div><div class='shan-li-horse-line2'></div><div class='shan-li-horse-line3'></div><div class='shan-li-horse-line4'></div><div class='shan-li-horse-line5'></div><div class='shan-li-horse-line6'></div><div class='shan-li-horse-frontleg'></div><div class='shan-li-horse-frontlowleg'><div class='shan-li-horse-feet'></div></div><div class='shan-li-horse-frontleg2'></div><div class='shan-li-horse-frontlowleg2'><div class='shan-li-horse-feet2'></div></div><div class='shan-li-horse-backleg'></div><div class='shan-li-horse-backleg2'></div><div class='shan-li-horse-backlowleg'><div class='shan-li-horse-backfeet'></div></div><div class='shan-li-horse-backlowleg2'><div class='shan-li-horse-backfeet2'></div></div><div class='shan-li-horse-tail'></div><div class='shan-li-horse-tail2'></div><div class='shan-li-horse-weapon'><div class='shan-li-horse-flag'>戒</div></div><div class='shan-li-horse-sword'></div><div class='shan-li-horse-weapon2'><div class='shan-li-horse-flag2'>律</div></div><div class='shan-li-horse-sword2'></div><div class='shan-li-horse-deco1'></div><div class='shan-li-horse-deco2'></div><div class='shan-li-horse-deco3'></div><div class='shan-li-horse-deco4'></div><div class='shan-li-horse-deco5'></div><div class='shan-li-horse-deco6'></div><div class='shan-li-horse-deco7'></div><div class='shan-li-horse-deco8'></div><div class='shan-li-horse-effect1'></div><div class='shan-li-horse-effect2'></div><div class='shan-li-horse-effect3'></div><div class='shan-li-horse-effect4'></div><div class='shan-li-horse-effect5'></div><div class='shan-li-horse-effect6'></div><div class='shan-li-horse-effect7'></div><div class='shan-li-horse-effect8'></div><div class='shan-li-horse-effect9'></div><div class='shan-li-horse-effect10'></div><div class='shan-li-horse-effect11'></div><div class='shan-li-horse-effect12'></div>";

    var shanBtn = obj.get('.shan-btn');
    shanBtn.insertAdjacentHTML('afterbegin', '<article class="shan-li-boxcontrol"></article>');
    var shanLiBc = obj.get('.shan-li-boxcontrol');
    shanLiBc.innerHTML = shan;

}
module.exports.shanProfile = function(){
    var img = require('../../images/shanli.png');
    var shanBtn = obj.get('.shan-btn');
    shanBtn.insertAdjacentHTML('afterbegin', "<div class='shan-lowbox'><div class='shan-name'>雨珊</div><div class='shan-photo'><img id='shan-image' alt='shan-profile-photo'></div><div class='shan-profile'>Height:165cm<br>Weight:70kg<br>Country:Taiwan</div><ul class='shan-status'><li class='shan-info'></li></ul></div>");
    var shanImg = obj.getId('shan-image');
    shanImg.src = img;
    var shanStatus = obj.get('.shan-status');
    var shanInfo = obj.get('.shan-info');
    var shanBioCount = 0;
    function shanText(){
        var bio = '姓名:雨珊<br>英文:Shan-Li<br>出生於一九九一.....';
        if(shanBioCount <= bio.length){
            shanInfo.innerHTML = bio.substring(0,shanBioCount);
            shanBioCount++;
        } else{
            window.clearInterval(shanId);
        }
    }
    var shanId = window.setInterval(shanText,100);
    shanText();
}

module.exports.shanToggle = function () {

    var shanLiBc = obj.get('.shan-li-boxcontrol');
    shanLiBc.addEventListener('mouseover', shanAnimate, false);
    shanLiBc.addEventListener('mouseout', shanRemove, false);
    shanLiBc.addEventListener('touchstart', shanAnimate, false);
    shanLiBc.addEventListener('touchend', shanRemove, false);

    console.log('toggle')
    function shanAnimate() {
        console.log('shananimate');
        var shHair1 = obj.get('.shan-li-hair1'),
            shHair2 = obj.get('.shan-li-hair2'),
            shHair3 = obj.get('.shan-li-hair3'),
            shHead = obj.get('.shan-li-head'),
            shEyeb = obj.get('.shan-li-eyeball'),
            shEyeb2 = obj.get('.shan-li-eyeball2'),
            shBody = obj.get('.shan-li-body'),
            shMimi = obj.get('.shan-li-mimi'),
            shMimi2 = obj.get('.shan-li-mimi2'),
            shArm = obj.get('.shan-li-arm'),
            shArm2 = obj.get('.shan-li-arm2'),
            shLowarm = obj.get('.shan-li-lowarm'),
            shLowarm2 = obj.get('.shan-li-lowarm2'),
            shPeegu = obj.get('.shan-li-peegu'),
            shLeg = obj.get('.shan-li-leg'),
            shLeg2 = obj.get('.shan-li-leg2'),
            shLowleg = obj.get('.shan-li-lowleg'),
            shLowleg2 = obj.get('.shan-li-lowleg2'),
            shHorseHr = obj.get('.shan-li-horse-hair'),
            shHorseH = obj.get('.shan-li-horse-head'),
            shHorseEb = obj.get('.shan-li-horse-eyeball'),
            shHorseEb2 = obj.get('.shan-li-horse-eyeball2'),
            shHorseNo = obj.get('.shan-li-horse-nose'),
            shHorseNe = obj.get('.shan-li-horse-neck'),
            shHorseBo = obj.get('.shan-li-horse-body'),
            shHorseSit = obj.get('.shan-li-horse-sit'),
            shHorseMask = obj.get('.shan-li-horse-mask'),
            shHorseline3 = obj.get('.shan-li-horse-line3'),
            shHorseline4 = obj.get('.shan-li-horse-line4'),
            shHorseline5 = obj.get('.shan-li-horse-line5'),
            shHorsefl = obj.get('.shan-li-horse-frontleg'),
            shHorseflow = obj.get('.shan-li-horse-frontlowleg'),
            shHorseFeet = obj.get('.shan-li-horse-feet'),
            shHorsefl2 = obj.get('.shan-li-horse-frontleg2'),
            shHorseflow2 = obj.get('.shan-li-horse-frontlowleg2'),
            shHorseFeet2 = obj.get('.shan-li-horse-feet2'),
            shHorseTail = obj.get('.shan-li-horse-tail'),
            shHorseFlag = obj.get('.shan-li-horse-flag'),
            shHorseFlag2 = obj.get('.shan-li-horse-flag2');
        try{
            shanLiBc.classList.add('shanliboxcontrol');
        shHair1.classList.add('shanlihair1');
        shHair2.classList.add('shanlihair2');
        shHair3.classList.add('shanlihair3');
        shHead.classList.add('shanlihead');
        shEyeb.classList.add('shanlieyeball');
        shEyeb2.classList.add('shanlieyeball2');
        shBody.classList.add('shanlibody');
        shMimi.classList.add('shanlimimi');
        shMimi2.classList.add('shanlimimi2');
        shArm.classList.add('shanliarm');
        shArm2.classList.add('shanliarm2');
        shLowarm.classList.add('shanlilowarm');
        shLowarm2.classList.add('shanlilowarm2');
        shPeegu.classList.add('shanlipeegu');
        shLeg.classList.add('shanlileg');
        shLeg2.classList.add('shanlileg2');
        shLowleg.classList.add('shanlilowleg');
        shLowleg2.classList.add('shanlilowleg2');
        shHorseHr.classList.add('shanlihorsehair');
        shHorseH.classList.add('shanlihorsehead');
        shHorseEb.classList.add('shanlihorseeyeball');
        shHorseEb2.classList.add('shanlihorseeyeball2');
        shHorseNo.classList.add('shanlihorsenose');
        shHorseNe.classList.add('shanlihorseneck');
        shHorseBo.classList.add('shanlihorsebody');
        shHorseSit.classList.add('shanlihorsesit');
        shHorseMask.classList.add('shanlihorsemask');
        shHorseline3.classList.add('shanlihorseline3');
        shHorseline4.classList.add('shanlihorseline4');
        shHorseline5.classList.add('shanlihorseline5');
        shHorsefl.classList.add('shanlihorsefrontleg');
        shHorseflow.classList.add('shanlihorsefrontlowleg');
        shHorseFeet.classList.add('shanlihorsefeet');
        shHorsefl2.classList.add('shanlihorsefrontleg2');
        shHorseflow2.classList.add('shanlihorsefrontlowleg2');
        shHorseFeet2.classList.add('shanlihorsefeet2');
        shHorseTail.classList.add('shanlihorsetail');
        shHorseFlag.classList.add('shanlihorseflag');
        shHorseFlag2.classList.add('shanlihorseflag2');
        } catch(err){
            console.log('Error on animate',err);
        }
    }

    function shanRemove() {
        console.log('shanremove');
        var shHair1 = obj.get('.shan-li-hair1'),
            shHair2 = obj.get('.shan-li-hair2'),
            shHair3 = obj.get('.shan-li-hair3'),
            shHead = obj.get('.shan-li-head'),
            shEyeb = obj.get('.shan-li-eyeball'),
            shEyeb2 = obj.get('.shan-li-eyeball2'),
            shBody = obj.get('.shan-li-body'),
            shMimi = obj.get('.shan-li-mimi'),
            shMimi2 = obj.get('.shan-li-mimi2'),
            shArm = obj.get('.shan-li-arm'),
            shArm2 = obj.get('.shan-li-arm2'),
            shLowarm = obj.get('.shan-li-lowarm'),
            shLowarm2 = obj.get('.shan-li-lowarm2'),
            shPeegu = obj.get('.shan-li-peegu'),
            shLeg = obj.get('.shan-li-leg'),
            shLeg2 = obj.get('.shan-li-leg2'),
            shLowleg = obj.get('.shan-li-lowleg'),
            shLowleg2 = obj.get('.shan-li-lowleg2'),
            shHorseHr = obj.get('.shan-li-horse-hair'),
            shHorseH = obj.get('.shan-li-horse-head'),
            shHorseEb = obj.get('.shan-li-horse-eyeball'),
            shHorseEb2 = obj.get('.shan-li-horse-eyeball2'),
            shHorseNo = obj.get('.shan-li-horse-nose'),
            shHorseNe = obj.get('.shan-li-horse-neck'),
            shHorseBo = obj.get('.shan-li-horse-body'),
            shHorseSit = obj.get('.shan-li-horse-sit'),
            shHorseMask = obj.get('.shan-li-horse-mask'),
            shHorseline3 = obj.get('.shan-li-horse-line3'),
            shHorseline4 = obj.get('.shan-li-horse-line4'),
            shHorseline5 = obj.get('.shan-li-horse-line5'),
            shHorsefl = obj.get('.shan-li-horse-frontleg'),
            shHorseflow = obj.get('.shan-li-horse-frontlowleg'),
            shHorseFeet = obj.get('.shan-li-horse-feet'),
            shHorsefl2 = obj.get('.shan-li-horse-frontleg2'),
            shHorseflow2 = obj.get('.shan-li-horse-frontlowleg2'),
            shHorseFeet2 = obj.get('.shan-li-horse-feet2'),
            shHorseTail = obj.get('.shan-li-horse-tail'),
            shHorseFlag = obj.get('.shan-li-horse-flag'),
            shHorseFlag2 = obj.get('.shan-li-horse-flag2');
try{
        shanLiBc.classList.remove('shanliboxcontrol');
        shHair1.classList.remove('shanlihair1');
        shHair2.classList.remove('shanlihair2');
        shHair3.classList.remove('shanlihair3');
        shHead.classList.remove('shanlihead');
        shEyeb.classList.remove('shanlieyeball');
        shEyeb2.classList.remove('shanlieyeball2');
        shBody.classList.remove('shanlibody');
        shMimi.classList.remove('shanlimimi');
        shMimi2.classList.remove('shanlimimi2');
        shArm.classList.remove('shanliarm');
        shArm2.classList.remove('shanliarm2');
        shLowarm.classList.remove('shanlilowarm');
        shLowarm2.classList.remove('shanlilowarm2');
        shPeegu.classList.remove('shanlipeegu');
        shLeg.classList.remove('shanlileg');
        shLeg2.classList.remove('shanlileg2');
        shLowleg.classList.remove('shanlilowleg');
        shLowleg2.classList.remove('shanlilowleg2');
        shHorseHr.classList.remove('shanlihorsehair');
        shHorseH.classList.remove('shanlihorsehead');
        shHorseEb.classList.remove('shanlihorseeyeball');
        shHorseEb2.classList.remove('shanlihorseeyeball2');
        shHorseNo.classList.remove('shanlihorsenose');
        shHorseNe.classList.remove('shanlihorseneck');
        shHorseBo.classList.remove('shanlihorsebody');
        shHorseSit.classList.remove('shanlihorsesit');
        shHorseMask.classList.remove('shanlihorsemask');
        shHorseline3.classList.remove('shanlihorseline3');
        shHorseline4.classList.remove('shanlihorseline4');
        shHorseline5.classList.remove('shanlihorseline5');
        shHorsefl.classList.remove('shanlihorsefrontleg');
        shHorseflow.classList.remove('shanlihorsefrontlowleg');
        shHorseFeet.classList.remove('shanlihorsefeet');
        shHorsefl2.classList.remove('shanlihorsefrontleg2');
        shHorseflow2.classList.remove('shanlihorsefrontlowleg2');
        shHorseFeet2.classList.remove('shanlihorsefeet2');
        shHorseTail.classList.remove('shanlihorsetail');
        shHorseFlag.classList.remove('shanlihorseflag');
        shHorseFlag2.classList.remove('shanlihorseflag2');
    }catch(err){
        console.log('remove is error',err)
    }
}


}

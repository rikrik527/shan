var obj = require('../getall');
var transform = require('../transform');
var transition = require('../transform');
var requestAnimationFrame = require('../requestAnimationFrame');
// module.exports.handControl = function(){

// }
module.exports.original = function(){

    var wrapper = obj.get('.wrapper');
    wrapper.insertAdjacentHTML('afterbegin',"<div class='hand-back-position'></div><div class='click-box'><div class='hand-boxcontrol'><div class='hand-thumb'><div class='hand-thumb2'></div></div><div class='hand-finger'><div class='hand-finger2'><div class='hand-finger3'></div></div><div class='hand-middle-finger'><div class='hand-middle-finger2'><div class='hand-middle-finger3'></div></div></div><div class='hand-four-finger'><div class='hand-four-finger2'><div class='hand-four-finger3'></div></div></div><div class='hand-small-thumb'><div class='hand-small-thumb2'><div class='hand-small-thumb3'></div></div></div></div></div></div>");
    var clickBox = obj.get('.click-box'),
    handT = obj.get('.hand-thumb'),
    handT2 = obj.get('.hand-thumb2'),
    handF = obj.get('.hand-finger'),
    handF2 = obj.get('.hand-finger2'),
    handF3 = obj.get('.hand-finger3'),
    handMf = obj.get('.hand-middle-finger'),
    handMf2 = obj.get('.hand-middle-finger2'),
    handMf3 = obj.get('.hand-middle-finger3'),
    handFf = obj.get('.hand-four-finger'),
    handFf2 = obj.get('.hand-four-finger2'),
    handFf3 = obj.get('.hand-four-finger3'),
    handSt = obj.get('.hand-small-thumb'),
    handSt2 = obj.get('.hand-small-thumb2'),
    handSt3 = obj.get('.hand-small-thumb3'),
    handBc = obj.get('.hand-boxcontrol'),
    handBpos = obj.get('.hand-back-position');

// var clickBox = obj.get('.click-box');
var mouseDown = false;
var lastposition = [null,null];
var topLeft = [0,0];

clickBox.onmousedown = function(e){
  mouseDown = true;
  console.log('down')
}
clickBox.onmouseup = function(e){
    mouseDown = false;
    console.log('mouse up');

}
clickBox.onmousemove = function(e){
    if(!mouseDown){
        return false;
    }
    console.log('mousemove');
    return (function(){
        console.log('return')
    if(lastposition[0]){
        var changeX = 0;
        console.log(lastposition);
        changeX = (lastposition[0] - e.clientX);
        if(Math.abs(changeX) > 20){
            changeX = 0;

        }

    }
    if(lastposition[1]){
        var changeY = 0;
        changeY = (lastposition[1] - e.clientY);
        if(Math.abs(changeY) > 20){
            changeY = 0;
        }
    }
    lastposition=[e.clientX,e.clientY];

    topLeft[0]-= changeX;
    topLeft[1]+= changeY;
    clickBox.style.left =topLeft[0]+'%';
    clickBox.style.top = topLeft[1]+'%';
    clickBox.style.zIndex = '999999';
    console.log(clickBox)

})();
}






function handChange() {

    handBc.classList.add('handboxcontrol1');
    handT2.classList.add('handthumb2');
    handMf.classList.add('handmiddlefinger1');
    handMf2.classList.add('handmiddlefinger2');
    handMf3.classList.add('handmiddlefinger3');
    handFf.classList.add('handfourfinger1');
    handFf2.classList.add('handfourfinger2');
    handFf3.classList.add('handfourfinger3');
    handSt.classList.add('handsmallthumb1');
    handSt2.classList.add('handsmallthumb2');
    handSt3.classList.add('handsmallthumb3');

}

function handChange2() {




    handMf.classList.add('handmiddlefinger1-s');

    handMf2.classList.add('handmiddlefinger2-s');

    handMf3.classList.add('handmiddlefinger3-s');

    handFf.classList.add('handfourfinger1-s');

    handFf2.classList.add('handfourfinger2-s');

    handFf3.classList.add('handfourfinger3-s');



}



function handOrigin() {
    handBc.classList.remove('handboxcontrol1');
    handMf.classList.remove('handmiddlefinger1');
    handMf2.classList.remove('handmiddlefinger2');
    handMf3.classList.remove('handmiddlefinger3');
    handFf.classList.remove('handfourfinger1');
    handFf2.classList.remove('handfourfinger2');
    handFf3.classList.remove('handfourfinger3');
    handSt.classList.remove('handsmallthumb1');
    handSt2.classList.remove('handsmallthumb2');
    handSt3.classList.remove('handsmallthumb3');



}
(function(){

setTimeout(handChange(),5000);
if(handChange){
    console.log('handchange');
    setTimeout(handOrigin(),5000);
    if(handOrigin){
        console.log('handorigin');
        setTimeout( handChange2(),5000);
        if(handChange2){
            console.log('handchange2');
            setTimeout(handOrigin(),5000);
            if(handOrigin){
                console.log('handorigin');
                setTimeout(handChange(),5000);
            }
        }
    }
}




return ;
})()
}
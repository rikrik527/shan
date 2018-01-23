var obj = require('./getall');
var object = require('./object');
var prologue = function() {};
prologue.slides = function(e) {
    document.onselectstart = function(e) {
        e.preventDefault();
        return false;
    }
    var touches = e.touches[0];
    var movePageY = e.pageY || touches.pageY;
    var slider = obj.getId('slider'),
        track = obj.getId('track');
    document.mousestate = 'up';
    document.touchstate = 'up';
    slider.touchstate = 'up';
    slider.mousestate = 'up';
    slider.lastMousePosY = null;
    slider.proposedNewPosY = 0;
    slider.percentage = null;


    slider.style.top = "0px";
    slider.style.height = "50px";
    track.style.top = "30%";
    track.style.height = "50%";

    document.onmousedown = function() {
        document.mousestate = 'down';
    }
    document.onmouseup = function() {
        document.mousestate = 'up';
        slider.mousestate = 'up';
    }
    document.ontouchstart = function() {

        document.touchstate = 'down';
    }
    slider.ontouchstart = function(e) {

        slider.lastMousePosY = movePageY;
        slider.touchstate = 'down';
        document.touchstate = 'down';
    }

    slider.onmousedown = function(e) {
        slider.lastMousePosY = movePageY
            // this is so that if you lift the mouse , move it and grab the slider again , it will not jump.
        slider.mousestate = 'down';
        document.mousestate = 'down';
    }
    slider.ontouchend = function() {

        slider.touchstate = 'up';
        document.touchstate = 'up';
    }
    var getAtInt = function getAtInt(ob, attr) {
        return parseInt(ob.style[attr], 10);
    }
    document.onmousemove = function(e) {
        if ((document.mousestate === 'down' || document.touchstate === 'down')) {
            slider.proposedNewPosY = getAtInt(slider, 'top') + movePageY - slider.lastMousePosY;
        }
    }
}
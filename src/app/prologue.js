var obj = require('./getall');
var object = require('./object');
var prologue = function() {};
prologue.slides = function(e) {
    document.onselectstart = function(e) {
        e.preventDefault();
        return false;
    };

    //create handles for elements that were instantiated in the HTML markup:
    var slider = document.getElementById('slider'),
        track = document.getElementById('track');

    //initial states variables, append to their elements:
    document.mouseState = 'up';
    slider.mouseState = 'up';
    slider.lastMousePosY = null;
    slider.proposedNewPosY = 0;


    //We will need to access the top and height properties of the slider and track.
    //Set them here initally rather than in CSS so that we can access them without getComputedStyle calls:
    slider.style.top = '0%';
    slider.style.height = '50px';
    track.style.top = '30%';
    track.style.height = '50%';

    //Rather than having mousedown and mouseup events add or remove handlers,
    //we have them set states. We require two functions for document-wide events, and
    //two functions for every slider added to the document. Here we have 4 functions and they
    //are never removed or re-assigned.

    //Document mouse event functions:
    document.onmousedown = function() {
        document.mouseState = 'down';
    };

    document.onmouseup = function() {
        document.mouseState = 'up';
        slider.mouseState = 'up';
    };

    //Slider mouse event functions:
    slider.onmousedown = function(e) {
        slider.lastMousePosY = e.pageY; //<-this is so that if you lift the mouse, move it and grab the slider again, it will not jump.
        slider.mouseState = 'down';
        document.mouseState = 'down';
    };

    slider.onmouseup = function(e) {
        slider.mouseState = 'up';
        document.mouseState = 'up';
    };

    //Helper function. Not strictly required, but will make the logic down the bottom
    //easier to follow by simplifying nested parens. It will get an element's style, ie. 10px, and return just the 10 as an integer:
    var getAtInt = function getAtInt(obj, attrib) {
        return parseInt(obj.style[attrib], 10);
    };

    document.onmousemove = function(e) {

        //Slider logic block. Any mouse movement on the document fires this handler.
        //The outermost if-statement checks to see if this (or potentially any other) slider
        //is being dragged. This is done by examining the state variables as set
        //above.

        //The first two of the inner if-comparisons check to make sure we only
        //drag the slider within the bounds of the track. If these conditions are
        //met, the top of the slider to the newly proposed Y coordinate. This is
        //done by adding the vertical delta of the cursor location from the previous
        //loop through here. Then storing the current mouse Y coordinate for next time
        //here.
        if ((document.mouseState === 'down') && (slider.mouseState === 'down')) {
            slider.proposedNewPosY = getAtInt(slider, 'top') + e.pageY - slider.lastMousePosY;

            if (slider.proposedNewPosY < 0) {
                slider.style.top = '0%';
            } else if (slider.proposedNewPosY > getAtInt(track, 'height') - getAtInt(slider, 'height')) {
                slider.style.top = getAtInt(track, 'height') - getAtInt(slider, 'height') + '%';
            } else {
                slider.style.top = slider.proposedNewPosY + '%';
            }

            slider.lastMousePosY = e.pageY;
            // hook in target of slider action here: i.e. what the slider is sliding i.e. scroll some other div
            // for this example we will compute the slider's
        }

        // place other slider logic block(s) here for more sliders on the page or for some other moving element:
        //if ((document.mouseState === 'down') && (someOtherSlider.mouseState === 'down')) {   .......
    };
}

module.exports = prologue;
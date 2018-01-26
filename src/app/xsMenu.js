var obj = require('./getall');

module.exports.toggleXsmenu = function() {
    var count = 1;
    var xsMenuTrigger = obj.get('.xs-menu-trigger');
    xsMenuTrigger.onclick = (function() {
        console.log('clicked')
        return function() {
            if (count >= 3) {
                count = 1;
                console.log('clicked = 3', count)
            }
            switch (count) {
                case 1:
                    obj.get('.xs-menu').style.display = 'flex';
                    xsMenuTransform();
                    console.log('case 1 clicked')
                    break;
                case 2:
                    var xsMenu = obj.get('.xs-menu');
                    xsMenu.style.display = 'none'
                    xsMenuClose();
                    console.log('case 2 cicked')
                    break;
            }
            count++;
            console.log(count)

        }


    })();
    // obj.get('.xs-menu-trigger').onmouseover = function() {
    //     xsMenuTransform();
    // }
    // xsMenuTrigger.onmouseout = function() {
    //     xsMenuClose();

    // }

    function xsMenuTransform() {
        var line = obj.get('.xs-menu-line');
        line.style.transform = 'rotatez(-40deg)';
        line.style.top = "11%";
        var line2 = obj.get('.xs-menu-line2');
        line2.style.transform = 'rotatez(40deg)';
        line2.style.top = '40%';
        var text = obj.get('.xs-menu-text');
        text.style.top = '35%';
        var shanLiImage = obj.get('#shan-li-image');
        shanLiImage.style.opacity = '0';
        obj.get('.the-game').style.opacity = '0';
        obj.get('.production').style.opacity = '0';
    }

    function xsMenuClose() {
        var line = obj.get('.xs-menu-line');
        line.style.transform = 'rotatez(0deg)';
        line.style.top = "21%";
        var line2 = obj.get('.xs-menu-line2');
        line2.style.transform = 'rotatez(0deg)';
        line2.style.top = '34%';
        var text = obj.get('.xs-menu-text');
        text.style.top = '31%';
        var shanLiImage = obj.get('#shan-li-image');
        shanLiImage.style.opacity = '1';
        obj.get('.the-game').style.opacity = '1';
        obj.get('.production').style.opacity = '1';

    }
}
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


    }
}
module.exports.gameMenu = function() {
    var gameMenu = obj.get('.game-menu'),
        iconToto = obj.get('.icon-todo'),
        iconPersonal = obj.get('.icon-personal'),
        asideBc = obj.get('.aside-boxcontrol'),
        iconService = obj.get('.icon-service');

    iconToto.style.top = '-27%';
    iconPersonal.style.top = '-27%';
    iconService.style.top = '-27%';
    iconToto.style.left = '-5%';
    iconPersonal.style.left = '-5%';
    iconService.style.left = '-5%';
    var click = 1;
    gameMenu.onclick = (function() {
        if (click == 3) click = 1;
        console.log('click gamenu');
        switch (click) {
            case 1:
                gameMenu.classList.remove('gamemenu-reverse');
                gameMenu.classList.add('gamemenu');
                asideDown();
                console.log(click)
                console.log('aside clicked down')
                break;
            case 2:
                gameMenu.classList.remove('gamemenu');
                gameMenu.classList.add('gamemenu-reverse');
                asideUp();
                console.log(click)
                console.log('aside clicked up');
                break;

        }
        click++

        function asideDown() {

            setTimeout(() => {
                iconToto.style.top = '0%';
                iconPersonal.style.top = '0%';
                iconService.style.top = '0%';

            }, 50);
            setTimeout(() => {
                iconPersonal.style.top = '26%';
                iconService.style.top = '26%';
                asideBc.style.zIndex = '99999999'
            }, 100);
            setTimeout(() => {
                iconService.style.top = '51%';
            }, 150);




        }


        function asideUp() {

            setTimeout(() => {
                iconService.style.top = '26%';

            }, 50);
            setTimeout(() => {
                iconPersonal.style.top = '0%';
                iconService.style.top = '0%';
            }, 100);
            setTimeout(() => {
                iconToto.style.top = '-27%';
                iconPersonal.style.top = '-27%';
                iconService.style.top = '-27%';

            }, 150);
            setTimeout(() => {
                asideBc.style.zIndex = '0';
            }, 500);


        }
    })
}
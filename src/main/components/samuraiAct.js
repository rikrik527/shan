var obj = require('../getall');
var transform = require('../transform');
var transition = require('../transform');
var requestAnimationFrame = require('../requestAnimationFrame');
module.exports.circle = function(){
    var sCanvas = obj.create('canvas');
                var samuraiBtn = obj.get('.samurai-btn');
                samuraiBtn.appendChild(sCanvas);
                sCanvas.id = 'canvas';

                var canvas = obj.getId('canvas');
                var ctx = canvas.getContext('2d');

                var cw = canvas.width = samuraiBtn.offsetWidth;
                var ch = canvas.height = samuraiBtn.offsetHeight;

                window.addEventListener('resize', function () {
                    cw = canvas.width = samuraiBtn.offsetWidth;
                    ch = canvas.height = samuraiBtn.offsetHeight;
                    console.log('resize');
                    init();
                })
                const colors = 'rgba(255,255,255,0.5)';
                const mouse = {
                    x: innerWidth / 2,
                    y: innerHeight / 2
                }
                document.addEventListener('mousemove', event => {
                    mouse.x = event.clientX;
                    mouse.y = event.clientY;
                });

                function randomIntFromRange(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }

                function randomColor(colors) {
                    return colors[Math.floor(Math.random() * colors.length)];
                }

                function distance(x1, y1, x2, y2) {
                    const xDist = x2 - x1;
                    const yDist = y2 - y1;
                    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
                }

                function Particle(x, y, radius, color) {
                    this.x = x;
                    this.y = y;
                    this.radius = radius;
                    this.color = color;
                    this.radians = Math.random() * Math.PI * 2;
                    this.velocity = 0.05;
                    this.distanceFromCenter = {
                        x: randomIntFromRange(50, 120),
                        y: randomIntFromRange(50, 120)
                    }
                    this.update = () => {
                        // move points over one
                        this.radians += this.velocity;
                        this.x = x + Math.cos(this.radians) * this.distanceFromCenter.x;
                        this.y = y + Math.sin(this.radians) * this.distanceFromCenter.y;

                        this.draw();
                    };
                    this.draw = () => {
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                        ctx.fillStyle = this.color;
                        ctx.fill();
                        ctx.closePath();
                    }
                }
                let particles;

                function init() {
                    particles = [];
                    for (let i = 1; i < 50; i++) {
                        particles.push(new Particle(cw / 2, ch / 2, 5, 'rgba(250,100,150,' + Math.random() * 1 + ')'));
                    }
                    console.log(particles);
                }

                function animate() {
                    requestAnimationFrame(animate);

                    ctx.clearRect(0, 0, cw, ch);
                    particles.forEach(Particle => {
                        Particle.update();
                    })
                }

                init()
                animate();
}
module.exports.samuraiProfile = (function(){
    var excute = false;
    return function(){
        if(!excute){
            excute = true;
            var img = require('../../images/crazy-test.png');
    var samuraiBtn = obj.get('.samurai-btn');
    samuraiBtn.insertAdjacentHTML('afterbegin', "<div class='samurai-lowbox'><div class='samurai-name'>寺魂</div><div class='samurai-photo'><img id='samurai-image' alt='samurai-profile-photo'></div><div class='samurai-profile'>Height:??cm<br>Weight:??kg<br>Country:???</div><ul class='samurai-status'><li class='samurai-info'></li></ul></div>");
    var samuraiImg = obj.getId('samurai-image');
    samuraiImg.src = img;
    var samuraiStatus = obj.get('.samurai-status');
    var samuraiInfo = obj.get('.samurai-info');
    var samuraiBioCount = 0;
    function samuraiText(){
        var bio = '姓名:寺魂<br>英文:Samurai<br>出生於xxxx年...';
        if(samuraiBioCount <= bio.length){
            samuraiInfo.innerHTML = bio.substring(0,samuraiBioCount);
            samuraiBioCount++;
        } else{
            window.clearInterval(samuraiId);
        }
    }
    var samuraiId = window.setInterval(samuraiText,100);
    samuraiText();
        }
    }


})();
module.exports.samuraiAppear = (function() {
    var excute = false;
    return function(){
        if(!excute){
            excute = true;
            var samuraiBtn = obj.get('.samurai-btn');
    samuraiBtn.insertAdjacentHTML('afterbegin', '<article class="samurai-boxcontrol"></article>');
    var samuraiBc = obj.get('.samurai-boxcontrol');

    var samurai = "<div class='samurai-sensor-bottom'></div><div class='samurai-head'><div class='samurai-hair'></div><div class='samurai-hair2'><div class='samurai-hair3'></div><div class='samurai-hair4'></div><div class='samurai-hair5'></div></div><div class='samurai-face'><div class='samurai-ear'></div><div class='samurai-ear2'></div><div class='samurai-eye'></div><div class='samurai-eye2'></div><div class='samurai-mouth'><div class='samurai-teeth'></div></div></div></div><div class='samurai-neck'><div class='samurai-neck-cloth'></div></div><div class='samurai-body'><div class='samurai-wing'><div class='samurai-wing2'><div class='samurai-wing22'></div></div></div><div class='samurai-wing3'><div class='samurai-wing4'><div class='samurai-wing44'></div></div></div><div class='samurai-belt'></div><div class='samurai-arm'><div class='samurai-bicep'><div class='samurai-lowarm'><div class='samurai-hand'><div class='samurai-sword'><div class='samurai-sword-head'><div class='samurai-sword-deco'></div></div></div></div></div></div></div><div class='samurai-arm2'><div class='samurai-bicep2'><div class='samurai-lowarm2'><div class='samurai-hand2'></div></div></div></div></div><div class='samurai-peegu'><div class='samurai-sword-cover'><div class='samurai-sword-cover-deco'></div></div><div class='samurai-line1'></div><div class='samurai-line2'></div><div class='samurai-line3'></div><div class='samurai-line4'></div><div class='samurai-leg'><div class='samurai-lowleg'><div class='samurai-feet'></div></div></div><div class='samurai-leg2'><div class='samurai-lowleg2'><div class='samurai-feet2'></div></div></div><div class='samurai-tail'><div class='samurai-tail2'><div class='samurai-tail3'></div></div></div></div>";
    samuraiBc.innerHTML = samurai;

        }
    }


})();


var drop = 60;

module.exports.dropRain = function() {


    function randomRange(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function dropRain() {
        for (var i = 1; i < drop; i++) {
            var dropLeft = randomRange(0, 1600);
            var dropTop = randomRange(-1000, 1400);

            var samSb = obj.get('.samurai-sensor-bottom');

            // samSb.insertAdjacentHTML('afterbegin', '<div class="samurai-effect1" id="drop' + i + '"></div>');
            // var samE = obj.get('.samurai-effect1');
            // samSb.appendChild(samE)
            // var nodes = samSb.childNodes;

            // console.log('fuck')
            // nodes.style.left += dropLeft + 'px';
            // nodes.style.top += dropTop + 'px';



        }
    }
    dropRain();
}
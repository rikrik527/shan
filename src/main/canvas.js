var obj = require('./getall');
var transforom = require('./transform');
var transition = require('./transform');
var requestAnimationFrame = require('./requestAnimationFrame');
module.exports.canvasCircle = function(){

    var ctx = obj.getId('canvas').getContext(
    '2d');
    var samuraiBtn = obj.get('.samurai-btn');
    var cw = canvas.width = samuraiBtn.offsetWidth;
    var ch = canvas.height = samuraiBtn.offsetHeight;

    window.addEventListener('resize',function(){
        cw = canvas.width = samuraiBtn.offsetWidth;
        ch = canvas.height = samuraiBtn.offsetHeight;
        console.log('resize');
        init();
    })
    const colors ='rgba(255,255,255,0.5)';
    const mouse = {
        x:innerWidth/2,
        y:innerHeight/2
    }
    document.addEventListener('mousemove',event =>{
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
    function randomIntFromRange(min,max){
        return Math.floor(Math.random() * (max - min +1)+min);
    }
    function randomColor(colors){
        return colors[Math.floor(Math.random()* colors.length)];
    }
    function distance(x1,y1,x2,y2){
        const xDist = x2 - x1;
        const yDist = y2 -y1;
        return Math.sqrt(Math.pow(xDist,2)+Math.pow(yDist,2));
    }
    function Particle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random()*Math.PI*2;
    this.velocity = 0.05;
    this.distanceFromCenter={
        x:randomIntFromRange(50,120),
        y:randomIntFromRange(50,120)
    }
    this.update = () =>{
        // move points over one
        this.radians += this.velocity;
        this.x  = x + Math.cos(this.radians)* this.distanceFromCenter.x;
        this.y = y + Math.sin(this.radians)* this.distanceFromCenter.y;

        this.draw();
    };
    this.draw = ()=>{
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI *2 ,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
     let particles;
     function init(){
         particles = [];
         for(let i = 1; i < 50; i++){
             particles.push(new Particle(cw/2,ch/2,5,'rgba(250,100,150,'+Math.random()*1+')'));
         }
         console.log(particles);
     }
     function animate(){
         requestAnimationFrame(animate);

         ctx.clearRect(0,0,cw,ch);
particles.forEach(Particle =>{
    Particle.update();
})
     }

     init()
     animate();
}
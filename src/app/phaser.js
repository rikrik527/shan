var Phaser = require('phaser');


 var game = new Phaser.game(1410,710,Phaser.AUTO,'shan-btn');
 game.States.boot = function(){
     this.preload = function(){
         game.load.image('loading','../images/r1.png');
     };
     this.create = function(){
         game.state.start('preload');
     }
     this.preload();
     this.create();
 }



 module.exports = game;




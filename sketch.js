var creature1,creature2,creature3,creature4,creatureGroup,creature;
var Man,ManAnimation;
var ground,ground1;
var bgImg,bg;

function preload() {
    creature1 = loadImage("Images/creature1.png");
    creature2 = loadImage("Images/creature2.png");
    creature3 = loadImage("Images/creature3.png");
    creature4 = loadImage("Images/creature4.png");

    bgImg = loadImage("Images/bg.png");

    ManAnimation = loadAnimation("Images/Man1.png","Images/Man6.png","Images/Man7.png","Images/Man8.png","Images/Man9.png","Images/Man10.png","Images/Man11.png","Images/Man12.png","Images/Man13.png","Images/Man14.png");
}
function setup(){
    createCanvas(800,600);
    
    bg = createSprite(400,70,1200,600)
    bg.addImage("bg",bgImg);
    bg.scale = 1 ;
    bg.velocityX = -5;

    Man = createSprite(100,500,20,20);
    Man.addAnimation("Man",ManAnimation);
    Man.scale = 0.5;

}
function draw(){
    background("lightblue");

    if(bg.x < 0){
       bg.x = bg.width/2;
    }


    drawSprites();
}
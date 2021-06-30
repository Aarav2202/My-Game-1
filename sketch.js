var bgImg,bg;
var superHero,heroImg;
var edges;
var dragon, dragonImg;
var monster, monsterImg;

function preload() {

  bgImg= loadImage("sky.jpeg");
  heroImg= loadImage("Superhero.png");
  dragonImg= loadAnimation("dragonImg.gif")
  monsterImg= loadImage("monster.png");
}



function setup() {
  
  createCanvas(800,400)

  bg= createSprite(750,200);
  bg.addImage(bgImg)
  bg.scale= 0.9;
  bg.velocityX= -3;

  superHero= createSprite(500,200);
  superHero.addImage(heroImg);
  superHero.scale= 0.2;

  edges= createEdgeSprites();

  dragon= createSprite(200,170);
  dragon.addImage( monsterImg);
  dragon.scale= 0.38;
}

function draw() {
  background(0)

  if(bg.x<0){
    bg.x=750;
  }

  if(keyDown("UP_ARROW")){
    superHero.y -= 5;
  }
  if(keyDown("DOWN_ARROW")){
    superHero.y += 5;
  }
  superHero.collide(edges);
  drawSprites();
}
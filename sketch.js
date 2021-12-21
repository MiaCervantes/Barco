var boat ,boat_floating;
var ground;


function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  boat = createSprite (100, 347, 50, 70);
  boat.addAnimation("floating",shipImg1);
  boat.scale = 0.5
}

function draw() {
  background("blue");
 drawSprites();
}
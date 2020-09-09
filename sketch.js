var bullet,bullet1,bullet2;
var wall;
var speed;
var weight;
var thickness;
var deformation=0.5*weight*speed*speed/22509
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 250, 50, 20);
  bullet1=createSprite(50, 200, 50, 20);
  bullet2=createSprite(50,150,50, 20);
 
  wall=createSprite(200,200,thickness,height/2);

  speed=(55,90);
  weight=(400,1500);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255); 
  bullet.velocityX=speed; 
  bullet1.velocityX=speed; 
  bullet2.velocityX=speed;
  
  if(bullet.isTouching(wall)){
    bullet.velocityX=0
      }
  if(bullet1.isTouching(wall)){
    bullet1.velocityX=0
  }
  if(bullet2.isTouching(wall)){
    bullet2.velocityX=0
  }
  if(deformation>180){
    bullet.shapeColor=255,0,0
  }
  drawSprites();
}
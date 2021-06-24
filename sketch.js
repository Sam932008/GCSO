var car , wall ,  speed , weight ;



function setup() {
  createCanvas(800,400);
  speed= random(55,90);
  weight=random(400,800);
  car =  createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor="blue";
  wall=createSprite(700,200,60,height/2);
}

function draw() {
  background(255,255,255);  
if(car.isTouching(wall)){
  car.velocityX=0;
  var D = 0.5* weight*speed*speed/22500;
  if(D>180){
    car.shapeColor="red";
  }

  if(D<100){
    car.shapeColor="green";
  }

  if(D<180 && D>100){
    car.shapeColor="yellow";
  }



}
  drawSprites();
}
var car,wall;
var speed,weight;


function setup() {
  createCanvas(1700,400);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor=color("white")

  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color("brown")
}

function draw() {
  background(0); 
  
  if(wall.x-car.x<(car.width+width)/2){
    car.velocityX0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
    }
    if(deformation<80){
      car.shapeColor=color(0,225,0)
    }
  }
  if (car.isTouching(wall)){
    car.velocityX=0;
  }
  drawSprites();
}

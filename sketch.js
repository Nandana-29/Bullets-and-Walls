var car, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);

  speed = random(223,321);
  weight = random(30,52)
  thickness = random(22,83)
}

function draw() {
  background("black");  

  car.velocityX = speed;
  wall.shapeColor = color(80,80,80)

  if(hasCollided(car,wall))
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(deformation>10)
    {
      car.shapeColor = color(255,0,0);
    }
    if(deformation<10)
    {
      car.shapeColor = color(0,250,0);
    }
  }

  wall.visible = true;

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
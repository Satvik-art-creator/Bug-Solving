var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  
  fixedrect = createSprite(600, 200, 50, 100);
  fixedrect.shapeColor = "green";

  movingrect = createSprite(100,200,100,50);
  movingrect.shapeColor = "green";
}

Guest
function draw() { background(0,0,0); movingrect.velocityX = 4; fixedrect.velocityX=-4; bounceOff(movingrect,fixedrect); drawSprites(); } 

function bounceOff(object1,object2){ if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2) { object1.velocityX = object1.velocityX * (-1); object2.velocityX = object2.velocityX * (-1); } if (object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object2.y < object2.height/2 + object1.height/2) { object1.velocityY = object1.velocityY * (-1); object2.velocityY = object2.velocityY * (-1); } }
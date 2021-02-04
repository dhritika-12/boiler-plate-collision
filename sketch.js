var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1= createSprite(400, 200, 50, 50);
  rect1.shapeColor="cyan";
  rect2= createSprite(200,100,80,40);
  rect2.shapeColor="cyan";
  rect1.debug=true;
  rect2.debug=true;
  
}

function draw() {
  background(255,255,255);  
  rect2.x= mouseX;
  rect2.y=mouseY;
  console.log(rect2.x-rect1.x);
  if(rect2.x- rect1.x<rect2.width/2+rect1.width/2 && 
    rect1.x-rect2.x<rect2.width/2+rect1.width/2 &&
    rect2.y- rect1.y<rect2.height/2+rect1.height/2 &&
    rect1.y-rect2.y<rect2.height/2+rect1.height/2){
    rect2.shapeColor= "lime";
    rect1.shapeColor= "lime";
  }
  else{
    rect2.shapeColor= "cyan";
    rect1.shapeColor= "cyan";
  }
  drawSprites();
}
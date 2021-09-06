var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,40);
  box.shapeColor = "red"
}

function draw() 
{
  background("blue");
if(keyIsDown(LEFT_ARROW)){
box.position.x=box.position.x-5
}
if(keyIsDown(RIGHT_ARROW)){
box.position.x=box.position.x+5
}
if(keyIsDown(UP_ARROW)){
box.shapeColor="yellow"
}
  drawSprites();
}





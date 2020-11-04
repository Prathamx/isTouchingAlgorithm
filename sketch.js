var moving_rectangle, fixed_rectangle;
function setup() {
  createCanvas(1200,800);
  moving_rectangle = createSprite(400, 200, 80, 30);
  fixed_rectangle = createSprite(200, 200, 50, 80);
  moving_rectangle.shapeColor = "green";
  fixed_rectangle.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
moving_rectangle.x = World.mouseX;
moving_rectangle.y = World.mouseY;
if(moving_rectangle.x - fixed_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2
  && fixed_rectangle.x - moving_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2
  && moving_rectangle.y - fixed_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2
  && fixed_rectangle.y - moving_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2) {
moving_rectangle.shapeColor = "red";
fixed_rectangle.shapeColor = "red";
}
else {
  moving_rectangle.shapeColor = "green";
  fixed_rectangle.shapeColor = "green";
}
  drawSprites();
}
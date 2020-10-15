var rect
var movingrect

function setup() {
  createCanvas(800,400);
  rect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200,50,50)
  rect. shapeColor = "green"
  movingrect.shapeColor = "green"
}

function draw() {
  background("black");
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if (movingrect.x - rect.x < movingrect.width/2 + rect.width/2 &&
    rect.x - movingrect.x < movingrect.width/2 + rect.width/2 &&
    movingrect.y - rect.y < movingrect.height/2 + rect.height/2 &&
    rect.y - movingrect.y < movingrect.height/2 + rect.height/2 
    )
  {
  rect. shapeColor = "red";
  movingrect.shapeColor = "red";
}  
else {
  rect. shapeColor = "green";
  movingrect.shapeColor = "green";
}
  drawSprites();
}
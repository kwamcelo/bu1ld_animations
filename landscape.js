function setup() {
  height = 600;
  width = 800;
  createCanvas(width, height);
}

function draw() {
  // code that appears first wil be drawn first
  
  // can use this or the rgb value version below
  // background("teal");
  background(255, 20, 76);
  // sets the colour of any shape on the canvas
  fill("yellow");
  // sets the colour for lines and outlines
  stroke("orange");
  // sets the thickness for lines, outlines and points that are below it
  strokeWeight(20);
  circle(750, 50, 100);

  // grass on the bottom half
  stroke("light brown");
  strokeWeight(1);
  fill("brown");
  rect(0, 300, 800, 300);

  // emojis
  textSize(75);
  text("🌵", width * (1/4), height * (3/4));
  text("🌵", width * (3/4), height * (3/4));
  textSize(40);
  // mouseX and mouseY are built in varaibles that come with the p5.js library
  text("🦂", mouseX, mouseY);
  
  
}

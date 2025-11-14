// let declares custom variables
// can assign to any data type
let cloudOneX = 50;

let lineXone = 0;
let lineYone = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    let bkg_color = [25, 19, 66]
    background(bkg_color);
    frameRate(60);
    stroke("yellow");
    line(lineXone, lineYone, lineXone + 30, lineYone - 30);
    // moon 
    fill(255);
    stroke(255);
    circle(750, 50, 100);
    // make it a cresent
    stroke(bkg_color);
    fill(bkg_color);
    circle(720, 50, 100);

    // big gray mountains
    stroke(0);
    fill(80);
    triangle(0, 400, 75, 100, 250, 400);
    triangle(100, 400, 300, 100, 500, 400);
    triangle(300, 400, 600, 100, 800, 400);


    // grass
    fill(50, 76, 50);
    rect(0, 400, 800, 400)

    // cloud 
    fill(255);
    ellipse(cloudOneX, 50, 80, 40);
    ellipse(cloudOneX - 40, 100, 60, 20);
    ellipse(cloudOneX + 20, 150, 40, 10);
    cloudOneX = frameCount % width;
    lineXone = random(0, width);
    lineYone = random(0, height/2);



    // growing trees

    // trunk
    fill([150, 75, 0]);
    rect(100, 450, 20, 50);

    //leaves 
    fill("pink");
    triangle(80, 450, 110, 400 - frameCount % 600, 140, 450);

    fill(255);
    // template literals start and end with back ticks -> ``
    // you can type any character in back ticks to generate a string
    // you can include any variable in the string using -> ${} 
    text(`${mouseX}, ${mouseY}`, 20, 20);
}
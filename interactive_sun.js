let sunHeight;
let horizon = 400;
let sunRadius = 160;
let r;
let g;
let b;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    

    // sun follows the y-coordinate of mouse
    sunHeight = mouseY;
    blueRegion = horizon - sunRadius;
    sunsetRegion = 600 - horizon;
    if (sunHeight < blueRegion) {
        background([253 - ((1 - (sunHeight / blueRegion)) * 135), 94 + ((1  - (sunHeight / blueRegion)) * 206), 83 + ((1 - (sunHeight / blueRegion)) * 235)]);
    } else if (sunHeight < horizon) {
        background([255 - ((1 - (sunHeight / horizon)) * 253), 49 + ((1  - (sunHeight / horizon)) * 94), 49 + ((1 - (sunHeight / horizon)) * 83)]);
    } else {
        background(0);
    }
    fill("yellow");
    circle(400, sunHeight, sunRadius);

    // draw horizon line
    stroke("green");
    line(0, horizon, 800, horizon);
    // grass
    fill("green");
    rect(0, horizon, 800, 800);

    
}
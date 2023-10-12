function setup() {
    createCanvas(innerWidth, innerHeight)

    background(0)
    rectMode(CENTER);
}

function draw() {
    // background(0, 200, 100);

    let red = map(mouseX, 0, width, 0, 255)
    fill(red, 0, 0)
    strokeWeight(1)
    stroke(mouseX, mouseY, 255)
    rect(mouseX, mouseY, random(100, 10000), random(100, 500));
    //text(`${mouseX}, ${mouseY}`, mouseX, mouseY);
}

// an event listener that "listens" for when the page is resized. If it is...do whatever is in the function
function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    background(200, 100, 0)
}
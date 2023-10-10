function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
}

function draw() {
    noStroke();
    fill(mouseX % 256, mouseY % 256, 255);
    rect(mouseX, mouseY, mouseX, mouseY)
}
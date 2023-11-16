function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0, 0, 0)
    rectMode(CORNER);
    angleMode(DEGREES);
}

function draw() {
    clear(0);
    fill(255, 0, 255, 100);
    stroke(0, map(mouseX, 0, width, 0, 255), 180, 127);
    strokeWeight(2);


    push();
    translate(mouseX - width/2, mouseY - height/2)

    // rotateX(map(mouseX, 0, width, 0, 360))
    // rotateY(map(mouseY, 0, height, 0, 360));

    rotateX(frameCount * 10)
    rotateY(frameCount * 10);
    // console.log(frameCount);

    //scale(map(mouseX, 0, width, 0.1, 2))
    // scale(frameCount/1000)
    torus(60, 15);
    pop();

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(120, 0, 0);

    // rect(random(width), random(height), 20, 20);

    // console.log(width, height);
    // console.log("window resized!")
}
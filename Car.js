function setup() {
    createCanvas(800, 400);
    background(200);
}

function draw() {
    // Draw the car body
    fill(128, 0, 128);
    rect(200, 200, 200, 50); // Main body
    rect(250, 150, 100, 50); // Top part

    // Draw the wheels
    fill(0);
    ellipse(250, 260, 50, 50); // Left wheel
    ellipse(350, 260, 50, 50); // Right wheel
}

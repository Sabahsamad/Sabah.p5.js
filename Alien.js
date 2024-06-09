function setup() {
    createCanvas(800, 400);
    background(0); // Space background
}

function draw() {
    // Draw the alien head
    fill(0, 255, 0);
    ellipse(400, 200, 150, 200); // Head

    // Draw the alien eyes
    fill(255);
    ellipse(370, 170, 30, 50); // Left eye white
    ellipse(430, 170, 30, 50); // Right eye white

    fill(0);
    ellipse(370, 170, 10, 20); // Left eye pupil
    ellipse(430, 170, 10, 20); // Right eye pupil

    // Draw the alien mouth
    fill(255, 0, 0);
    arc(400, 250, 80, 40, 0, PI); // Mouth

    // Draw the alien antennas
    stroke(0, 255, 0);
    strokeWeight(4);
    line(350, 100, 370, 150); // Left antenna
    line(450, 100, 430, 150); // Right antenna

    fill(0, 255, 0);
    ellipse(350, 100, 20, 20); // Left antenna tip
    ellipse(450, 100, 20, 20); // Right antenna tip

    // Draw the alien body
    fill(0, 255, 0);
    ellipse(400, 300, 100, 150); // Body

    // Draw the alien arms
    line(350, 300, 300, 350); // Left arm
    line(450, 300, 500, 350); // Right arm

    // Draw the alien legs
    line(380, 370, 380, 450); // Left leg
    line(420, 370, 420, 450); // Right leg

    noLoop(); // Stop draw loop since we only need to draw once
}

let trails = []; // Array to store the positions of the trails

function setup() {
    createCanvas(800, 600);
    background(0);
}

function draw() {
    background(0, 50); // Transparent background for trail effect

    // Add the current mouse position to the trails array
    trails.push({ x: mouseX, y: mouseY });

    // Remove old positions if the array gets too large
    if (trails.length > 50) {
        trails.shift();
    }

    // Draw the trails
    noStroke();
    for (let i = 0; i < trails.length; i++) {
        let pos = trails[i];
        // Generate a random color for each trail
        let r = random(255);
        let g = random(255);
        let b = random(255);
        fill(r, g, b, 255 - i * 5); // Fading effect with random color
        ellipse(pos.x, pos.y, 10);
    }
}

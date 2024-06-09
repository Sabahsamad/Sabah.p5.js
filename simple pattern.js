function setup() {
    createCanvas(800, 800);
    background(255);

    // Define the size of each grid cell
    let cellSize = 50;

    // Loop through the grid
    for (let x = 0; x < width; x += cellSize) {
        for (let y = 0; y < height; y += cellSize) {
            // Randomize colors
            let r = random(255);
            let g = random(255);
            let b = random(255);

            // Set fill color
            fill(r, g, b);
            noStroke();

            // Randomize the shape
            if (random(1) > 0.5) {
                ellipse(x + cellSize / 2, y + cellSize / 2, cellSize * 0.8, cellSize * 0.8);
            } else {
                rect(x + cellSize * 0.1, y + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
            }
        }
    }
}

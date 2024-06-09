let r = 15;
let points = 0;
let timer = 10; // Extended timer to start with 10 seconds
let ball;
let retryButton;

function setup() {
  createCanvas(600, 400);
  ball = createVector(
    random(r, width - r),
    random(r, height - r)
  );
}

function draw() {
  background(220);
  textSize(20);
  fill(0);
  text("Points: " + points, 20, 30);

  let player = createVector(mouseX, mouseY);
  fill(255, 0, 0); // Red color for the ball
  ellipse(ball.x, ball.y, r * 2);

  if (timer > 0 && points > 0) {
    timer -= 1 / 30; // Increased timer speed
  }

  let len = map(timer, 0, 10, 0, 200); // Adjusted timer range for visualization
  fill(0, 255, 0); // Green color for the timer bar
  rect(15, 50, 20, len);

  if (timer < 0) {
    noLoop();
    textAlign(CENTER);
    textSize(50);
    fill(0, 0, 255); // Blue color for the "FINISH" text
    text("FINISH", width / 2, height / 2);
    // Create retry button
    retryButton = createButton('Retry');
    retryButton.position(width/2 - 50, height/2 + 50);
    retryButton.style('background-color', color(255, 0, 0)); // Red color for the retry button
    retryButton.mousePressed(retryGame);
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, ball.x, ball.y);
  if (d < r) {
    ball = createVector(
      random(r, width - r),
      random(r, height - r)
    );
    points++;
    timer += 3; // Add 3 seconds to the timer
  }
}

function retryGame() {
  timer = 10; // Reset timer
  points = 0; // Reset points
  retryButton.remove(); // Remove the retry button
  loop(); // Restart the loop
}

let mic;
let smoothing = 0.8;
let wave = [];

function setup() {
  createCanvas(800, 600);
  
  // Create an AudioIn object
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  
  // Get the microphone input level
  let level = mic.getLevel();
  
  // Add the level to the wave array
  wave.push(level);
  
  // Apply smoothing to the wave array
  for (let i = 0; i < wave.length; i++) {
    if (i > 0) {
      wave[i] = wave[i] * smoothing + wave[i - 1] * (1 - smoothing);
    }
  }
  
  // Draw the waveform
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < wave.length; i++) {
    let x = map(i, 0, wave.length, 0, width);
    let y = map(wave[i], 0, 1, height, 0);
    vertex(x, y);
  }
  endShape();
  
  // Remove old values from the wave array
  if (wave.length > width) {
    wave.splice(0, 1);
  }
}

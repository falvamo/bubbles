// bubble diameter is a random int between these two constants
const BUBBLE_DIAMETER_MIN = 30;
const BUBBLE_DIAMETER_MAX = 60;

// define the speed the bubbles move in each direction
const BUBBLE_SPEED_X = 1;
const BUBBLE_SPEED_Y = -2;

// bubbles array used in the draw and mousePressed functions
const bubbles = [];

// use this for the bubble diameter
function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

// represents a bubble in the game
class Bubble {

  // create a new bubble
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.d = randint(BUBBLE_DIAMETER_MIN, BUBBLE_DIAMETER_MAX);
  }

  // draw the bubble and move it for the next frame
  draw() {

    // draw the bubble
    circle(this.x, this.y, this.d);
    
    // adjust coordinates for the next frame
    this.x += BUBBLE_SPEED_X;
    this.y += BUBBLE_SPEED_Y;

  }
}

// called when the game first starts
function setup() {
  
  // make the game occupy the whole window
  createCanvas(windowWidth, windowHeight);

}

// called each frame
function draw() {

  // draw the background
  background("#8EB1C7");

  // prepare to draw the bubbles
  fill("#FAC9B8");
  noStroke();
  
  // draw each bubble
  for(let bubble of bubbles) {
    bubble.draw();
  }

}

// add a new bubble to the bubbles array
function mousePressed() {
  bubbles.push(new Bubble());
}
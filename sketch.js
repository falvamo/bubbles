// bubble diameter is a random int between these two constants
const BUBBLE_DIAMETER_MIN = 30;
const BUBBLE_DIAMETER_MAX = 60;

// define the speed the bubbles move in each direction
const BUBBLE_SPEED_X = 1;
const BUBBLE_SPEED_Y = -2;

// define the speed the bubbles grow and shrink
const BUBBLE_GROWTH_SPEED = 5;
const BUBBLE_SHRINK_SPEED = 1;

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
    this.d = 1;
    this.isMoving = false;
  }

  // move and shrink bubble by adjusting its coordinates and diameter
  move() {
    this.x += BUBBLE_SPEED_X;
    this.y += BUBBLE_SPEED_Y;
    this.d -= BUBBLE_SHRINK_SPEED;
  }

  // increment the diameter of the bubble
  grow() {
    this.d += BUBBLE_GROWTH_SPEED;
  }

  // draw the bubble
  draw() {
    circle(this.x, this.y, this.d);

    // grow or move depending on the state and on user input 
    if(!this.isMoving) {
      if(!mouseIsPressed) {
        this.isMoving = true;
      } else {
        this.grow();
      }
    } else {
      this.move();
    }
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
  
  // draw each bubble in the array
  for(let index in bubbles) {
    // we use the in operator since we use the index to remove invalid bubbles
    const bubble = bubbles[index];
    // disallow bubbles with negative diameter
    if(bubble.d > 0) {
      // draw the valid bubble
      bubble.draw();
    } else {
      // remove the invalid bubble from the array
      // we note this adds a tiny 'flicker' to the game, but saves a significant amount of memory
      // and prevents the game from taking more and more memory the more bubbles are created
      bubbles.splice(index, 1);
    }
  }

}

// add a new bubble to the bubbles array
function mousePressed() {
  bubbles.push(new Bubble());
}
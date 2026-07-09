function setup() {
  // Set up the canvas
  new Canvas(800, 800);
  background(250); //background color

  // Basic shape testing
  // write your codes here
 noStroke();
 ball = new Sprite();
 ball.y = 50;
 ball.diameter = 35;
 ball.color = "red"
 ball.vel.y = 3;
  // End Basic shape testing
square = new Sprite(100,1000,100,10);
square.color = "blue";
   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  // write your codes here
  background(220)

  textSize(16)
  text("Ball: " + ball.x + "," + ball.y, 20,50)

  if(ball.y > 600 || ball.y < 0) {
    ball.vel.y = -1 * ball.vel.y;
  }
}
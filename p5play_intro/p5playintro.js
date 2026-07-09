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
square = new Sprite(350,500,100,10);
square.color = "b3lue";
rod = new Sprite(50,350,100,10)
rod.color = "red";
any = new Sprite(350,350,100,10)
any.color = "green";
bluey = new Sprite(350,350,100,10)
bluey.color = "black";
greeny = new Sprite(350,350,100,10)
greeny.color = "black";
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
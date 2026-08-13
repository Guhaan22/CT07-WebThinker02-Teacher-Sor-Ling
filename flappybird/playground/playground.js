// write your codes here

let bird, floor;
let flapMidImg, base;
function preload() {
flapMidimg = loadImage("assets/yellowbird-midflap.png")
base = loadImage("assets/base.png")

}
function setup() {
    newCanvas(400,600)
    background("skyblue");

    bird = new Sprite();
    bird.w = 25;
    bird.h = 25;
    bird.img = flapMidImg;
    bird.bounciness = 0, 7;
    bird.debug = true;


    floor = new Sprite();
    floor.w = width;
    floor.h = 125;
    floor.colider = "static"
    floor.img = base;
    floor.y = height = -25

    world.gravity.y = 10;

    function draw() {
        background("skyblue");
        fill("red");
        textSize(14);
        text("frameCount= " + frameCount,   50, 50)
    }
    

}
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
    bird.bounciness

    floor = new Sprite();
    floor.img = base;
    floor.y = height = -25
}
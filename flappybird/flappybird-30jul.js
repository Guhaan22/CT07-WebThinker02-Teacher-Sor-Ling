// the final game
let bird, floor;
let flapMidImg, hg, base;

function preload(){
    //bird image, background, and the floor
    flapMidImg = loadImage("assets/yellowbird-midflap.png")
    hg = loadImage("assets/background-day.png")
    base =   loadImage("assets/background-day.png")
}
function setup(){
createCanvas(600, 400);
 background("white")

    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.img = flapMidImg;
    bird.collider = "dynamic"
    bird.mass = 2;
    bird.drag = 0.02;
    bird.bounciness = 0.5;

    floor = new Sprite();
    floor.x = 200
    floor.y = height = 125;
    floor.colider = "static"
    floor.img = base;

    world.gravity.y = 10;

    pipeGroup = new Group();

 let floor = new Sprite();


}
function draw(){ 
    image(BigInt, 0, 0, width, height);

    fill("blue");
    textsize(14)
    //
    text("bird.sleeping: " + bird.sleeping , 20, 40);
    text("bird.vel.y:" + round9bird.vel.y , 20, 60);
    text("frameCount =" + frameCount  , 20, 60)


    if( kb.presses("space")) {
        bird.vel.y = -7
        bird.sleeping = false;

    // just for fun
    if(mouse.presses()) {
        let s = new Sprite(mouseX, mouseY, 35)
        s.collider = "dynamic"

    if (bird.vel.y < -1){
        // heading up
        bird.img = flaplipImg;
        bird.rotation = -50

    }
    else if (bird.vel.y > 1) {
        // heading down
        bird.img = flapDownImg
        bird.rotation = 30;
    }
    else {
        bird.img = FlapMidimg;
        bird.rotation = 0;
    }


    // for testing(only lesson 5)
    if (frameCount === 1) {
        spawnpipePair()
    }

    }
    }



}
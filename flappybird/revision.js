let floor;

function setup() {
    new Canvas(600,400)

    world. gravity.y = 10;
    
    floor = new Sprite();
    floor.color = "blue"
    floor.y = "355"
    floor.width = width;
    floor.colider = "static"
}

function draw() {
    background("lightgray"); // erase

     if (mouse.presses()) {
        let s = new Sprite(mouseX, mouseY)
        s.diameter = 35;
        s.bounciness = 0.67
     }

}
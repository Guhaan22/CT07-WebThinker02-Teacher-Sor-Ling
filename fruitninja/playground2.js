let dojoImg;

function preLoad() {
    dojoImg = loadImage("assets/dojobackground.png")

}
function setup() {
    new Canvas(800,600)
    background("orange")

}
function draw() {
    // need the dojo image
    clear()
    Image(dojoImg, 0,0, width, height)
}
function drawStartScreen() {
    // title of the game : Fruit Ninja

    fill("red")
    textAlign(CENTER,CENTER)

    textsize(64)
    text("Fruit Ninja", width/2, height/2)

    textsize(30)
    text("Press SPACE or click to start", width/2, height/2+55)
}
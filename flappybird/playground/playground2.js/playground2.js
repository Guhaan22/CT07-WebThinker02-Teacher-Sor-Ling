

let digitimg;
let digitlabel;

function preload() {
    //digitimg = loadImage("assets/7.png")
    
    let prefix = "assets/"
    let suffix = ".png"
    let filename = "";
}

// called once
function setup() {
    new Canvas(400, 600)

    digitlabel = new Sprite();
    digitlabel.y = 50;
    digitlabel.width = 25;
    digitlabel.height = 36;
    digitlabel.collider = "none"
    digitlabel.img = digitimg;
}
// forever loop
function draw() {
    background("skyblue")
    

    textSize(14);
    text("score:  " + score 50,50);
    text("frameCount:  " + frameCount, 50,70)

    // add keyboard event
    // up arrow to increase score
    //down arrow to decrease score
    if(kb.presses("up")){
        score = score + 1
    }
    else if (kb.presses("down") {
        score = score -1
    }
    score = constrain(score,0,0);

    


}
function drawScore() {
    let scoreString = str(score);
    let digitarray = scoreString.split("")
}

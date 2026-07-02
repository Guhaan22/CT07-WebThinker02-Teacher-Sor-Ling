function setup(){
    createCanvas(1000, 1000);
    background('white');
}

function draw(){
    fill('red');
    noStroke();
    ellipse(300,100,200,200);
    fill('yellow');
    noStroke();
    ellipse(300,280,200,200);
    fill('green');
    noStroke();
    ellipse(300,460,200,200);
}
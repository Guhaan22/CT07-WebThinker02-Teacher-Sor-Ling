function setup(){
    createCanvas(1000, 1000);
    background('white');
}

function draw(){
    fill('red');
    noStroke();
    ellipse(300,100,100,100);
    fill('yellow');
    noStroke();
    ellipse(300,280,100,100);
    fill('green');
    noStroke();
    ellipse(300,460,100,200);
}
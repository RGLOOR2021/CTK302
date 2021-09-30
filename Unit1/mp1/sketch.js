function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);


}

function draw() {
  background(200, 52, 155);



  if (mouseIsPressed) {
    fill(230, 52, 185);
    ellipse(100, 100, 500, 500);

  } else {
    fill(130, 52, 85);
    rect(100, 100, 500, 250);



    //rect(200, 200, 500, 200, 800, 700);
    //creates a round rectangle

  }

}

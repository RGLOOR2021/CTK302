function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);


}

function draw() {
background(200, 52, 155);

// this shows mouse location - comment it out when you're done!
fill(230, 52, 185);
text("mouseX + ", " + mouseY, 40, 40");
}


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    ellipse(500, 400, 500, 500);

  } else {
    // when the mouse isn't pressed!
    triangle(200, 700, 500, 200, 800, 700);

  }

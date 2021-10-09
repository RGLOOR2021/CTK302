let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(20);
  textAlign(CENTER);
}

function draw() {
  background('white');
  fill('black');

  switch (state) {
    case 0:
      text("Two behaviorists have sex.\nOne turns to the other and says:", 250, 250);
      text("touch down here", 250, 400);

      break;
    case 1:
      text("That was good for you; how was it for me?", 250, 250);
      break;

  }

  fill('red');
  noStroke();
  rect(width / 2 - 50, height - 100, 100, 50);

}

function mouseReleased() {
  if ((mouseX > width / 2 - 50) && (mouseX < width / 2 + 50) && (mouseY > height - 100) && (mouseY < height - 50)) {
    state++;

    if (state > 2) {
      state = 0;
    }
  }
}

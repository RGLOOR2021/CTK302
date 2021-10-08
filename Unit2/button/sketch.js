let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(100);
  textAlign(CENTER);
}

function draw() {

  switch (state) {
    case 0:
      background('white');
      text("FUTURE", 250, 250);
      break;
    case 1:
      background('white');
      text("IS", 250, 250);
      break;
    case 2:
      background('black');
      fill("white");
      text("Z\nEROWAST\nE", 250, 250);
      break;
  }
  fill('black');
  stroke("white");
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

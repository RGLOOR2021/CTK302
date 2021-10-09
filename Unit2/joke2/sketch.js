let state = 0;
let im1, im2, im3;


function setup() {
  createCanvas(500, 500);
  textSize(20);
  textAlign(CENTER);
  im1 = loadImage('assets/1.jpg');
  im2 = loadImage('assets/2.png');
  im3 = loadImage('assets/3.jpg');

}

function draw() {
  background('white');
  fill('black');

  switch (state) {
    case 0:
      text("You've been late 3 days this week,\ndo you know what that means?", 250, 50);
      image(im1, 30, 80, 450, 300);
      break;

    case 1:
      text("Yes!\nIt's Wednesday!", 250, 50);
      image(im2, 30, 80, 450, 300);
      break;

    case 2:
      text("It is THURSDAY.", 250, 50);
      image(im3, 30, 80, 450, 300);
      break;

  }
  text("click on the red button", 103, 430);
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

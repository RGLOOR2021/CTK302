let numberOfTouches;
let img1, img2, img3;

function setup() {
  createCanvas(240, 400);
  img1 = loadImage("assets/1.png")
  img2 = loadImage("assets/2.png")
  img3 = loadImage("assets/3.png")
}

function draw() {
  clear();
  background("pink");
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22);
      break;

    case 1:
      image(img1, 5, 30, 200, 380);
      text("it's kind of lonely here", 5, 22);
      break;

    case 2:
      image(img2, 5, 30, 200, 380);
      text("two fingers are touching the screen", 5, 22);
      break;

    case 3:
      image(img3, 5, 30, 200, 380);
      text("three are touching the screen", 5, 22);
      break;

  }

}

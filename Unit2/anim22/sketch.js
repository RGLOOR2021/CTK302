// Reed Cavi's Rain Man

let x = 0;
let ava;

function setup() {
  createCanvas(600, 600);
  ava = loadImage("assets/avaone.png");
}

function draw() {
  background("pink");

  push();
  translate(x, 0);

  avatar();
  pop();

  x = x + 2
  if (x > width) {
    x = -600;
  }


}
function avatar() {


  image(ava, 310, 125, 300, 400);

  fill('black');
  line(500, 400, 200, 225);

  fill('white');
  ellipse(395, 150, 15, 15);
  fill('black');
  ellipse(390, 150, 3, 3);

  fill('white');
  ellipse(425, 150, 15, 15);
  fill('black');
  ellipse(430, 150, 3, 3);



}

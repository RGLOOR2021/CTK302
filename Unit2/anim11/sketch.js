let x = 0;
let font;

function setup() {
  createCanvas(500, 500);
  noStroke();
  font = loadFont("assets/panic.ttf");


}

function draw() {
  background("white");
  fill("red");
  rect(x, 100, 150, 150);
  fill("black");
  ellipse(x, 250, 200, 200);
  fill("grey");
  rect(x, 200, 300, 10);

  fill("grey");
  textFont(font);
  textSize(20);
  text("el lissitzky", x, 195);


  x = x + 1;
  if (x >= width) {
    x = 0;
  }


}

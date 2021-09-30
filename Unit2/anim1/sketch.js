let x = 0

function setup() {
  createCanvas(500, 500);
  noStroke();

}

function draw() {
  background("white");
  fill("red");
  rect(x, 100, 150, 150);
  fill("black");
  ellipse(x, 250, 200, 200);
  fill("grey");
  rect(x, 200, 300, 10);


  x = x + 1;
  if (x >= width) {
    x = 0;
  }


}

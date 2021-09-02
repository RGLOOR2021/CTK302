let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/barcode.ttf")
  f2 = loadFont("assets/panic.ttf")
  textAlign(CENTER) ;
}

function draw() {
  background("yellow");
  textFont(f1);
  textSize(50);
  text("hellworld", width/2, 100);

  textFont(f2);
  textSize(48);
  text("yeah yeah yeah", width/2, 200);

}



let ava;
let f1;

function setup() {
  createCanvas(500, 500, WEBGL);
  ava = loadImage('avabody1.png');
  f1 = loadFont("Ellandob.otf");
  imageMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {
  background(0);
  textFont(f1);
  textSize(20);

  if (mouseIsPressed) {
    fill("grey");
    text("Since every nation wants to breake Ava's \ncode to rule the world, Ava has a \ndefense mechanism that localizes the \nthreatened self. Then, it dissolves \nand transmutes into more Ava.", -240, -200);
    fill(random(155), random(0), random(150));
    ellipse(20, 100, 300, 300);
    ellipse(20, 100, 100, 100);
    ellipse(20, 100, 290, 290);
    ellipse(20, 100, 90, 90);
    image(ava, 20, 100, 110, 260);

  } else {
    fill("grey");
    text("Ava is a super bio virus that protects \npeople against intelligent machines \nthat outgrew human race.", -240, -200);
    let time = millis();
    rotateX(time / 2200);
    rotateZ(time / 1834);
    image(ava, 0, 0);
    fill("white");
    triangle(200, 600, 400, 200, 600, 400);
    triangle(100, 300, 100, 500, 300, 100);
    triangle(250, 0, 350, 100, 150, 100);
    triangle(-300, -100, 300, -300, 400, 300);
    triangle(80, 50, 100, 0, 180, 50);
    triangle(-80, 50, -100, 0, -180, 50);

  }

}

function setup() {
  createCanvas(700, 750);
}


function draw() {
  background(245, 128, 235);
  //noFill();
  noStroke();



  //fill(179,102,255);
  fill(60);
  quad(0, 800, 150, 650, 550, 650, 700, 800);

  fill(191, 102, 255);
  //triangle(160, 650, 350, 200, 540, 650);

  fill(255);
  arc(0, 650, 700, 400, PI, TWO_PI);

  fill(255);
  arc(700, 650, 700, 400, PI, TWO_PI);

  //fill(40);
  //ellipse(350, 30, 400, 120);


  fill(255, 150, 210);
  arc(444, 200, 170, 175, PI, TWO_PI);
  fill(255, 150, 210);
  arc(539, 200, 170, 120, PI, TWO_PI);
  fill(255, 150, 210);
  arc(643, 200, 200, 120, PI, TWO_PI);

  fill(255, 150, 210);
  arc(145, 200, 170, 175, PI, TWO_PI);
  fill(255, 150, 210);
  arc(235, 200, 170, 120, PI, TWO_PI);
  fill(255, 150, 210);
  arc(50, 200, 200, 120, PI, TWO_PI);

  fill(255, 20, 85);
  ellipse(250, 40, 200, 200);
  fill(255, 0, 38);
  ellipse(290, 110, 230, 230);
  fill(230, 0, 38);
  ellipse(350, 200, 260, 260);


  fill(191, 138, 255);
  triangle(150, 650, 350, 200, 550, 650);
  fill("blue");
  ellipse(350, 510, 10, 10);
  fill("white");
  ellipse(350, 510, 3, 3);

  stroke(191, 138, 255);
  strokeWeight(3);
  line(350, 0, 350, 200);

  print("my world has three moons");



  //fill(255);
  //text(mouseX + " , " + mouseY, 150, 50)
}


var beta, gamma;
var x = 0;
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
let img1, img2;
let font;

var cars = [];
var frogPos;


function setup() {

  createCanvas(windowWidth, windowHeight);

  img1 = loadImage("assets/jt1.jpg");
  img2 = loadImage("assets/handsole.png");
  font = loadFont( "assets/akira.otf")

  alpha = 0;
  beta = 0;
  gamma = 0;

  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);

  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background("pink");
  textFont(font);


  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);

//FROG
  push();
  translate(xPosition, yPosition);

  fill('green');
  ellipse(100, 100, 180, 180);
  pop();

  frogPos.x = xPosition;
  frogPos.y = yPosition;


  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }


  fill('white');
  textSize(40);
  textAlign(CENTER);
  text("stop\n \nlook to the sky\n \ntake a deep breath", width / 2, 600, windowWidth - 200, windowHeight - 200);



  textAlign(RIGHT);
  textSize(20);
  fill('black');
  text("orientation data:", 475, 25);
  textSize(15);
  text("alpha: " + alpha, 500, 50);
  text("beta: " + beta, 498, 70);
  text("gamma: " + gamma, 500, 90);
  textSize(20);
  text("acceleration data:", 500, 125);
  textSize(15);
  text("x = " + x, 525, 150);
  text("y = " + y, 525, 170);
  text("z = " + z, 525, 190);


}

function deviceShaken() {
  cars = [];
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}


window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

window.addEventListener('devicemotion', function(e) {

  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

function Car() {

  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5))
  if (random(2) > 1) {
    this.image = img1;
  } else {
    this.image = img2;
  }


  this.display = function() {

    image(this.image, this.pos.x, this.pos.y, 50, 50);

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

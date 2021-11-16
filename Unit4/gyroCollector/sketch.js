let cars = [];
let f2;
let img1, img2, img3;
let frog;
let maxCars = 13;
let frogPos;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(800, 600);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);


  f2 = loadFont("assets/akira.otf");
  img1 = loadImage("assets/jt1.jpg");
  img2 = loadImage("assets/jt3.jpg");
  img3 = loadImage("assets/jt4.jpg");
  frog = loadImage("assets/frog.png");


  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  textFont(f2);
  background("white");



  switch (state) {
    case 0:
      image(img1, 0, 0, 800, 600);
      fill("white");
      textSize(21);
      text("Welcome to\nthe contemplation game", width / 2, height / 2);
      textSize(15);
      text("Grab PEACE on your way to success\n\nclick to start", width / 2, height / 2 + 90);
      break;

    case 1:
      game();
      timer++;
      if (timer > 15 * 60) {
        state = 3;
      }
      break;

    case 2:
      image(img2, 0, 0, 800, 600);
      fill('white');
      textSize(30);
      text("YOU WON", width / 2, height / 2);
      textSize(15);
      text("don't forget to contemplate\nbreathe in, breathe out", width / 2, height / 2 + 50);
      break;

    case 3:
      image(img3, 0, 0, 800, 600);
      fill('yellow');
      textSize(30);
      text("YOU LOST", width / 2, height / 2);
      fill('yellow');
      textSize(15);
      text("Do not worry, this is part of life.\n\nKnow that highly successful people\nare the ones who have failed the most", width / 2, height / 2 + 50);
      break;

  }

}


function game() {

  image(img2, 0, 0, width, height);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 70) {
      cars.splice(i, 1);
    }

  }

  if (cars.length == 0) {
    state = 2;
  }

  image(frog, frogPos.x, frogPos.y, 90, 90);
  checkForKeys();


}


function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 6;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 6;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 6;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 6;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetTheGame();
      state = 0;
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;

  }

}

class Car {

  constructor() {
    this.pos = createVector(random(300, 40));
    this.vel = createVector(random(5, -3), random(-2, 6));
    this.size = random(40, 80);


  }


  display() {

    textFont(f2, 20);
    text("peace", this.pos.x, this.pos.y);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 9;
    if (this.pos.x < -5) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 1;
    if (this.pos.y < -2) this.pos.y = height;

  }

}

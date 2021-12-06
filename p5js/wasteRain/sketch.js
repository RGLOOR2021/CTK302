

let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0 ; i < 100 ; i++){
    cars.push(new Car());
  }

}

function draw() {
  //background(255);

for(let i = 0 ; i < cars.length ; i++){
  cars[i].display();
  cars[i].move();

}

}

class Car {

  constructor() {
    //this.x = random(100);
    this.pos = createVector(random(width), random(100));
     this.vel = createVector(0, random(2));
    this.cor = color(20, random(40), random(70), random(20));
    this.size = random(10, 90);

  }

  display() {
    fill(this.cor);
    textSize(this.size);
    //textSize(15);
    text("waste", this.pos.x, this.pos.y);

  }

  move() {
    //this.x = this.x + 10;
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = -6;
    if(this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > width) this.pos.y = -2;
    if(this.pos.y < 10) this.pos.y = width;

  }
}

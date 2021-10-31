let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

}

function draw() {
  background("black");

  cars.push(new Car());

  for (let i = 10; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 20) {
      cars.splice(i, 10);
    }
  }

}

class Car {
  constructor() {
    this.pos = createVector(random(width), 50);
    this.vel = createVector(random(4, 3), random(5, -10));
    this.a = random(100, 240);
    this.r = random(190);
    this.g = random(245);
    this.b = random(255);
    this.size = random(10, 70);

  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, this.size, 20);
    text("air", this.pos.x, 190, 60);
    text("contemplate", this.pos.x, 350, 100);
    text("universe", 155, this.pos.y, 50, 90);
  }

  move() {
    this.a -= 0;
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = -1;
    if (this.pos.x < 1) this.pos.x = width;
    if (this.pos.y > width) this.pos.y = 0;
    if (this.pos.y < -10) this.pos.y = width;

  }
}

let bubbles = [];
let url = '';

function setup() {

  let key = '1k_VvIfPJWdm6-3aUCQNFbwvWZ4GxreJDY164AZzyhXY';
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1";

  loadJSON(url, gotData);

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}


function gotData(data) {

  console.log(data);

  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i]["color"]));
  }

}


function draw() {
  background('pink');
  noStroke();


  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}

class Bubble {

  constructor(myColor) {
    this.color = myColor;
    this.pos = createVector(random(width), random(height / 2));
    this.vel = createVector(random(-3, 3), random(-3, 3));

  }


  display() {
    //fill(200, 162, 200);
    //text(this.color, this.pos.x, this.pos.y);
    if (this.color == "Midnight blue") {
      fill('blue');
      ellipse(this.pos.x, this.pos.y, 100, 50);

    } else {
      fill('pink');
      rect(this.pos.x, this.pos.y, 15, 150, 220);

    }
    if (this.color == "Nature Green") {
      fill('#1C6709');
      rect(this.pos.x, this.pos.y, 15, 150, 220);

    }
    if (this.color == "Bright Yellow") {
      fill('yellow');
      rect(this.pos.x, this.pos.y, 15, 150, 220);
    }

    if (this.color == "Lipstick Red") {
      fill('red');
      rect(this.pos.x, this.pos.y, 15, 150, 220);

    }
    if (this.color == "Royal Purple") {
      fill('purple');
      rect(this.pos.x, this.pos.y, 15, 150, 220);

    }
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 20;
    if (this.pos.x < 10) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 10;
    if (this.pos.y < 0) this.pos.y = height;
  }


}

//https://docs.google.com/forms/d/1rb8O3KV53PAtFrqVuIDgADsnfQ2AABmXgDLemBLJEr0/edit

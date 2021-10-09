let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(220);
  textSize(60);

  switch (state) {

    case 0:
      background(random(30));
      text("THEY", width / 2, height / 2);
      noStroke();
      fill('red');
      for (let j = 0; j <= height; j += 30) {
        for (let i = 0; i <= width; i += 30) {
          rect(i, j, 5, 25);
        }
      }
      break;

    case 1:
      background('white');
      text("CAN", width / 2, height / 2);
      break;

    case 2:
      background('WHITE');
      text("SEE", width / 2, height / 2);
      break;

    case 3:
      background('BLACK');
      text("YOU", width / 2, height / 2);
      break;

    case 4:
      background('white');
      text("NEVER STOP", width / 2, height / 2);
      break;

  }
}

function mouseReleased() {
  state = state + 1;
  //same as state++
  if (state > 4) {
    state = 0;

  }
}

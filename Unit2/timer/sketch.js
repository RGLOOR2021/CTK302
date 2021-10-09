let myState = 0;
let myTimer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (myState) {

    case 0:
      background('red');

      myTimer = myTimer + 1;
      if (myTimer > 1 * 60) {
        myTimer = 0;
        myState = 1;
      }

      break;

    case 1:
      background('pink');

      myTimer = myTimer + 1;
      if (myTimer > 1 * 60) {
        myTimer = 0;
        myState = 2;
      }
      break;

    case 2:
      background('beige');
      myTimer = myTimer + 1;
      if (myTimer > 2 * 60) {
        myTimer = 0;
        myState = 3;
      }
      break;

    case 3:
      background('orange');
      myTimer = myTimer + 1;
      if (myTimer > 3 * 60) {
        myTimer = 0;
        myState = 4;
      }
      break;

    case 4:
      background('magenta');
      myTimer = myTimer + 1;
      if (myTimer > 1 * 60) {
        myTimer = 0;
        myState = 5;
      }
      break;
    case 5:
      background('orange');
      myTimer = myTimer + 1;
      if (myTimer > 1 * 60) {
        myTimer = 0;
        myState = 0;
      }
      break;

  }


}

//Rose Marshack

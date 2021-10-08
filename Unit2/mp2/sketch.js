let state = 0
let timer = 0
let mic;
let vol;
let ava;

function setup() {
  createCanvas(500, 500);
  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  ava = loadImage("assets/avaone.png");
}

function draw() {
  switch (state) {
    case 0:
      background("red");
      //image(ava, 100, 100, 200, 200);
      text("welcome please click on Ava", 100, 100);
      
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("blue");
      text("Ava says: talk to me", 100, 100);
      // get the sound input
      vol = (mic.getLevel().toFixed(2));
      if (vol > .1) {
        state = 2;
      }
      break;

    case 2:
      background("black");
      text("I am listening!", 100, 100);
      timer++;
      if (timer > 8 * 60) {
        timer = 0;
        state = 0;
      }
      break;



  }

}

function mouseReleased() {
  if (state == 0) {
    state = 1;
  }
}


function touchStarted() {
  getAudioContext().resume();
}

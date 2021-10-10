let mic;
let vol;
let c = 'pink';
let x = 0;

function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  vol = (mic.getLevel().toFixed(2));

  if (vol > .20) {

    c = color(random(120), random(30), random(235));
  }

  textSize(20);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

  rect(vol * 100, 100, 50, 50);
  //   x = map(vol, 0, .2, 0, width) ;
  //   rect(x, 200, 50, 50);

}

function touchStarted() {
  getAudioContext().resume();
}

//from Rose Marshack

let state = 0;
let song1, song2, song3;
let img1, img2, img3;

function preload() {
  song1 = loadSound("assets/sot.mp3");
  song2 = loadSound("assets/dress.mp3");
  song3 = loadSound("assets/prs.mp3");
  img1 = loadImage("assets/zw3.jpg");
  img2 = loadImage("assets/zw2.jpg");
  img3 = loadImage("assets/zw1.jpg");


  song1.play();
  song2.play();
  song3.play();
  song1.pause();
  song2.pause();
  song3.pause();

}

function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}

function draw() {
  switch (state) {
    case 0:
      background('red');
      image(img1, 01, 01, 400, 500);
      song1.play();
      state = 1
      break;

    case 1:
      break;


    case 2:
      background('yellow');
      image(img2, 100, 01, 400, 500);
      song2.play();
      state = 3
      break;

    case 3:
      break;


    case 4:
      background('red');
      image(img3, 150, 01, 400, 500);
      song3.play();
      state = 5;
      break;

    case 5:
      break;

    case 6:
      background("black");
      state = 0

  }

}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++;
  if (state > 6) {
    state = 0;
  }

}

function touchStarted() {
  getAudioContext().resume();
}

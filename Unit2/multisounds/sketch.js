let state = 0;
let song1, song2, song3;
let img1, img2, img3;

function preload() {
  song1 = loadSound("assets/truands.mp4");
  song2 = loadSound("assets/etoile.mp4");
  song3 = loadSound("assets/cri.mp4");
  img1 = loadImage("assets/zw3.jpg");
  img2 = loadImage("assets/zw2.jpg");
  img3 = loadImage("assets/zw1.jpg");


  song1.play();
  song2.play();
  song3.play();
  song1.pause();
  song2.pause();
  song3.pause();
  //spanning a song in a loop don't add in the draw function
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      //spawn song 1
      background('red');
      image(img1, 01, 01, 400, 500);
      song1.play();
      state = 1
      break;

    case 1:
      //listen song 1
      background('yellow');
      image(img2, 100, 01, 400, 500);
      song2.play();
      state = 2
      break;

    case 2:
      //spawn song 2
      background('red');
      image(img3, 150, 01, 400, 500);
      song3.play();
      state = 0;
      break;

  }

}

function mouseReleased() {

  state++;
  if (state > 3) {
    state = 0;
  }

}

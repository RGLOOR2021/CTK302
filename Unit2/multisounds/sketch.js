let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/donkey.mp3");
  song2 = loadSound("assets/skate.mp3");
  song3 = loadSound("assets/thrill.mp3");

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
  switch(state){
    case 0:
    //spawn song 1
    background('red');
    song1.play();
    state = 1
    break;

    case 1:
    //listen song 1
    background('yellow');
    break;

    case 2:
    //spawn song 2
    song2.play();
    state = 3;
    break;

    case 3:
    //listen song 2
    background('green');
    break;

    case 4:
    //spawn song 3
    song3.play();
    state = 5;
    break;

    case 5:
    //listen to song3
    background ('grey');
    break;



  }

}

function mouseReleased() {

  state++;
  if (state > 5) {
    state = 0;
  }

}

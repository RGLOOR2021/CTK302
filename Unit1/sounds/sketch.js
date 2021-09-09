let song1;

function preload() {
  song1 = loadSound("assets/bensoundevo.mp3");

}

function setup() {
  createCanvas(500, 500);
  //function to play a song: loop or play
  song1.loop();
}

function draw() {
  background("blue");

  //if the song is playing and someone clicked,
  //then stop the song, otherwise start the song1


}

function mouseReleased() {
  if (song1.isPlaying()) {
  song1.pause();
} else {
  song1.loop();
}




function touchStarted() {
  getAudioContext().resume();
}

}

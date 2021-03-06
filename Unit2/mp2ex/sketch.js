let state = 0;
let timer = 0;
let mic;
let vol;
let hand, queen;
let font;
let song1, song2;

function preload() {
 song1 = loadSound("assets/F1cage.wav");
song2 = loadSound("assets/effect.wav");
}

function setup() {
createCanvas(700, 750);
textAlign(CENTER);
textSize(35);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  hand = loadImage("assets/hand.png");
  queen = loadImage("assets/AVA.png");
  font = loadFont("assets/font.ttf");
  //song2.loop();
}

function draw() {
  textFont(font);
  noStroke();
  background(245,128,235);



  switch (state) {
    case 0:
      background("#1861F3");
  fill("blue");
  ellipse(350, 510, 30, 30);
   fill("white");
  ellipse(350, 510, 10, 10);

      text("To enter the temple of the\nGREAT EYE\nwait 6 seconds", 350, 250);
       //song1.play();
       timer++ ;
      if (timer > 2*60) {
        timer = 0 ;
        state = 1 ;
      }
      break;

    case 1:
      background(245,128,235);
      text("talk to the hand\n...loud", 350, 90);
      image(hand, 60, 150, 550, 600);
      vol = (mic.getLevel().toFixed(2));
      if (vol > .1) {
        state = 2 ;
      }
      break;

    case 2:
      //scenario
       background(245,128,235);
      fill(60);
       quad(0, 800, 150, 650, 550, 650, 700, 800);

      fill("#1861F3");
  rect(150, 100, 400, 550);
   fill("blue");
  ellipse(350, 510, 30, 30);
   fill("white");
  ellipse(350, 510, 10, 10);


image(queen, 50, 250, 150, 450);
      text("click on the door and\nQueen AVA will open for you", 350, 50);
      timer++ ;
      if (timer > 560) {
        timer = 0 ;
        state = 3 ;
      }
      break;

      case 3:

  //scenario
   background(245,128,235);
      fill(60);
  quad(0, 800, 150, 650, 550, 650, 700, 800);

  fill(191,102,255);

  fill(255);
  arc(0, 650, 700, 400, PI, TWO_PI);

  fill(255);
  arc(700, 650, 700, 400, PI, TWO_PI);

 fill(255,150,210);
  arc(444, 200, 170, 175, PI, TWO_PI);
  fill(255,150,210);
  arc(539, 200, 170, 120, PI, TWO_PI);
  fill(255,150,210);
  arc(643, 200, 200, 120, PI, TWO_PI);

  fill(255,150,210);
  arc(145, 200, 170, 175, PI, TWO_PI);
  fill(255,150,210);
  arc(235, 200, 170, 120, PI, TWO_PI);
  fill(255,150,210);
  arc(50, 200, 200, 120, PI, TWO_PI);

     fill(255,20,85);
  ellipse(250, 40, 200, 200);
    fill(255,0,38);
  ellipse(290, 110, 230, 230);
  fill(230,0,38);
  ellipse(350, 200, 260, 260);


  fill(191,138,255);
  triangle(150, 650, 350, 200, 550, 650);
   fill("blue");
  ellipse(350, 510, 10, 10);
   fill("white");
  ellipse(350, 510, 3, 3);

  stroke(191,138,255);
  strokeWeight(3);
  line(350, 0, 350, 200);

      timer++ ;
      if (timer > 8*60) {
        timer = 0 ;
        state = 0 ;
      }

  }

  fill('white');
  text(mouseX + ", " + mouseY, 60, 30);
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 200) && (mouseX < 350) && (mouseY > 200) && (mouseY < 350)) {
    state = 1;

  }
}

function touchStarted() {
  getAudioContext().resume();
}

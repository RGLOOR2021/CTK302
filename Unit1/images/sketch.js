let meshow, me3, me2;

function setup() {
  createCanvas(500, 500);
  meshow = loadImage("assets/meshow.jpg");
  me3 = loadImage("assets/me3.png");
  me2 = loadImage("assets/me2.png");
  imageMode(CENTER);

}

function draw() {
background('green');
image(meshow, width/2, height/2, 100, 100);
image(me3, width/2, height/2 - 120, 100, 100);
image(me2, width/2, height/2 + 120, 100, 100);



}
//resized so it doesn't stretch

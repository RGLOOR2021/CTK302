let meshow, me3, me2;

function setup() {
  createCanvas(500, 500);
  meshow = loadImage("assets/meshow.jpg");
  me3 = loadImage("assets/me3.png");
  me2 = loadImage("assets/me2.png");
  me4 = loadImage("assets/mebig.jpg");
  imageMode(CENTER);

}

function draw() {
background(0);
image(meshow, width/2, height/2, 800, 800);
image(me4, width/2, height/2, 130, 130);
image(me3, width/2, height/2 - 150, 130, 130);
image(me2, width/2, height/2 + 150, 130, 130);


}

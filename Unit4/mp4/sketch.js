let = img1; img;


function preload() {
  img = loadImage('assets/zw1.jpg');
  //img1 = loadImage('assets/yeah.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  //background(img1, windowWidth, windowHeight);


  ambientLight(180);
  directionalLight(255, 0.25, 0.25, 10, 50, 0);

  //push();
  //translate(-width / 8, 0, 0);
  rotateZ(frameCount * 0.008);
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.008);
  texture(img);
  box(200, 200, 200);
  //pop();
}

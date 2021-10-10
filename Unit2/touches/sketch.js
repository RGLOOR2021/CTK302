let numberOfTouches ;
let img1, img2, img3;

function setup() {
  createCanvas(250, 400);
  img1 = loadImage("assets/1.png")
  img2 = loadImage("assets/2.png")
  img3 = loadImage("assets/3.png")
}

function draw() {
  clear();
  background("pink");
  fill("white");
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("if you touch here you get a prize", 10, 50) ;
      break ;

      case 1:
       text("I didn't feel that", 10, 50 ) ;
       image(1, 10, 10, 240, 400);

      break ;

      case 2:
      text("hmmm not yet", 10, 50 ) ;
      image(1, 10, 10, 240, 400);

      break ;

      case 3:
     text("There you go!", 10, 50) ;
     image(1, 10, 10, 240, 400);

      break ;


  }

}

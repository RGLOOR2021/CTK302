var weather;
var weatherID = 0;
var myState = 0;
var wind = 0;
var temperature = 0;
var clouds = 0;
var y = 0;
var x = 0;
var hand;
var font;

function setup() {
  createCanvas(600, 400);

  hand = loadImage("assets/hand.png");
  font = loadFont ("assets/ellando.otf");

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Chicago,IL,US&units=imperial&";


  var myIDString = "appid=a704b561f573a75d1c8586cc498a7a25";

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData);
}

function gotData(data) {
  weather = data;
  console.log(weather);
  wind = weather.wind.speed;
  temperature = weather.main.temp;
  clouds = weather.clouds.all;

}

function draw() {
  textSize(10);
  textFont(font);

  image(hand, 0, 0, 600, 300);
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      fill("red");
      text("Chicago Weather Now " + weather.name, 100, 20);
      text("UFO Speed " + wind, 110, 115);
      text("Sun Melts " + temperature, 135, 168);
      text("cloudiness % " + clouds, 12, 220);


      fill("yellow");
      noStroke();
      ellipse(400, y, 100, 98);
      y = y + temperature/9;
      if (y > height) y = 0;

      fill("white");
      noStroke();
      ellipse(x, 40, 100, 30);
      fill("blue");
      noStroke();
      ellipse(x, 50, 190, 38);
      fill("white");
      noStroke();
      ellipse(x, 60, 100, 35);

      x = x + wind/6;
      if (x > width) x = 0;

break;
  }
}

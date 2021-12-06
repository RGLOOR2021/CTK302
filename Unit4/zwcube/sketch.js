
var fence;
var locationData;
var num;
var distance;
var places = [];
var image;

function preload() {
  locationData = getCurrentPosition();
  image = loadImage('assets/yeah.png');

}

function setup() {

  createCanvas(displayWidth, displayHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  places.push(new Place(40.5084814197631, -88.9894023241863, "In Exchange", .02, image));

}

function draw() {
}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true) {
      places[i].display();
      break; //should break out of the for loop?

    }
  }

}

function Place(lat, long, desc, radius, image) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates



  this.display = function() {
    image(image, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}

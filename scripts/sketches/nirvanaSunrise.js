// To Do
// Auto center elements
// Make reflection wavy
// Sun does not look circular

//Story   Sunset on nirvana beach


var timer = 5000;
var nextChange= timer;

var outerDiam = 0;
function setup() {
  createCanvas(500, 600);
  background('#F9F7FF');
  frameRate(24);
}
 
function draw() {
  var sunBG=color('#F87666');
  var groundColor=color('#FFE66D');
  var skyColor=color('#F9F7FF');
  var skyBG=color('#FFE66D');
  var yellow=color('#FFE66D');
  var yellow2=color('#FFD91C');
  var yellow3=color('#F9F7FF');
  var waterColor=color('#4ECDC4');
  var waterColorDark=color('#13ADA3');

    for (var d = 0; d < 5; d++){
		var diam = outerDiam - 30 * d;    
        if (diam > 0){
            var fade = map(diam, 0, width, 0, 255);
	        stroke(fade);
            ellipse(250, 200, diam);
        }
    }
  
 
   
  outerDiam = outerDiam + 2;
  noStroke();
  let x=100;
  
  fill(sunBG);
  ellipse(250, 250, 350, 350);
  
   fill(yellow2);
  triangle(100+x, 250, 250+x, 150, 350+x, 250);
 fill(yellow);
  triangle(100, 250, 250, 100, 350, 250);
  
  fill(waterColor);
  rect(0,250, 500,300);
  fill(waterColorDark);
  triangle(100, 250, 250, 500, 350, 250);
  triangle(100+x, 250, 250+x, 400, 350+x, 250);
  stroke(skyColor);
strokeWeight(2);
  line(10,400,20,400);
}
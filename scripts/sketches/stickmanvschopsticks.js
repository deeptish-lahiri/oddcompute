// Make more variations with stickman
//check performance

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-container');
 
    frameRate(5);
  }
  
  function draw() {
    let maxW= windowWidth/2;
    console.log(maxW);
    background(208, 5, 70);
    let sz = 400/2;
    let bound = 400*(80/100);
    let rx = random (40,360);
    let ry = random (40, 360);
    let ra = random (40, 360);
    let rb = random (40, 360);
    strokeWeight(2);
    line(mouseX,mouseY,rx,ry);
    
    line(mouseX,mouseY,ry,rx);
    
    strokeWeight(1);
  
    line(sz,sz,ra,rb);
    ellipse(ra,rb,5,5);
    line(sz,sz,rb,ra);
    ellipse(rb,ra,5,5);
    strokeWeight(2);
    fill(255, 204, 0);
    ellipse(sz,sz,10,10);
    
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

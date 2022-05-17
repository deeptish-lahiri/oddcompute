function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-container');
  }

  function draw(){
    background(220, 141, 155); //RGB Value
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
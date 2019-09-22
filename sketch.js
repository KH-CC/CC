function setup() {
  createCanvas(windowWidth, windowHeight);
  background(17, 11, 36);
}


function draw() { 
  noStroke();
  if (mouseIsPressed) {
    frameRate(9);
    fill(random(255));
    var starr = random(5);
    ellipse( random(width) , random(height) ,  starr,  starr);
  }
  else {
    if (keyIsPressed)
    if(key == 'p' || key =='P' ){
      frameRate(0.5);
      fill(random(255), random(255), random(255));
      var planetr = random(20, 30);
      ellipse( random(width), random(height), planetr, planetr);
    }
   else {
     if (keyIsPressed)
     if(key == 'c' || key =='C' ){
       frameRate(1);
       fill(253, 255, 181);
       ellipse( mouseX, mouseY, 7, 7);
     }
   }
  }
}

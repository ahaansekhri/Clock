var s;



function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background(0,0,0);  
  hr= hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES)
  
 

  push();
  ScAngle = map(sc,0,60,0,360);
  translate(400,400)
  angleMode(DEGREES)
  rotate(ScAngle);
  strokeWeight(7);
  stroke(255,100,100);
  
  line(0,0,0,-200);
  

  pop();
  
  push();
  
  ScAngle = map(sc,0,60,0,360);
  angleMode(DEGREES)
  translate(400,400)
  strokeWeight(7);
  stroke(255,100,100);
  
  noFill();
  arc(0,0,500,500,-90,ScAngle-90);
  
  pop();

  push();
  ScAngle = map(mn,0,60,0,360);
  translate(400,400)
  angleMode(DEGREES)
  rotate(ScAngle);
  strokeWeight(10);
  stroke(100,100,250);
  
  line(0,0,0,-150);

  pop();

  push();
  
  ScAngle = map(mn,0,60,0,360);
  angleMode(DEGREES)
  translate(400,400)
  strokeWeight(10);
  stroke(100,100,250);
  
  noFill();
  arc(0,0,480,480,-90,ScAngle-90);
  
  pop();

  push();
  ScAngle = map(hr,0,12,0,360);
  translate(400,400)
  angleMode(DEGREES)
  rotate(ScAngle);
  strokeWeight(7);
  stroke(100,250,100);
  
  line(0,0,0,-100);
  pop();

  push();
  
  ScAngle = map(hr,0,12,0,360);
  angleMode(DEGREES)
  translate(400,400)
  strokeWeight(10);
  stroke(100,250,100);
  
  noFill();
  arc(0,0,460,460,-90,ScAngle-90);
  
  pop();

  drawSprites();
}
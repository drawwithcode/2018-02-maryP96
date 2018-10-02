function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);

  frameRate(12);
}

function draw() {
  // put drawing code here

  push();
  translate(width/2,height/2);
  rotate(frameCount*300);
  noFill();

  //stroke(lerpColor(color('#0fefca'),color('#ea0043'), frameCount/120));
  stroke(30,0,0,50);

    line(200,200,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();


  push();
  translate(width/2,height/2);
  rotate(frameCount*30);
  noFill();
  //stroke(lerpColor(color('#1E0000'), color('#FFFDF7'), frameCount/150));
  stroke(30,0,0)
  ellipse(20,0,300,200);
  pop();

  push();
  translate(width/2,height/2);
  rotate(frameCount*30);
  noFill();
  //stroke(lerpColor(color('#FFFDF7'), color('#1E0000'), frameCount/150));
  stroke(255,255,247)
  ellipse(20,0,200,300);
  pop();

  // push();
  // translate(width/2,height/2);
  // rotate(frameCount*30);
  // noFill();
  // stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/120));
  // line(30,0,cos(frameCount*3)*100,sin(frameCount*3)*100);
  // pop();

  push();
  translate(width/2,height/2);
  rotate(frameCount*3);
  noFill();
  stroke(lerpColor(color('#fffff7'), color('#1E0000'), frameCount/120));
  line(cos(frameCount*30)*300,sin(frameCount*30)*330,cos(frameCount*30)*300,sin(frameCount*30)*300);
  pop();


  push();
  translate(width/2,height/2);
  rotate(frameCount*3);
  noFill();
  //stroke(lerpColor(color('#FFFDF7'), color('#1E0000'), frameCount/120));
  stroke(255,255,247)
  ellipse(180,0,cos(frameCount*3)*20,20);
  pop();

  push();
  translate(width/2,height/2);
  rotate(frameCount*3);
  noFill();
  stroke(lerpColor(color('#FFFDF7'), color('#1E0000'), frameCount/120));
  line(0,0,cos(frameCount*3)*100,sin(frameCount*3)*100);
  pop();


  // Stops the draw function if a certain condition avaluates true
  if (frameCount == 120) {
    noLoop();
  }
}

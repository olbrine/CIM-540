// Global Variables
var backgroundColor = "pink"
var noseX = "600"
var eyeX = "200"
var eyeY = "800"
var hairX = "0"



function setup() {
  // put setup code here
  createCanvas(1000,1000);
  background("pink");

}


function draw() {
  // put drawing code here
  line(mouseX, 0, mouseX, 1000);
  line(0, mouseY, 1000, mouseY);
  strokeWeight(4);
  stroke(51);

  //left eye
  ellipse(eyeX,300,250,250);

  //right eye
  ellipse(eyeY,300,250,250);

  //nose
  triangle(400,noseX,425,425,800,noseX);

  //mouth
  angleMode(DEGREES);
  arc(600,800,400,300,95,200);


  //first pupil
  ellipse(eyeX,300,100,100);
  fill("black");
  noFill("black");

  //second pupil
  ellipse(eyeY,300,100,100);

  //freckle left
  ellipse(100,550,20,20);

  //freckle right
  ellipse(195,550,20,20);

  //freckle middle
  ellipse(150,600,20,20);

  //middle hair
  triangle(200,hairX,500,100,800,hairX);

  //end draw loop

  function mousePressed(){
    backgroundColor = "purple";
  }




}

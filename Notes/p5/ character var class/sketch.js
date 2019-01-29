//Global Variables
var backgroundColor = "pink"; //Strings
var mouthX = 100;
var earOffset = 10;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background("black");


console.log(backgroundColor);

}

function draw() {
  // put drawing code here
  background("255");
  background(backgroundColor);
  strokeWeight(1);

  //first eye
  ellipse(155,175,25,30);


  //first pupil
  ellipse(150,175,10,15);

  // head
  ellipse(200,200,100,100);
  fill("yellow")

  // mouth
  rect("mouthX",200,75,20);
  rect("mouthX",230,75,10);

  //nose
  ellipse(100,200,10,10);

  strokeWeight(10);
  point(100,200);

  strokeWeight(1);
  //second eye
  ellipse(170,175,25,30);

  //second pupil
  ellipse(165,175,10,15);

  //neck
  rect(175,250,50,50,10);

  //body
  rect(200,275,150,100,10);

  //ears
  triangle(175,150,200,100,200,150);
  triangle(175+earOffset,150,200+earOffset,100,200+earOffset,150);

  //tail
  strokeWeight(15);
  line(350,275, 350+50, 275-50);

  noFill(255)
  strokeWeight(5);
  angleMode(DEGREES);
  arc(200,400,50,50,135,270);
  arc(225,400,50,50,135,270);
  arc(325,400,50,50,135,270);
  arc(350,400,50,50,135,270);



}

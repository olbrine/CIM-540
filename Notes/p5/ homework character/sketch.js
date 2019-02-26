  //Global Variables
  var diameter = 20;
  var backgroundColor = "purple";
  var eyePosX = 130;
  var earOffset = 30;



function setup() {
  // put setup code here
  createCanvas(500,500);

  slider = createSlider(0, 255, 127);

}

function draw() {
  // put drawing code here
  background(backgroundColor);

  //head
  // Set the hue according to the slider
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  ellipse(250,150,100,100);

  //body
  fill("green");
  ellipse(250,300,150,200);

  //left leg
  fill("green");
  rect(210,400,40,100,10);

  //right leg
  fill("green");
  rect(250,400,40,100,10);

  //left ear
  fill("black");
  ellipse(220,110,earOffset,earOffset);

  //right ear
  fill("black");
  ellipse(280,110,earOffset,earOffset);

  //left eye
  fill("white");
  ellipse(230,eyePosX,diameter,diameter);

  //right eye
  fill("white");
  ellipse(270,eyePosX,diameter,diameter);

  //left pupil
  fill("black");
  ellipse(230,eyePosX,10,10);

  //right pupil
  fill("black");
  ellipse(270,eyePosX,10,10);

  //nose
  fill("white");
  ellipse(250,150,25,diameter);

  //left arm
  fill("black");
  angleMode(DEGREES);
  arc(200,290,50,120,135,270);

  //right arm
  fill("black");
  angleMode(DEGREES);
  arc(300,290,50,120,270,135);

  //left foot
  fill("black");
  ellipse(230,490,40,40);

  //right foot
  fill("black");
  ellipse(270,490,40,40);

  //mouth
  fill("black");
  ellipse(250,180,diameter,diameter);

  //first Button
  fill("orange");
  ellipse(250,250,diameter,diameter);

  //second Button
  fill("yellow")
  ellipse(250,290,diameter,diameter);

  //third Button
  fill("red")
  ellipse(250,330,diameter,diameter);
}

  //end of draw loop


  function mousePressed(){
    backgroundColor = "orange";
  }

  function mouseReleased(){
    backgroundColor = "red";

}

function keyPressed(){
  console.log("Current key: " + key + " : " + keyCode);
  if(key == "r"){
    backgroundColor = "red";
  }else if(key == "g"){
    backgroundColor = "green";
  }else if(key == "b"){
    backgroundColor = "blue";
  }
}

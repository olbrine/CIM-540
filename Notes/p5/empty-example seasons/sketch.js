var seasons;

function setup() {
  // put setup code here
  createCanvas(400,400);

  seasons = createSelect();
  seasons.position(10,10);
  seasons.option("");
  seasons.option("spring");
  seasons.option("summer");
  seasons.option("fall");
  seasons.option("winter");
  seasons.changed(function(){
    seasonType = seasons.value();
  });

}

function draw() {
  // put drawing code here
  background(255);
  fill("black");
  stroke(0);
  textSixe(20);
  text(seasonType,10,75);

  if(seasonType == "spring"){
    line(width/2,height/2,width/2,300)
    fill("yellow");
    ellipse(width/2,height/2,20,20);

    fill("yellow");
    ellipse(width/2,height/2,20,20);
  }
}

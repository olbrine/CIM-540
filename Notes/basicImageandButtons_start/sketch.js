/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var slothBaby;
var slothAdult;

function preload(){
slothBaby = loadImage("assets/slothbaby.jpg");
slothAdult = loadImage("assets/slothadult.jpg");
}

function setup() {
  // put setup code here
createCanvas(500,500);
}

function draw() {
  // put drawing code here
image(slothBaby,0,20,slothBaby.width/2,slothBaby.height/2);

image(slothAdult,0,20,slothAdult.width/2,slothAdult.height/2);
}

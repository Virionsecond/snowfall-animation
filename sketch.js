const Engine = Matter.Engine
const World  = Matter.World
const Bodies   = Matter.Bodies

var bg;

var engine, world;

var snowfall = [];


function preload(){

bg = loadImage("snow2.jpg")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create()
  world  = engine.world;



}

function draw() {
  Engine.update(engine)

  background(bg);  
  drawSprites();

  if(frameCount % 0===50){

    var snow = new SadSnow (random(0, width), 0)

    snowfall.push(snow)

  }
  var snow = new SadSnow (random(0, width), 0)

  snowfall.push(snow)

  for(var i = 0;i<snowfall.length; i++){

  snowfall[i].display()


  

  }

}
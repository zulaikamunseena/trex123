const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;



function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  object=Bodies.rectangle(200,200,50,50);
  World.add(world,shape);
  
}

function draw() {
  background("black");  
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
}
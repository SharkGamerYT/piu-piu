const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine
var world
var ground, ball1, ball2, ball3
var box1
var bird

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
 
  
  
 
  ground = new Ground(600,390,1200,20);
  box1 = new Box(120,220,65,40);
  box2 = new Box(250,260,70,70);
  box3 = new Box(330,290,20,80);
  box4 = new Box(160,210,30,10);
  box5 = new Box(490,240,100,50);
  bird = new Bird(320,270,32,41);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("green");  
Engine.update(engine);


ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
bird.display();



  drawSprites();
}
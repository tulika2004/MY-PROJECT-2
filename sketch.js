const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bottle1,bottle2,bottle3;
var pt1,pt2,pt3,pt4;

var gun,bullet;

function preload(){
  backgroundImage=loadImage("Images/background.png")
}
function setup() {
  createCanvas(1800,900);
  
  engine=Engine.create();
  world=engine.world;
  
  
  gun=Bodies.rectangle(500,800,20,20);
  World.add(world,gun);
   

  bottle1=new bottle(300,100,10,10);
  bottle2=new bottle(500,100,10,10);
  bottle3=new bottle(700,100,10,10);

  pt1=new platform(300,400,30,30);
  pt2=new platform(500,400,30,30);
  pt3=new platform(700,400,30,30);
 // pt4=new platform(900,830,1800,30)

}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  
  //gun.x=World.mouseX;
  Matter.Body.setPosition(gun,{x:mouseX,y:800});

  bottle1.display();
  bottle2.display();
  bottle3.display();

  pt1.display();
  pt2.display();
  pt3.display();
 // pt4.display();

  rectMode(CENTER);
  rect(gun.position.x,gun.position.y,gun.width,gun.height);
               

}
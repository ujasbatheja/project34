
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrained = Matter.Constraint;

var constrained1;
var ball1,ball2,ball3,ball4,ball5;
var strings1,strings2,strings3,strings4,strings5;

function preload()
{
	
}

function setup() {

	var canvas = createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600,100,800,20)

    ball1= new Ball(500,200,10,10);                                             
    ball2= new Ball(475,200,10,10);                                            
    ball3= new Ball(450,200,10,10);                                  
    ball4= new Ball(425,200,10,10);                                               
    ball5= new Ball(400,200,10,10);                                           
    strings1= new Strings(ground.body,ball1.body,-100);
    strings2= new Strings(ground.body,ball2.body,-125);
    strings3= new Strings(ground.body,ball3.body,-150);
    strings4= new Strings(ground.body,ball4.body,-175);
    strings5= new Strings(ground.body,ball5.body,-200);

	Engine.run(engine);
  
}

99
function draw() {
  rectMode(CENTER);
  background("blue");
  
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  strings1.display();                                                    
  strings2.display();
  strings3.display();
  strings4.display();
  strings5.display();
 
}

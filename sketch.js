const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3;
var bobObject4, bobObject5, rope1;
var roofObject1, rope2, rope3, rope4, rope5;
var roofObject2, roofObject3, roofObject4, roofObject5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject1 = new Roof(100,100,400,10)
	roofObject2 = new Roof(150,100,400,10)
	roofObject3 = new Roof(200,100,400,10)
	roofObject4 = new Roof(250,100,400,10)
	roofObject5 = new Roof(300,100,400,10)

	bobObject1 = new Bob(100,200,50)
	bobObject2 = new Bob(150,200,50)
	bobObject3 = new Bob(200,200,50)
	bobObject4 = new Bob(250,200,50)
	bobObject5 = new Bob(300,200,50)

	rope1 = new Rope(bobObject1.body, roofObject1.body, -2*2, 0)
	rope2 = new Rope(bobObject2.body, roofObject2.body, -2*2, 0)
	rope3 = new Rope(bobObject3.body, roofObject3.body, -2*2, 0)
	rope4 = new Rope(bobObject4.body, roofObject4.body, -2*2, 0)
	rope5 = new Rope(bobObject5.body, roofObject5.body, -2*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roofObject1.display();
  roofObject2.display();
  roofObject3.display();
  roofObject4.display();
  roofObject5.display();

 
}

function keyPressed(){

	if(keyCode==32){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -100, y: -100})
	}
}


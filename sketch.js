
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var dustbinObj,groundObject	
var world;
var paperObject;


function setup() {
	createCanvas(1000,600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,550,width,20);
	dustbinObj=new dustbin(500,530);

    paperObject = new Paper(200,450,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  console.log(paperObject.body)
  paperObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:145});
	}
}

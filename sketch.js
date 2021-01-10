
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,bob1,bob2,bob3
var slingShot,sling2



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      box1=new Box(200,10)
      
      bob1=new Bob(150,100)
	    bob2=new Bob(90,100)
      bob3=new Bob(210,100)

	slingShot = new SlingShot(bob1.body,{x:150,y:10})
  sling2 = new SlingShot2(bob2.body,{x:90,y:10})

  
  
	  Engine.run(engine);

}


function draw() {
  
  background(220);
  Engine.update(engine)
  strokeWeight(4)
  
  box1.display();
  bob1.display();
  bob2.display();
  bob3.display();

  slingShot.display();
  sling2.display();

 
}





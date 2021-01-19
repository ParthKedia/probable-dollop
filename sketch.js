
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;
var stone;
var hammer;
var rubber;

function setup() {
	createCanvas(800, 700);
	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
	stone = new Stone(500,600,70,70);
	hammer = new Hammer(100,20);
	rubber = new Rubber(300,200,40,40);


	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  hammer.display();
  rubber.display();
  
  
 
}




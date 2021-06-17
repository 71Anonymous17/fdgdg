
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var BinWall1;
var BinWall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var balloptions = {
		restitution: 1
	}

	ball = Bodies.circle(175,100,25,balloptions);
	World.add(world,ball);

	var options = {
		isStatic: true
	}

	ground = Bodies.rectangle(400,700,800,20,options);
	World.add(world,ground);

	BinWall1 = Bodies.rectangle(500,628,10,150,options);
	World.add(world,BinWall1);

	BinWall2 = Bodies.rectangle(650,628,10,150,options);
	World.add(world,BinWall2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,25);

  fill("green");

  rect(ground.position.x,ground.position.y,800,20);

  noFill();
  fill("blue");

  rect(BinWall1.position.x,BinWall1.position.y,10,125);
  rect(BinWall2.position.x,BinWall2.position.y,10,125);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}




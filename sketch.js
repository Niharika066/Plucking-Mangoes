
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;
const Constraint = Matter.Constraint;

var boy, tree, stone, mango1,mango4,mango5; 
var platfrom, mango2,mango3,mango6,mango7;
var boyImg, Rope;
function preload()
{
	boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	platform= new Ground(420,575,800,100);
	tree=new Tree(650,300,1,1);
	stone= new Stone(70,370,1,1);
mango1=new mango(640,150,23,30);
mango2=new mango(620,100,34,30);
mango3=new mango(690,200,35,30);
mango4=new mango(730,150,35,30);
mango5=new mango(600,180,35,30);
mango6=new mango(700,260,36,30);
mango7=new mango(550,230,35,30);
mango8=new mango(590,250,33,30);
mango9=new mango(750,200,35,30);

Rope=new rope(stone.body,{x:70, y:370})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

 image(boyImg,50,300,150,300);

  platform.display();
 tree.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
mango8.display();
mango9.display();
Rope.display();

detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);
detectcollision(stone,mango6);
detectcollision(stone,mango7);
detectcollision(stone,mango8);
detectcollision(stone,mango9);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
Rope.fly();
}
function detectcollision(lstone,lmango){
	if(lmango.body.position.x-lstone.body.position.x<lmango.diameter+lstone.diameter
	&& lstone.body.position.x-lmango.body.position.x<lmango.diameter+lstone.diameter
	&&lmango.body.position.y-lstone.body.position.y<lmango.diameter+lstone.diameter
	&& lstone.body.position.y-lmango.body.position.y<lmango.diameter+lstone.diameter )
	{
	Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if (keyCode === 32) {
		Rope.attach(stone.body);
	  }
}
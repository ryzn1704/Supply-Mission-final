var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var part1,part2,part3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	part1 = new Parts(300,610,10,100);
	part2 = new Parts(500,610,10,100);
	part3 = new Parts(400,660,200,10);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  part1.display();
  part2.display(); 
  part3.display();


packageSprite.x = helicopterSprite.x;


if (keyDown("RIGHT_ARROW")) {
	// Look at the hints in the document and understand how to make the package body fall only on
	helicopterSprite.x = helicopterSprite.x + 3;
	}
if (keyDown("LEFT_ARROW")) {
	// Look at the hints in the document and understand how to make the package body fall only on
	helicopterSprite.x = helicopterSprite.x - 3;
	}

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)

	}
		
}
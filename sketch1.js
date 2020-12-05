
// Matter.Engine,Matter.bodies,Matter.world

// Namespacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1,box2,ground;


function setup() {
  createCanvas(800,400);
  engine = Engine.create(); // engine = Matter.Engine.create();
  world = engine.world;

  box1 = new Box(300,100,100,50);
  box2 = new Box(250,250,40,50);

  ground = new Ground(200,390,400,10);
  console.log(box);   
}

function draw(){
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}
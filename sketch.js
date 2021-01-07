const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
function setup() {
  createCanvas(1200, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
    text("Press Up Arrow to Start, and Up to throw away the trash", 50, 200);
    text("Remmember what Gandhi Ji said",70,220);
    text("Swach Bharat Ka Iraada",90,240);
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();
}
/*if (paper.isTouching(dustbin)){
  background("black");
  textSize(20);
  fill("red");
  text("Well Done :}");
}*/
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 5,
      y:-6
    });
  }
  if (keyCode === LEFT_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: -5,
      y:-6
    });
  }

}

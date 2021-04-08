const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = "a"
var engine, world;
var position = 375;
var position2 = 725;
var ground1, ground2;
var box1, box2,box3,box4,box5,box6,box7;
var message = ""
function preload() {
  polygon_img = loadImage("hexagon.png")
}

function setup() {
  createCanvas(1000,400);
  


  engine = Engine.create();
  world = engine.world;


  
  ground1 = new Ground(500,height-100,width/3,20);

  ground2 = new Ground(600,height,1200,50);
  ground3 = new Ground(800,height-150,width/4,20);

  //level1 base 1

  box1 = new Box(position,250,25,60);
  box2 = new Box(position+25,250,25,60);
  box3 = new Box(position+50,250,25,60);
  box4 = new Box(position+75,250,25,60);
  box5 = new Box(position+100,250,25,60);
  box6 = new Box(position+125,250,25,60);
  box7 = new Box(position+150,250,25,60);
  box8 = new Box(position+175,250,25,60);
  box9 = new Box(position+200,250,25,60);
  box10 = new Box(position+225,250,25,60);
  box11 = new Box(position+250,250,25,60);

  //level2 base 1
  box12 = new Box(position+50,200,25,60);
  box13 = new Box(position+75,200,25,60);
  box14 = new Box(position+100,200,25,60);
  box15 = new Box(position+125,200,25,60);
  box16 = new Box(position+150,200,25,60);
  box17 = new Box(position+175,200,25,60);
  box18 = new Box(position+200,200,25,60);
  
  //level3 base 1
  box19 = new Box(position+75,150,25,60);
  box20 = new Box(position+100,150,25,60);
  box21 = new Box(position+125,150,25,60);
  box22 = new Box(position+150,150,25,60);
  box23 = new Box(position+175,150,25,60);


  block1 = new Box(position2,200,25,60,);
  block2 = new Box(position2+25,200,25,60);
  block3 = new Box(position2+50,200,25,60);
  block4 = new Box(position2+75,200,25,60);
  block5 = new Box(position2+100,200,25,60);
  block6 = new Box(position2+125,200,25,60);
  block7 = new Box(position2+150,200,25,60);
  //leve2
  block9 = new Box(position2+25,150,25,60);
  block10 = new Box(position2+50,150,25,60);
  block11 = new Box(position2+75,150,25,60);
  block12 = new Box(position2+100,150,25,60);
  block13 = new Box(position2+125,150,25,60);
  // block14 = new Box(position2+150,130,25,60);
  // level 3
  block15 = new Box(position2+50,100,25,60);
  block16 = new Box(position2+75,100,25,60);
  block17 = new Box(position2+100,100,25,60);
  // block18 = new Box(position2+175,150,25,60);
  // block19 = new Box(position2+175,150,25,60);

  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0,
    'isStatic': false
}

  // polygon = Bodies.polygon(100, 300,6, 25, options);
  // World.add(world, polygon);
  polygon = Bodies.circle(75, 200, 10);
  World.add(world, polygon);


  slingShot = new SlingShot(polygon,{x:200, y:250});
  
}

function draw() {
  Engine.update(engine);
  background(57,43,43);
  
  
  

  textSize (20)
  fill("red")
  text(message,20,200)
  fill ('yellow');
  text("Drag the Hexagonal Stone and  Release it, to launch it towards th blocks", width/6, 50)
  text("mouse: x = " + mouseX + ", y = " + mouseY, 100,100)

  imageMode(CENTER);
  
  image(polygon_img, polygon.position.x, polygon.position.y, 40,40)


  ground1.display();
  ground2.display();
  ground3.display();
  fill ("blue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  fill("red")
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill ("white")
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  
  fill ("pink")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  // block14.display();
  block15.display();
  block16.display();
  block17.display();
  slingShot.display();
  
  
}

function mouseDragged() {
  if (gameState!=="b"){
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
  message = "launch"}
}

function mouseReleased() {
  if (gameState!=="b"){
  slingShot.fly();
  message = ""
    gameState = "b";
}
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon)
    gameState = "a";
  }
}
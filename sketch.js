const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box8, box9,box10, box11, box12, box13, box14, box15;
var hero,monster,rope,ground, backgroundImg, bg = "bg2.jpg";

function preload() {
  bg = loadImage("bg1.png");
  // getTime();
}

function setup() {
  createCanvas(1280, 648);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(700, 100, 70, 70);
  box2 = new Vaccine(900, 100, 70, 70);
  box3 = new Sanitizer(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Vaccine(700, 100, 70, 70);
  box6 = new Sanitizer(700, 100, 70, 70);
  box7 = new Box(700, 100, 70, 70);
  box8 = new Vaccine(700, 100, 70, 70);
  box9 = new Sanitizer(700, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11 = new Vaccine(800, 100, 70, 70);
  box12 = new Sanitizer(800, 100, 70, 70);
  box13 = new Box(800, 100, 70, 70);
  box14 = new Vaccine(800, 100, 70, 70);
  box15 = new Sanitizer(800, 100, 70, 70);
}

function draw() {
  // if(backgroundImg)
  // background(backgroundImg);
  background(bg);
  
  Engine.update(engine);
  ground.display();
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
  box12.display();
  box13.display();
  box14.display();
  box15.display();


  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}

// async function getTime(){
//   var getInfo = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//   var infoType = await getInfo.json();
//   console.log(infoType);

//   var getdatetime = infoType.datetime;
//   console.log(getdatetime);

//   var getHour = getdatetime.slice(11, 13);
//   console.log(getHour);

//   if(getHour>=06 && getHour<=19)
//       bg = "bg1.png";
//    else
//       bg = "bg2.jpg";
  
//   backgroundImg = loadImage(bg);
//   console.log(backgroundImg);
// }
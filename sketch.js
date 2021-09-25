const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2;
var bird1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    box3 = new Box(700,110,70,70);
    box4 = new Box(920,100,70,70);
    box5 = new Box(810,50,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(810,200)
    pig2 = new pig(810,110)
    log1 = new tronco(810, 110, 300, PI/2);
    log2 = new tronco(810, 100, 300, PI/2);
    log3 = new tronco(760, 10, 150, PI/7);
    log4 = new tronco(870, 10, 150, -PI/7);
    bird1 = new bird(100, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
   log1.display();
   pig2.display();
   log2.display();
   bird1.display();
   box5.display();
   log3.display();
   log4.display();
}
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bgImg, arrowImg, bowImg, bullseyeImg;

var canW, canH;

var life = 3;
var score = 0;
var gameState = 1;

function preload(){
  bgImg = loadImage('pics/bg.jpg');
  arrowImg = loadImage('pics/arrow.png');
  bowImg = loadImage('pics/bow.png');
  bullseyeImg = loadImage('pics/bullseye.png');
}

function setup() {
  /*var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth, displayHeight);
  }
  else{
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  }*/

  createCanvas(900, 700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 690, 2000, 20);
  ceiling = new Ground(200, 10, 2000, 20);
  
  bow = createSprite(70, height/2, 50, 50);
  bow.addImage(bowImg);
  bow.scale = 0.5;

  bullseye = createSprite(800, height/2, 50, 50);
  bullseye.addImage(bullseyeImg);
  bullseye.scale = 0.5;
}

function draw() 
{
  background(bgImg);
  //image(bgImg, 0, 0, displayWidth, displayHeight);

  Engine.update(engine);

  if(gameState===1){
    arrowMovement();
  }

  ground.show();
  ceiling.show();

  drawSprites();
   
}

function arrowMovement(){

  if(keyDown(UP_ARROW)){
    bow.y -= 10;
  }

  if(keyDown(DOWN_ARROW)){
    bow.y += 10;
  }

  if(keyDown("space")){
    bow.y = mouseY;
  }
}



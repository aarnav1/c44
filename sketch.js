var player;
var playerWalk;
var playerClimb;
var playerJump;
var player;
var guard1, guard2, guard3, guard4, guard5;
var robot1, robot2;
var robot;
var door;
var wall1; 
var floor = 5;
var block1;
var invisGround;

function preload(){
  playerWalk = loadAnimation("images/alienWalk1.png", "images/alienWalk2.png");
  playerClimb = loadAnimation("images/alienClimb1.png", "images/alienClimb2.png");
  playerDuck = loadImage("images/alienDuck.png");
  playerAlien = loadImage("images/alien.png");
  playerJump = loadImage("images/alienJump.png");
  robot1 = loadImage("images/Robot1.png");
  robot2 = loadImage("images/Robot2.png");

}


function setup() {
  createCanvas(1200,800);
  guard1 = createSprite(600, 450, 50, 50);
  guard2 = createSprite(800, 450, 50, 50);
  player = createSprite(250, 435, 20, 20);
  //add animation
  player.addAnimation("Walk", playerWalk);
  player.addAnimation("Climb", playerClimb);
  player.addImage("Duck", playerDuck);
  player.addImage("alien", playerAlien);
  player.addImage("Jump", playerJump);
  block1 = createSprite(450, 435, 50, 150);
  guard1.addImage("bot1", robot1);
  guard1.addImage("bot2", robot2);
  guard1.scale = 0.09;
  guard1.debug = true;
  guard1.velocityX = 4;
  guard2.addImage("bot1", robot1);
  guard2.addImage("bot2", robot2);
  guard2.scale = 0.09;
  guard2.debug = true;
  invisGround = createSprite(600, 650, 1200, 20);
  invisGround.visible = false;
}
function draw() {
  background(255,255,255); 
  
  fill(155);
  rect(0, 450, 1200, 200);
  fill(125);
  rect(0, 50, 200, 600);

  player.velocityY = player.velocityY + 0.8;

  player.collide(invisGround);

  if(keyDown(RIGHT_ARROW)){
    playerRight();
  }

  if(keyDown(LEFT_ARROW)){
    playerLeft();
  }

  if(keyDown(UP_ARROW)){
    Jump(); 
  }
/*
  if(keyDown(DOWN_ARROW)){
    playerDown();
  }
*/
  if(keyDown('space')){
    Duck();
  }
  
  if(keyWentUp('space')){
    player.changeAnimation("alien", playerAlien);
  }

  if(keyWentUp(UP_ARROW)){
    player.changeAnimation("alien", playerAlien);
  }

  if(guard1.x - player.x <= 40){
    textSize(30);
    text("LKHJ", 400, 400);
  }

  if(guard1.x === 750){
    guard1.changeAnimation("bot1", robot1);
  }

  drawSprites();
}

function playerRight(){
  player.changeAnimation("Walk", playerWalk);
  player.velocityY = 0;
  player.x = player.x + 5;
}

function playerLeft(){
  player.velocityY = 0;
  player.x = player.x - 5;
}

function Jump(){
  player.changeAnimation("Jump", playerJump);
  player.velocityY = -8;
}

function Duck(){
  player.changeAnimation("Duck", playerDuck);
}
/*
function playerDown(){
  player.changeAnimation("Jump", playerJump);
  player.y = player.y + 5;
}
*/
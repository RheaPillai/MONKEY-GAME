var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime
function preload(){

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(800,600)
  
  obstacleGroup= new Group()
  bananaGroup= new Group()
  
  score=0
  suvivalTime=0
  
  //monkey
  monkey = createSprite(300,450)
  monkey.addAnimation("running",monkey_running )
  monkey.scale=0.3

  //obstacle
 
  
  //bananas
  
  //ground
  ground=createSprite(400,550,1000,30)
  
  
 
  
  
}


function draw() {
   background("white")
  
  //collide
  monkey.collide(ground)
  
  //ground speed
  ground.velocityX=-5
  if(ground.x<300){
    ground.x=500
  }
  
   //jump
  if(keyWentDown("space") && monkey.y>400){
    monkey.velocityY=-10
  }
  
  //gravity
  monkey.velocityY=monkey.velocityY+0.2
  
  
  
spawnBananas()
  spawnObstacles()
  
  

  
  //text("score :"+score,400,20)
  
  text("survival time :"+survivalTime,400,20)
  survivalTime=Math.ceil(frameCount/frameRate())
  drawSprites()
  


}

function spawnBananas(){
  if( frameCount%80===0){
    banana=createSprite(600,200)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.y=Math.round(random(120,200))
    bananaGroup.add(banana)
    banana.lifetime=120
  }
}
function spawnObstacles(){
  if (frameCount%300===0){
    obstacle=createSprite(500,500)
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.3
    obstacleGroup.add(obstacle)
    obstacle.lifetime=150
    
  }
}






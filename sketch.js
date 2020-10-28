gamestate = 1
START = 1
END = 0
function preload(){
towerr = loadImage("tower.png")  
spookyy = loadSound("spooky.wav")  
ghostss = loadImage("ghost-standing.png")
ghostjj = loadImage("ghost-jumping.png") 
doorr = loadImage("door.png")
} 
function setup(){
spookyy.play()
createCanvas(400,400)
doorgroup = new Group()
tower = createSprite(200,200,10,10)
tower.addImage(towerr)
tower.scale = 0.5
ghosts = createSprite(200,200,10,10)
ghosts.addImage(ghostss)
ghosts.scale = 0.25
ghostj = createSprite(500,200,10,10)
ghostj.addImage(ghostjj)
ghostj.scale = 0.25
}
function draw(){
background("black")
  if(gamestate === 1 ){
  tower.velocityY = 5
  ghosts.y = ghosts.y+3
if(tower.y>=300){
  tower.y = 50
}
if(keyDown("left")&& ghosts.x>=70){
  ghosts.x = ghosts.x-5
} 
if(keyDown("right")&&ghosts.x<=330){
  ghosts.x = ghosts.x+5
} 
if(keyDown("space")&&ghosts.y<=385){
  ghosts.y = ghosts.y-10
}  
doors()
}
if(ghosts.isTouching(doorgroup)){
  gamestate = 0
}
if(gamestate === 0){
  ghosts.velocityY = 0
  tower.velocityY = 0
  ghosts.y = ghosts.y
  doorgroup.setVelocityYEach(0) 
  doorgroup.setLifetimeEach(-1)
  tower.visible = false
  doorgroup.setVisibleEach(false) 
  ghosts.visible = false
  textSize(20)
  fill("yellow")
  text("GAME OVER",130,200)
  
}
drawSprites();
}
function doors(){
 if(frameCount%70 == 0){
   y = ghosts.y - 95
   door = createSprite(random(120,300),y,10,10)
   door.velocityY = 5
  door.addImage(doorr)
  door.scale = 0.65  
  door.lifetime = 75
  doorgroup.add(door)
 } 
}
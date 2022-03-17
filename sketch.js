var torre, imageTorre;
var door, doorImage, doorGroup;
var climber, climberImage, climberGroup;
var ghost, ghostImage;
var gameState="play";






function preload(){
imageTorre= loadImage("tower.png");
doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png");

}




function setup(){
createCanvas(600,600);
torre=createSprite(300,300);
torre.addImage("torre",imageTorre);
 torre.velocityY=1;




doorGroup=new Group();

climberGroup=new Group();


ghost=createSprite(200,200,50,50);
ghost.addImage("fantasma",ghostImage);
ghost.scale=0.4;




}











function draw(){
background("black");




if(gameState==="play"){
  if(torre.y>400){
    torre.y=300;
    }
    
    
    if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
    }
    
    if(keyDown("left_arrow")){
      ghost.x=ghost.x-3;
      }
      
      if(keyDown("space")){
    ghost.velocityY=-5;
      }
    
    ghost.velocityY=ghost.velocityY+0.8;
    
    
    
    if(climberGroup.isTouching(ghost)){
    
    ghost.velocityY=0;
    }

   if(ghost.y>600){
gameState="end";
ghost.destroy();

   } 
  doorSpawn()
  drawSprites()
}

if(gameState==="end"){
textSize(35);
stroke("pink");
fill("purple");
text("Fin Del Juego",200,300);

}




}










function doorSpawn(){


  if(frameCount %240==0){
door=createSprite(200,-50);
door.addImage("puertas",doorImage);

door.x=Math.round(random(120,400));
door.velocityY=1;

door.lifetime=800;

doorGroup.add(door);


climber=createSprite(200,10);
climber.addImage("barandal",climberImage);

climber.x=door.x;
climber.velocityY=1;
climber.lifetime=800;
climberGroup.add(climber);

ghost.depth=door.depth;
ghost.depth+=1;

}




}
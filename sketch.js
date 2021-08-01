
var bgImg
var iss,issImg,issImg2
var spacecraft,sc
var HasDocked=false


function preload(){
sc=loadImage("sc.png")
issImg=loadImage("iss.png")
issImg2=loadImage("iss2.png")
bgImg=loadImage("bg234.PNG")
}

function setup() {
  createCanvas(800,400);

  iss=createSprite(400, 300, 50, 50);
  iss.addImage(issImg)
  iss.scale=0.5

  spacecraft=createSprite(500, 100, 50, 50);
 spacecraft.addImage(sc)
 spacecraft.scale=0.5

}


function draw() {
  background(bgImg);  
  drawSprites();

  if(!HasDocked){

 if(keyDown("up")){
   iss.y=iss.y-2
 }
  
 if(keyDown("down")){
  iss.y=iss.y+2
}
if(keyDown("right")){
  iss.x=iss.x+2
  iss.addImage(issImg)
}
if(keyDown("left")){
  iss.x=iss.x-2
  iss.addImage(issImg2)
} 
  }
console.log(iss.y)

if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x+30)){
   hasDocked = true;
     textSize(25);
      fill("white") 
  text("Docking Successful!", 200, 300); 
}

}
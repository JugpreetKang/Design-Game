var bg, backgroundIMG;
var player, playerImg;
var alien, alienImg;
var UFOGroup, UFOImg;
var edges;
var gameStates="start";
var score=0;
var fCount;

function preload() {
  backgroundIMG=loadImage("bckg.jpg");
  alienImg=loadImage("alien_PNG41.png");
  playerImg=loadImage("astronaut.png");
  UFOImg = loadImage("UFO.png");
}

function setup(){
  createCanvas(600,600);

  bg = createSprite(300,300,600,600);
  bg.addImage("bgIMG", backgroundIMG);
  bg.velocityX = 1;
  bg.scale = 0.3;
  
  alien = createSprite(500,400,20,20);
  alien.addImage("alI", alienImg)
  alien.scale = 0.08;

  player = createSprite(100,400,20,20);
  player.addImage("astroI", playerImg);
  player.scale = 0.08;

  edges = createEdgeSprites();
  
  UFOGroup = new Group();

}

function draw(){
  background(backgroundIMG);

  //Create Infinity background
  if(bg.x>500){
    bg.x = 300
  }

  //Applying game states
  if(gameStates==="start"){
    if(keyDown("down")){
      player.y = player.y+3;
    }
    if(keyDown("up")){
      player.y = player.y-3;
    }
      }
  


  spawnUFOS();

  player.collide(edges[2]);
  player.collide(edges[3]);

  drawSprites();
  fill("white");
  textSize(20);
  text("score: "+score, 20,20);
  score =score+Math.round(getFrameRate()/60);
}

function spawnUFOS(){
  fCount = frameCount
  if (frameCount % 200 === 0) {
    var UFO = createSprite(width+20,height-300,40,10);
    UFO.y = Math.round(random(10,590));
    UFO.addImage(UFOImg);
    UFO.scale = 0.04;
    UFO.velocityX=-(2+score/100);
  


    UFOGroup.add(UFO);
}
}
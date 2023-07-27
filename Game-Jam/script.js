/* VARIABLES */
let title; 
let homeBack;
let plant1;
let tree1;
let startButton;
let backButton;
let leafHome;
let FONT; 
let CD;
let sound1;
let sound2;
let sound3;
let character1;
let character2;
let character3;
let bush1;
let bush;
let sun;
let water;
let scent;
let pigeon;
let bug;
let fox;
let iris;
let state;
let player;
let restart;

/* PRELOAD LOADS FILES */
function preload(){
  homeBack = loadImage("assets/homebackground.png");
  tree1 = loadImage("assets/tree1.gif");
  leafHomeImg = loadImage("assets/leafHome.png");
  startButtonImg = loadImage("assets/startButton.gif");
  backButtonImg = loadImage("assets/backButton.png");
  FONT = loadFont("assets/font.TTF");
  CD = loadImage("assets/CD.png");
  sound1 = loadSound("assets/sound1.mp3");
  sound2 = loadSound("assets/sound2.mp3");
  sound3 = loadSound("assets/sound3.mp3");
  character1Img = loadImage("assets/character1.png");
  character2Img = loadImage("assets/character2.png");
  character3Img = loadImage("assets/character3.png");
  bush1 = loadImage("assets/bush1.png")
  bush = loadImage("assets/bush.png")
  sun = loadImage("assets/sun.png")
  water = loadImage("assets/water.png")
  scent = loadImage("assets/scent.png")
  pigeonImg = loadImage("assets/pigeon.png")
  bugImg = loadImage("assets/bug.png")
  foxImg = loadImage("assets/fox.png")
  iris = loadImage("assets/iris.png")
}
  



/* SETUP RUNS ONCE */
function setup() {
  
  createCanvas(800, 800);
  background(homeBack);
  image(tree1, 580, 500);
  title = createImg("assets/title.png");
  title.position(170, 8);

/* RESIZE ASSETS */
  leafHomeImg.resize(70, 70);
  startButtonImg.resize(400, 400);
  backButtonImg.resize(100, 150);
  CD.resize(100, 100);
  character1Img.resize(200,270);
  character2Img.resize(200,270);
  character3Img.resize(200,270);
  bush.resize(160, 170)
  bush1.resize(250, 210)
  sun.resize(100, 100)
  water.resize(70, 80)
  scent.resize(90, 100)
  pigeonImg.resize(90, 100)
  foxImg.resize(90, 100)
  bugImg.resize(90, 100)
/* SPRITES */
  startButton = new Sprite(startButtonImg, 400, 560);
  startButton.collider = 's';
  textFont(FONT);
  textSize(20);
  text("START GROWING!", 280, 780); 
  
  // BUTTONS
  leaf = new Group();
  leaf.collider = 'k';
  instructionLeaf = new leaf.Sprite (leafHomeImg, 250, height/2 +100);
  soundLeaf = new leaf.Sprite (leafHomeImg, 400, height/2 +100);
  characterLeaf = new leaf.Sprite (leafHomeImg, 550, height/2 +100);
  textSize(15);
  text("instructions", 180, 550); 
  text("music", 370, 550); 
  text("characters", 490, 550);
  backButton = new Sprite(backButtonImg, -50, -50);
  backButton.collider = 's';
  // fill("beige");
  // restart = new Sprite(200, 100, 500, -700);
  // restart.collider ='s';
  
 //SOUNDS
  sound = new Group();
  sound.collider = 'k';
  sound1 = new sound.Sprite (CD, -250, -400);
  sound2 = new sound.Sprite (CD, -420, -400);
  sound3 = new sound.Sprite (CD, -580, -400);
 
//CHARACTERS
  character = new Group();
  character.collider = 'k';
  character1 = new character.Sprite (character1Img, -230, -300);  
  character2 = new character.Sprite (character2Img, -410, -300);
  character3 = new character.Sprite (character3Img, -600, -300);

  player = character1
  state = "home";
}

/* DRAW LOOP REPEATS */
function draw() {
  // background(homeBack);
  if (state === "home") {
    if (instructionLeaf.mouse.presses()) {
      state = "instruction"
      moveScreen();
      fill(0);
      textSize(25);
      text("Welcome to the \nGarden of Growth! \nIn this casual game\nplayers embrace the role \nof a young botanist tending \nto an enchanting garden \nfilled with magical plants, \neach possessing unique abilities \nand mysteries waiting \nto be unraveled! \n\nUse the arrow keys \nto move your character \nand collect the neccesities \nfor your plant \nand escape the garden! \nMake sure to avoid the animals \nthough!", 130, 200);
    }
  
    
    if (soundLeaf.mouse.presses()) {
      moveScreen();
      moveSounds();
    }
  
    
    if (characterLeaf.mouse.presses()) {
      state = "character"
      moveScreen();
      moveCharacters()
    }
    
    if (backButton.mouse.presses()) {
      resetHomeScreen();
    }
    
    if (startButton.mouse.presses()) {
      enterGame();  // sets up the game stage
      state = "game"  // sets the state to 'game'
    }
  }
  
  if (state === "instruction") {
    if (backButton.mouse.presses()) {
      resetHomeScreen();
      state = "home"
    }
  }

  if (state === "character") {
    if (character1.mouse.presses()) {
      player = character1
    }
    if (character2.mouse.presses()) {
      player = character2
    }
    if (character3.mouse.presses()) {
      player = character3
    }
    
    if (backButton.mouse.presses()) {
      resetHomeScreen();
      state = "home"
    }
  }

  // processes all game movement/mechanics
  if (state === "game") {
    background("beige");
    text("EXIT", 730, 780);
    if (kb.pressing("left")) {
      player.vel.x = -3;
    } else if (kb.pressing("right")) {
      player.vel.x = 3;
    } else if (kb.pressing("up")) {
      player.vel.y = -3;
    } else if (kb.pressing("down")) {
      player.vel.y = 3;
    } else {
      player.vel.x = 0;
      player.vel.y = 0;
    }
    if (player.x < 20) {
      player.x = 20;
    }
    // Put movement functionality in here

    if (state === "win") {
      if (player.y > 790) {
        background("pink")
        createImg (iris, 500, 500);
        // restart.pos = {x: 500, y: 700};
        textSize(25);
        text('Good Job! \n You have successfully \n planted an Iris flower! \n You are now a certified \nhopeful botanist! \n\nPS: The iris flower \nsymbolizes hope!', 360, 170);
        player.vel.x = 0;
        player.vel.y = 0;
      }
      // if (restart.mouse.presses());
      // resetHomeScreen();
    }
    // once you have the "winning state", don't forget to set "state variable" back to whatever new state/screen you want displayed.
  }
}

/* FUNCTIONS */
function moveSounds(){
  sound1.pos = {x: 250, y: 400};
  sound2.pos = {x: 420, y: 400};
  sound3.pos = {x: 580, y: 400};
  // text("Sunset Trip",250,420);
  // text("OverGrown",420, 420);
  // text("Dandelion",580, 400);
}

function resetSounds(){
  sound1.pos = {x: -250, y: -400};
  sound2.pos = {x: -420, y: -400};
  sound3.pos = {x: -580, y: -400};
  
}


function moveCharacters(){
  character1.pos = {x:230, y:300}
  character2.pos = {x:410, y:300}
  character3.pos = {x:600, y:300}
}

function resetCharacters(){
  character1.pos = {x:-230, y:-300}
  character2.pos = {x:-410, y:-300}
  character3.pos = {x:-600, y:-300}
}

function moveScreen(){
  startButton.remove()
  instructionLeaf.remove()
  soundLeaf.remove()
  characterLeaf.remove()
  textSize(15);
  text("Back", 30, 120);
  textSize(12);
  text("instructions", 180, -550); 
  text("music", 370, -550); 
  text("characters", 490, -550);
  fill(204, 255, 153);
  rect(100, 80, 650, 700, 8);
  title.hide()
  backButton.pos = {x: 50, y: 50};
}

function createHomeScreenSprites() {
  startButton = new Sprite(startButtonImg, 400, 560);
  startButton.collider = 's';
  
  leaf = new Group();
  leaf.collider = 'k';
  instructionLeaf = new leaf.Sprite (leafHomeImg, 250, height/2 +100);
  instructionLeaf.collider = 's';
  soundLeaf = new leaf.Sprite (leafHomeImg, 400, height/2 +100);
  soundLeaf.collider = 's';
  characterLeaf = new leaf.Sprite (leafHomeImg, 550, height/2 +100);
  characterLeaf.collider = 's';
}

function resetHomeScreen() {
  backButton.pos = {x: -50, y: -50};
  resetCharacters();
  resetSounds();
  createCanvas(800, 800);
  background(homeBack);
  image(tree1, 580, 500);
  title.show();
  fill(0);
  textSize(15);
  text("instructions", 180, 550); 
  text("music", 370, 550); 
  text("characters", 490, 550);
  textSize(20);
  text("START GROWING!", 280, 780); 
  createHomeScreenSprites();
}

// only used for setting up game stage
function enterGame() {
  background("beige");
  title.hide()
  startButton.pos = {x: 200, y: -200};
  instructionLeaf.pos = {x: 250, y: -200};
  soundLeaf.pos = {x: 250, y: -200};
  characterLeaf.pos = {x: 250, y: -200};
  player.pos = {x:700, y:100}
  
  //MAZE WALLS
  mazeStuff = new Group();
  mazeStuff.collider = 's';
  one = new mazeStuff.Sprite(bush1, 80, 100);
  two = new mazeStuff.Sprite(bush, 200, 50);  
  three = new mazeStuff.Sprite(bush1, 550, 630);
  four = new mazeStuff.Sprite(bush1, 400, 400);
  five = new mazeStuff.Sprite(bush, 70, 300); 
  six = new mazeStuff.Sprite(bush1, 640, 160);
  seven = new mazeStuff.Sprite(bush, 340, 250);
  eight = new mazeStuff.Sprite(bush1, 120, 600);
  nine = new mazeStuff.Sprite(bush, 350, 690);
  ten = new mazeStuff.Sprite(bush, 700, 400);
  eleven = new mazeStuff.Sprite(sun, 80, 380);
  twelve = new mazeStuff.Sprite(water, 720, 500);
  thirteen = new mazeStuff.Sprite(scent, 70, 700);
  
  text("EXIT", 730, 780);

  //ANIMALS
  pigeon = new Sprite(pigeonImg, 600, 400, 'k');
  fox = new Sprite(foxImg, 60, 100, 'k');
  bug = new Sprite(bugImg, 550, 200, 'k');
  
  if (pigeon.y > 150){
     pigeon.vel.y = -1;
    } else if(pigeon.y < 120){
      pigeon.vel.y = 1;
    }
  pigeon.rotationLock = true;
  
  fox.rotationLock = true;
  fox.vel.y = 1;
  
  bug.rotationLock = true;
  bug.vel.y = 1;
  
  

// //Player cannot go above maze
//  if (player.y < 20) {
//     player.y = 20;
//   }
//  // Player wins
// if (player.y > 790) {
//   background("pink")
//   createImg (iris, 500, 500);
//   textSize(25);
//   text('Good Job! \n You have successfully \n planted an Iris flower! \n You are now a certified \nhopeful botanist! \n\nPS: The iris flower \nsymbolizes hope!', 360, 170);
//   player.vel.x = 0;
//   player.vel.y = 0;
//   }
  
};
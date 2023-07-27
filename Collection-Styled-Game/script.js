//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let fallingObject;
let catcher;
let secondFallingObject;
let flowers = 0;
let melody;
let melodyTwo;
let back;
let flower; 
let wilted;
let font;
let flowerShop;
let bouquet;
let correctSound;
let incorrectSound;


function preload() {
  melody = loadImage("assets/melody.png");
  melodyTwo = loadImage("assets/melody2.png")
  back = loadImage("assets/download.jpg")
  flower = loadImage("assets/flower.png")
  wilted = loadImage("assets/wilted.png")
  flowerShop = loadImage("assets/flowershop.jpg")
  bouquet = loadImage("assets/bouquet.png")
  font = loadFont("assets/VT323-Regular.ttf")
  correctSound = loadSound("assets/correct-2-46134.mp3")
  incorrectSound = loadSound("assets/wrong-answer-126515.mp3")
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(800,800);

  //button
  restartButton = new Sprite (-150,-150);
  
  //resize images
  flower.resize(30,30);
  wilted.resize(40,40);

  //Create catcher 
  catcher = new Sprite(melodyTwo, 650, 690, 'k');
  
  //Create falling object(s)
  fallingObject = new Sprite(flower, 100,0);
  fallingObject.vel.y = 8;
  secondFallingObject = new Sprite(wilted, 260, 0);
  secondFallingObject.vel.y = 9;
}

/* DRAW LOOP REPEATS */
function draw() {
  background(back);
  stroke(8);
  textSize(24);
  fill("blue");
  textFont(font);
  text("Use your left and right \narrow keys \nto move MyMelody \nand catch the pink flowers. \nAvoid the thorny roses!!", 540, 30);

   
//move catcher
  if (kb.pressing("left")){
     catcher.vel.x = -7;  
   }
  else if (kb.pressing("right")){
    catcher.vel.x = 7;
  }
  else {
    catcher.vel.x = 0; 
  }
//stop catcher at edges of screen
  if (catcher.x < 100 ){
    catcher.x = 100; 
  }
  else if (catcher.x > 700){
    catcher.x = 700; 
  }
//if fallingObject collides with catcher, move back to random position at top
  if (fallingObject.collides(catcher)){
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(4,8);
    fallingObject.direction = "down";
    // song.play(correctSound);
    flowers +=1;
  }
   if (secondFallingObject.collides(catcher)) {
    secondFallingObject.y = 0;
    secondFallingObject.x = random(width);
    secondFallingObject.velocity.y = random(4,10);
    secondFallingObject.direction = "down";
     if (flowers > 0){
       flowers -=1;
     }
   }
  
  //If fallingObject reaches botton, move back to random position at top
  if (secondFallingObject.y >= height) {
    secondFallingObject.y = 0;
    secondFallingObject.x = random(width);
    secondFallingObject.vel.y = random(4,10);
  }

  //end state 
  if (fallingObject.y >= height){
     fallingObject.y = height + 100; 
     fallingObject.vel.y = 0;
     secondFallingObject.y = -100; 
     secondFallingObject.vel.y = 0;
    
//restart button location/description
      restartButton.pos ={x: width/ 2, y:height/ 2 };
      restartButton.height = 80;
      restartButton.w = 180;
      restartButton.collider = 'k';
      restartButton.color = 'beige';
      restartButton.textSize = 30
      restartButton.text = 'Start Over?!';
    
      if (restartButton.mouse.presses()){
          // print("pressed!");
          restartButton.pos ={x: -150, y: -150 };
          fallingObject.y = 0;
          fallingObject.x = random(width);
          fallingObject.vel.y = random(6,12);
          fallingObject.direction = "down";
      
          secondFallingObject.y = 0;
          secondFallingObject.x = random(width);
          secondFallingObject.vel.y = random(4,10);
          secondFallingObject.direction = "down";
          flowers = 0;
        
      }
   // if (flowers >9){
   //   youWin();

   //   if(mouseIsPressed){
   //     restart()
   //   }
   // }
    
  }
  
//keeps track of score
  textSize(30)
  fill("blue");
  textFont(font)
  text("flowers: " + flowers, 40, 35);

}

// function youWin() {
  
//       fallingObject.pos={x:-150, y:-150};
//       secondFallingObject.pos = {x:-150, y:150};
//       catcher.pos = {x:-150, y:-150};
//       background(flowerShop)
//       fill("beige")
//       text("Nice Job collecting \nthe flowers!! \nNow MyMelody can \nmake her bouquet!", width/2, height/2)
//       image(bouquet, 600, 700)
//     }
// function restart() {
//         flowers = 0;
//         catcher.pos = {x:650, y:690};
//         fallingObject.y = 0;
//         fallingObject.x = random(width);
//         fallingObject.vel.y = random(6,12);
//         fallibgObject.direction = "down";
//     } 
 
  
  



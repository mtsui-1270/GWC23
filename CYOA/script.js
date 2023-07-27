//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

//images

let mario;
let exclaim;
let coins;
function preload(){
  mario = loadImage("images/mario-.png")
  exclaim = loadImage("images/marioexclaim.png")
  coins = loadImage("images/coins.png")
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(900, 700);
  textAlign(CENTER);
  textSize(25);
  noStroke();
  // Set up the home screen
  background(133, 224, 133);
  text(
    "Welcome to Mario's Forest.",
    width / 2,
    height / 2 - 100);
  textSize(15)
  
  text("Mariah's CYOA Base", 100, 50)
   image(mario, 50, 300, 300, 300);
  
  
  // Create buttons for all screens
  enterButton = new Sprite (width/2, height/2 +100)
  a1Button = new Sprite (width/2 - 500 , height/2 +100)
  a2Button = new Sprite (width/2 +500, height/2 +100)
  b1Button = new Sprite (-100, -100)
  b2Button = new Sprite (-150, -150)
  restartButton = new Sprite (-100, -120)
}

/* DRAW LOOP REPEATS */
function draw() {
 
  textSize(25)
  // Display enter button
  enterButton.w = 100;
  enterButton.height= 50;  
  enterButton.collider = 'k';
  enterButton.color = "teal";
  enterButton.text = 'Enter';
 
  // Checks enter button
  if (enterButton.mouse.presses()){
    print("pressed!");
    showScreen1();
    screen = 1;
  }
  
  if (screen === 1){
    if (a1Button.mouse.presses()){
      print("display screen 2");
      showScreen2();
      screen = 2;
    }
      
    else if(a2Button.mouse.presses()){
      print("display screen 5");
      showScreen5();
      screen = 5;
    }
  }
  else if (screen === 2){
    if (b1Button.mouse.presses()){
      showScreen3();
      screen = 3;
    }
    else if (b2Button.mouse.presses()){
      showScreen4();
      screen = 4;
    }
  }
}



//* FUNCTIONS TO DISPLAY SCREENS */

function showScreen1(){
  background("paleturquoise");
  image(exclaim, 370, 50, 200, 200);
  text(" Quick ", width/2,
  height/2 -60);
  enterButton.pos = {x: -200, y: -200};

   // Add A1 button
  a1Button.pos ={x: width/ 2 - 50, y:height/ 2 + 100};
  a1Button.height = 50;
  a1Button.w = 50;
  a1Button.collider = 'k';
  a1Button.color = 'plum';
  a1Button.text = 'a1';
  
  // Add A2 button
  a2Button.pos = {x: width/ 2 + 50, y:height/ 2 + 100};
  a2Button.height = 50;
  a2Button.w = 50;
  a2Button.collider = 'k';
  a2Button.color = 'plum';
  a2Button.text = 'a2';
  
}

function showScreen2(){
  background("palegreen");
  text("Welcome to screen 2.  Make your second choice!" , width/2, 
  height/2 - 100);
  // puts a1 and a2 buttons off screen
  a1Button.pos = {x:width/2 - 500, y:height/2 + 100};
  a2Button.pos = {x:width/2 + 500, y:height/2 + 100};
      
  // moves b1 button on screen
  b1Button.pos ={x: width/ 2 - 50, y:height/ 2 + 100};
  b1Button.height = 50;
  b1Button.w = 50;
  b1Button.collider = 'k';
  b1Button.color = 'plum';
  b1Button.text = 'b1';
      
  // moves b2 button on screen
  b2Button.pos = {x: width/ 2 + 50, y:height/ 2 + 100};
  b2Button.height = 50;
  b2Button.w = 50;
  b2Button.collider = 'k';
  b2Button.color = 'plum';
  b2Button.text = 'b2';    
  
}

function showScreen3(){
  background("teal");
  fill("white")
  textFont("Chela One")
  textSize(25)
  text("You hit an end point at Screen 3!!", width/2, height/2 - 100);
  // moves b1 and b2 buttons off screen
  b1Button.pos ={x: -100, y: -100};
  b2Button.pos = {x: -150 , y: -150};

}

function showScreen4(){
  background("plum")
  textFont("caprasimo")
  fill("white")
  textSize(25)
  text("You hit an end point at Screen 4!!", width/2, height/2 - 100);
  // moves b1 and b2 buttons off screen
  b1Button.pos ={x: -100, y: -100};
  b2Button.pos = {x: -150 , y: -150};
  
}

function showScreen5(){
  background("lightgreen");
  textFont("caprasimo")
  textSize(25)
  text("You hit an end point at Screen 5!!", width/2, height/2 - 100);
  a1Button.pos = {x:width/2 - 500, y:height/2 + 100};
  a2Button.pos = {x:width/2 + 500, y:height/2 + 100};
  
  
}
/* VARIABLES */
let eyeWidth = 68
let eyeHeight = 83
let pupilWidth = 44
let pupilHeight = 48


/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(800,1000); 

  //sets the background color
  background(130,160,130); 
}

// // /* DRAW LOOP REPEATS */
function draw() {
  rectMode(CENTER)

  // //face
  fill(217, 179, 140)	
  ellipse(360, 330, 375, 420)
  
  //Eye wink
  if (mouseIsPressed){
    fill(242, 242, 242)
    ellipse( 420, 320, eyeWidth, eyeHeight)
    fill(77, 51, 25)
    ellipse(420, 330, pupilWidth, pupilHeight)
    fill(242, 242, 242)
    ellipse(423,340, 14,17)
    ellipse(425,317, 18,15)
   
    fill(77, 38, 0)
    ellipse( 280, 320, eyeWidth, eyeHeight)
    // ellipse( 420, 320, eyeWidth, eyeHeight)
  }
  else {
    fill(242, 242, 242)
    ellipse( 280, 320, eyeWidth, eyeHeight)
    ellipse( 420, 320, eyeWidth, eyeHeight)
    fill(77, 51, 25)
    strokeWeight(5)
    ellipse(280, 330,pupilWidth, pupilHeight)
    ellipse(420, 330, pupilWidth, pupilHeight)
    fill(242, 242, 242)
    ellipse(280,340, 14,17)
    ellipse(423,340, 14,17)
    ellipse(276,320, 18,15)
    ellipse(425,317, 18,15)
      
  }

  // eyes
  // fill(242, 242, 242)
  // ellipse( 280, 320, eyeWidth, eyeHeight)
  // ellipse( 420, 320, eyeWidth, eyeHeight)
  
  
  // // //Pupils
  // fill(77, 51, 25)
  // strokeWeight(5)
  // ellipse(280, 330,pupilWidth, pupilHeight)
  // ellipse(420, 330, pupilWidth, pupilHeight)
  //   fill(242, 242, 242)
  // ellipse(280,340, 14,17)
  // ellipse(423,340, 14,17)
  // ellipse(276,320, 18,15)
  // ellipse(425,317, 18,15)
  
  angleMode(DEGREES)
  
  // //Mouth
  fill(255, 230, 230)
  arc(360, 420, 60, 60, 0, 180)
  strokeWeight(3)
  fill(255, 102, 102)
  ellipse(260,380, 25,12)
  ellipse(450,380, 25,12)

   //nose
  fill(217, 179, 140)
  triangle(360, 378, 375, 390, 346, 390)
  
  //eyebrows
  fill(26, 13, 0)
  rect(270, 260, 80, 6, 30)
  rect(430, 260, 80, 6, 30)

  
  
  //hair
  rect(170, 420, 100, 420, 30)
  rect(550, 400, 100, 470, 30)
  // arc(230, 180, 270, 290, 480, PI + QUARTER_PI, CHORD)

  
  //hat
  fill(153, 51, 51)
  arc(390, 190, 570, 290, 160, PI + QUARTER_PI)
  circle(250,50,47)

  
  //Text
  fill(153, 92, 214)
  textSize(20)
  textFont('Courier New')

  text("Click to see me wink!", 530, 780)
  fill(204, 255, 204)
  text("Mariah's avatar",20, 800)
  fill(255, 204, 102)
  text( "Choose To \nBe Happy Today!!", 10,53)

}
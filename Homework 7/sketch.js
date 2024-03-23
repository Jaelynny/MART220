var zombieObjectsl = [];
var zombieRunObjects = [];
var zombieRunLeftObjects = [];
var currentObjects;
var counter = 0;
var myInterval;

var isColliding = false;
var objectToEat, objectToDraw;
var backgroundSound;


var scribble = new Scribble();

var xImage = 100, yImage = 50;
var myFont;
var myTime = 10;
var i = 0;
var flipX = false;
var idleStrings = [];
var walkStrings = [];
var idleArray = [];
var walkArray = [];
let x, y; // Position of both peas
let xSpeed, ySpeed; // Speed of movement

var objectToEat;
var objectToDraw;
var mySound;
var scribbleEllipse=[];

function preload() {
    idleStrings = loadStrings("..assets\Idle.txt");
    walkStrings = loadStrings("..assets\walk.txt");
    soundFormats('mp3', 'ogg');
  mySound = loadSound('assets\eating-sound-effect.mp3');//good food
  mySound2=loadSound("assets\gagging.mp3");//bad food
  backgroundSound=loadSound("assets\music box.mp3");

}

function setup() {
    createCanvas(800, 750);
    x = width / 2; // Initial x position
    y = height / 2; // Initial y position
    xSpeed = 2; // Initial x speed
    ySpeed = 1; // Initial y speed
    

    for (let k = 0; k < idleStrings.length; k++) {
        idleArray.push(new myImage(idleStrings[k], 50, 300, 700, 572));
    }
    for (let k = 0; k < walkStrings.length; k++) {
        walkArray.push(new myImage(walkStrings[k], 50, 300, 700, 572));
    }
    objectToEat = ellipse
    myFont = loadFont("font\Anta,Playfair_Display\Playfair_Display");
    currentObjects = zombieObjects;
    setInterval(changeTime, 100);
    setInterval(countDown, 1000);
}

function draw() 
    background(150,21);
    // Draw a pea at the current position
    fill(200,200,20); // pea color
    ellipse(x, y, 50, 45);
    Ellipse1(x, y, 80, 50);
    //second pea
    setInterval(spawnEllipse1,2000);
    displayHUD();

    // Update position based on speed
    x += xSpeed;
    y += ySpeed;

    // Bounce off canvas edges
    if (x < 0 || x > width) {
        xSpeed *= -1; // Reverse x direction
    }
    if (y < 0 || y > height) {
        ySpeed *= -1; // Reverse y direction
    }

    if (objectToEat != null) {
        objectToEat.draw();

    }

    if (keyIsPressed) 
        if (key == "w") {
            yImage -= 1;
            isColliding =myWalkArray.isEllipseColliding(Ellipse1)
        }
        if (key == "s") {
            yImage += 1;
        }
        if (key == "a") {
            xImage -= 1;
            flipX = true;
        }
        if (key == "d") {
            xImage += 1;
            flipX = false;
        }

        for (var ii = 0; ii < idleArray.length; ii++) 
            idleArray[ii].updateX(xImage);
            idleArray[ii].updateFlip(flipX);
            walkArray[ii].updateX(xImage);
            walkArray[ii].updateFlip(flipX);
            
            if (objectToEat != null) {
                if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                    objectToEat = null;
                    load
                }
            }
            else 
            {
              if (myInterval == null) 
              {
                myInterval = setInterval(incrementIndex, 70);
              }
              currentObjects = zombieObjects;
              currentAnimation = animation;
            }
            function displayHUD() 
                fill(100, 252, 169);
                textSize(24);
                textFont(myFont);
                text("Score:" + score, 600, 50);
            
                text("Countdown:" + countDown, 300, 50);
            
                text("Yum " + myTime + " secs", 50, 50);

        {
            //outside library code
        objectToDraw = walkArray;
        scribble.scribbleEllipse( x, y, w, h );
        scribble.numEllipseSteps = yourValue; // defines how much curves will be used to draw an ellipse
        randomSeed( yourSeed );
    }
    function mousePressed() {
        backgroundSound.loop();
    }
    
    function incrementIndex() 
    {
      counter += 1;

      if (counter >= currentObjects.length) 
      {
        counter = 0;
      }
      function countDown() {
        myTime--;
        if (myTime < 0) 
        {
            myTime = 60;
            createANewFoodItem(ellipse);
        }
    }
    }
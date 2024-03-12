var zombieObjectsl = [];
var zombieRunObjects = [];
var zombieRunLeftObjects = [];
var currentObjects;
var counter = 0;
var myInterval;

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

function preload() {
    idleStrings = loadStrings("..assets\Idle.txt");
    walkStrings = loadStrings("..assets\walk.txt");
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
        fill(100, 300, 50);
        textSize(24);
        textFont(myFont);
        text("Score " + score, 385, 60);
    
        fill(50, 100, 200);
        textSize(25);
        text(myTime + " second", 50, 50);
    }

    if (keyIsPressed) 
        if (key == "w") {
            yImage -= 1;
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

        {
        objectToDraw = walkArray;
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
            createANewFoodItem();
        }
    }
    }
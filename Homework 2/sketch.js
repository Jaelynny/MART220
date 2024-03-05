let x, y; // Position of both peas
let xSpeed, ySpeed; // Speed of movement
var zombie;
var zombieX = 100;
var zombieY = 150;
var zombieSpeed = 5;
var zombieObjects = 1;

var font;
var timertext = 0;
var ellipse1;
var spawnLineY=200;

/*Jaelynn Young Running Crane
Date 4.3.2024
*/

function preload()
{
    zombie = loadImage("assets\png\female\Attack (1).png");
    zombie = imageclass("assets\png\female\Attack (1).png",0,0);
    zombieObjects(1) = zombie;
    ellipseObject(2)=pea;

}

function setup() {
    createCanvas(400, 400);
    x = width / 2; // Initial x position
    y = height / 2; // Initial y position
    xSpeed = 2; // Initial x speed
    ySpeed = 1; // Initial y speed
}
function draw() {
    background(150,21);//pea should leave a trail

    // Draw a pea at the current position
    fill(200,200,20); // pea color
    ellipse(x, y, 50, 45);
    Ellipse1(x, y, 50, 45);

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
    //second pea
    setInterval(spawnEllipse1,2000);
    //zombie
    image(zombie,zombieX,zombieY);
    //zombie speed
    zombieX += zombieSpeed;
    if(zombieX >= width - zombie.width || zombieX  <= zombie.width/8)
    {
        zombieSpeed *= -1;
    }
     //check for collsion
    function checkCollisions(){
        zombie=zombieObject(0);
        ellipse=ellipseObject(1);
        //check if zombie collides with peas
        if (zombieX < ellipse
            zombieX + zombieY> ellipse
            zombieY < ellipse
            zombieY + 150>ellipse1
            ){
            else
                //pea should be eaten
                ellipse isColliding = true;
                Ellipse1 isColliding = true;
            }
   
}
}
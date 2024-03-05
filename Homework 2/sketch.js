let x, y; // Position of both peas
let xSpeed, ySpeed; // Speed of movement
var myFont
/*Jaelynn Young Running Crane
Date 4.3.2024
*/

function setup() {
    createCanvas(400, 400);
    x = width / 2; // Initial x position
    y = height / 2; // Initial y position
    xSpeed = 2; // Initial x speed
    ySpeed = 1; // Initial y speed
}
function draw() {
    background(150,21);//should leave a trail

    // Draw a pea at the current position
    fill(200,200,20); // pea color
    ellipse(x, y, 50, 45);

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

      // Draw a peae at the current position
    fill(200,200,20); // pea color
    ellipse(x, y, 50, 45);

    // Move the pea based on arrow keys
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5; // Move left
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5; // Move right
    }
    if (keyIsDown(UP_ARROW)) {
        y -= 5; // Move up
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 5; // Move down
    }
    textSize(25);
    text("Jaelynn YRC",550,560);

}


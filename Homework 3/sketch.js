var pick;
var xImage = 100, yImage = 25;
var speedX, speedY;
var myFont;

var mytime = 10
var timerValue = 10;
var pick2;
var xImage2 =300, yImage2 = 25;
var speedX2, speedY2;

var pick3;
var x= 0;
var xImage3 = 100, yImage3 = 25;

function setup()
{
    createCanvas(800,600);
    pick = loadImage("Image\mother nature.png");
    pick2 = loadImage(Image\trail.jfif);
    pick3 = loadImage(Image\lake.jfif)
    myFont = loadFont("fonts/C:\Users\jaely\Documents\GitHub\MART220\Homework 3\fonts\Anta,Playfair_Display\Playfair_Display\PlayfairDisplay-VariableFont_wght.ttf");
    speedX = random(1,5);
    speedY = random(1,5);
    setInterval(timeIt,1000);
}
//this image runs continously
function draw()
{
    background(250,100,50);
    Image(pick,xImage,yImage);
    xImage += speedX;
    yImage += speedY;

    if(xImage >= width-150 || xImage <= 0)
    {
        speedX +=1;
    }
    if(yImage >= height-100 || yImage <= 0)
    {
        speedY +=-1;
    }
//timed function image
    Image(pick,xImage2,yImage2);
{
    function timeIt()
    {
             if (timerValue > 0){
            timerValue--;
        }   
    }
}
//third image
Image(pick3,xImag3e,yImage3);
    xImage3 += speedX;
    yImage3 += speedY;
    fill(100,50,25);
    textSize(20);
    textFont(myFont);
    text("Nature",200,400);
}


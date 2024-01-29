function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    //box
    fill(100,200)
    rect(45,70,205,210)
    //pizza
    fill('rgb(100%,0%,10%)');
    circle(150,200,150)

  //pepperoni
  fill(255, 204, 0)
  circle(150,205,25)
  circle(185,210,25)
  circle(115,205,25)
  circle(150,150,25)
  circle(185,160,25)
  circle(150,205,25)
  circle(200,240,25)
  //slice
     line(150, 205, 75, 175);
     line(150, 205, 75, 230);


  
}
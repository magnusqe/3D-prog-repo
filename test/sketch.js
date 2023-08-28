vinkel = 0;
x = 0;
y = 0;
z = 0;
speedX = 1;
speedY = 1;
speedZ = 1;
bigness = 50;
camX = 0;
camY = 0;
camZ = ((400/2) / tan(PI/6));

function preload()
{
  christoffer = loadImage('Texture/Christoffer.png');
}

function setup() 
{
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw()
{
  background(220);
     
  camera(camX, camY, camZ, mouseX - 200, mouseY - 200, 0, 0, 1, 0);

  noStroke();
  
  push();
  translate(x, y, z);
  rotateY(vinkel);
  sphere(bigness);
  pop();

  ambientLight(255);
  
  MyPlane();

  if (x >= 200 - (bigness / 2))
  {
    speedX = random(-2, -5);
  }

  if (x <= -200 + (bigness / 2))
  {
    speedX = random(2, 5);
  }

  if (y >= 200 - (bigness / 2))
  {
    speedY = random(-2, -5);
  }

  if (y <= -200 + (bigness / 2))
  {
    speedY = random(2, 5);
  }

  if (z >= 200 - (bigness / 2))
  {
    speedZ = random(-2, -5);
  }

  if (z <= -200 + (bigness / 2))
  {
    speedZ = random(2, 5);
  }

  x += 1 * speedX;
  y += 1 * speedY;
  z += 1 * speedZ;

  vinkel += 5;

  if (keyIsDown(87))
  {
    camZ -= 5;
  }

  if (keyIsDown(83))
  {
    camZ += 5;
  }

  if (keyIsDown(65))
  {
    camX -= 5;
  }

  if (keyIsDown(68))
  {
    camX += 5;
  }

  if (keyIsDown(32))
  {
    camY -= 5;
  }

  if (keyIsDown(16))
  {
    camY += 5;
  }
}


function MyPlane()
{
  texture(christoffer);

  push();
  translate(-200, 0, 0);
  rotateY(90);
  plane(400);
  pop();

  push();
  translate(200, 0, 0);
  rotateY(90);
  plane(400);
  pop();

  push();
  translate(0, 200, 0);
  rotateX(90);
  plane(400);
  pop();

  push();
  translate(0, -200, 0);
  rotateX(90);
  plane(400);
  pop();

  push();
  translate(0, 0, -200);
  rotateZ(90);
  plane(400);
  pop();
}
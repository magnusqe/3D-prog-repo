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
p1x = 23;
p1y = 31;
p1z = 50;
p2x = 21;
p2y = 12;
p2z = 50;

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
     
  camera(camX, camY, camZ, mouseX - 200, mouseY - 200, -200, 0, 1, 0);

  noStroke();

  push();
  for (t = -100; t < 100; t = t + 0.5)
  {
    v1x = (p2x - p1x);
    v1y = (p2y - p1y);
    v1z = (p2z - p1z);
    xPos = (p1x + (v1x * t));
    yPos = (p1y + (v1y * t));
    zPos = (p1z + (v1z * t));
    MineKugler(xPos, yPos, zPos, vinkel); 
  }
  pop();
  
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

  if (x == 0)

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

function MineKugler(xPos, yPos, zPos)
{
  push();
  translate(xPos, yPos, zPos, vinkel);
  rotateY(vinkel);
  rotateX(30);
  sphere(10);
  pop();
}
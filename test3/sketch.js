vinkel = 0;
x = 0;
y = 0;
z = 0;
camX = 0;
camY = 0;
camZ = ((400/2) / tan(PI/6));
targetX = 0;
targetY = 0;
targetZ = 0;
target = true;

function preload()
{
  christoffer = loadImage('Texture/Christoffer.png');
}

function setup() 
{
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw()
{
  background(220);
     
  camera(camX, camY, camZ, mouseX - 200, mouseY - 200, -200, 0, 1, 0);

  noStroke();

  ambientLight(255);
  
  MyPlane();

  if (target == true)
  {
    for (i = 0; i < 17; i = i + 1)
    {
      targetX = random(-180, 180);
      targetY = random(-180, 180);
      targetZ = -180;
  
      push();
      translate(targetX, targetY, targetZ);
      box(20);
      pop();
      target = false;
    }  
  }
 
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
  plane(400);
  pop();
}
vinkel = 0;
x = 0;
y = 0;
z = 0;
camX = 0;
camY = 0;
camZ = ((400/2) / tan(PI/6));
boxWidth = 50;
boxHeight = 50;
boxDepth = 50;
s1 = 35;
s2 = 45;
s3 = 55;
s4 = 67;
reset = true;
p0x = 5;
p0y = 72;
p0z = 31;
p1x = 75;
p1y = 29;
p1z = 80;
p2x = 91;
p2y = 54;
p2z = 68;
v1 = 0;
v2 = 0;
skal1 = 0;
skal2 = 0;

function preload()
{
  christoffer = loadImage('Texture/Christoffer.png');
}

function setup() 
{
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  v1 = createVector((p1x - p0x), (p1y - p0y), (p1z - p0z));
  v2 = createVector((p2x - p0x), (p2y - p0y), (p2z - p0z));
  slider1 = createSlider(-10, 10, 0, 0.01);
  slider2 = createSlider(-10, 10, 0, 0.01);
}

function draw()
{
  background(220);

  skal1 = slider1.value();
  skal2 = slider2.value();

  xPos = p0x + skal1 * (p1x - p0x) + skal2 * (p2x - p0x); 
  yPos = p0y + skal1 * (p1y - p0y) + skal2 * (p2y - p0y);
  zPos = p0z + skal1 * (p1z - p0z) + skal2 * (p2z - p0z);
     
  camera(camX, camY, camZ, camX, camY, -200, 0, 1, 0);

  noStroke();

  ambientLight(255);
  
  MyPlane();

  if (reset == true)
  {
    x1 = random((-200 + boxWidth), (200 - boxWidth));
    y1 = random((-200 + boxWidth), (200 - boxWidth));
    z1 = -2000;
    x2 = random((-200 + boxWidth), (200 - boxWidth));
    y2 = random((-200 + boxWidth), (200 - boxWidth));
    z2 = -2000;
    x3 = random((-200 + boxWidth), (200 - boxWidth));
    y3 = random((-200 + boxWidth), (200 - boxWidth));
    z3 = -2000;
    x4 = random((-200 + boxWidth), (200 - boxWidth));
    y4 = random((-200 + boxWidth), (200 - boxWidth));
    z4 = -2000;
    reset = false;
  }

  afstand1 = sqrt((camX - x1) * (camX - x1) + (camY - y1) * (camY - y1) + (camZ - z1) * (camZ - z1));
  afstand2 = sqrt((camX - x2) * (camX - x2) + (camY - y2) * (camY - y2) + (camZ - z2) * (camZ - z2));
  afstand3 = sqrt((camX - x3) * (camX - x3) + (camY - y3) * (camY - y3) + (camZ - z3) * (camZ - z3));
  afstand4 = sqrt((camX - x4) * (camX - x4) + (camY - y4) * (camY - y4) + (camZ - z4) * (camZ - z4));

/*BoxBoy(x1, y1, z1, boxWidth, boxHeight, boxDepth);  

BoxBoy(x2, y2, z2, boxWidth, boxHeight, boxDepth);

BoxBoy(x3, y3, z3, boxWidth, boxHeight, boxDepth);

BoxBoy(x4, y4, z4, boxWidth, boxHeight, boxDepth); */

push();
translate(xPos, yPos, zPos);
sphere(20);
pop();

z1 = z1 + s1;
z2 = z2 + s2;
z3 = z3 + s3;
z4 = z4 + s4;

if (z1 >= 400 && z2 >= 400 && z3 >= 400 && z4 >= 400)
   {
    reset = true;
     s1 = random(20, 100);
     s2 = random(20, 100);
     s3 = random(20, 100);
     s4 = random(20, 100);
   }
 
  vinkel += 5;

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
}

function BoxBoy(x, y, z, boxWidth, boxHeight, boxDepth)
{
  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  translate(x, y, z);
  box(boxWidth, boxHeight, boxDepth);
  pop();
}
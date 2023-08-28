x1 = 50;
y1 = 40;
b1 = 13;
h1 = 54;
x2 = 65;
y2 = 115;
b2 = 43;
h2 = 26;
spx1 = 3;
spy1 = 5;
spx2 = 2;
spy2 = 7;

function setup() 
{
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() 
{
  background(220);

  MinBox(x1, y1, b1, h1);
  MinBox(x2, y2, b2, h2);

  afstandX = x2 - x1;
  afstandY = y2 - y1;

  if (x1 >= (400 - (b1 / 2)) || x1 <= (0 + (b1 / 2)))
  {
    spx1 = spx1 * -1;
  }
  if (y1 >= (400 - (h1 / 2)) || y1 <= (0 + (h1 / 2)))
  {
    spy1 = spy1 * -1;
  }

  if (x2 >= (400 - (b2 / 2)) || x2 <= (0 + (b2 / 2)))
  {
    spx2 = spx2 * -1;
  }
  if (y2 >= (400 - (h2 / 2)) || y2 <= (0 + (h2 / 2)))
  {
    spy2 = spy2 * -1;
  }

  x1 = x1 + spx1;
  y1 = y1 + spy1;
  x2 = x2 + spx2;
  y2 = y2 + spy2;
}

function MinBox(x, y, b, h)
{
  rect(x, y, b, h);
}

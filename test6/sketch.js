x1 = -10;
y1 = -10;
x2 = -10;
y2 = 10;
x3 = 10;
y3 = -10;
x4 = 10;
y4 = 10;

xFlyt = 200;
yFlyt = 200;

skalar = 1;


function setup() 
{
  createCanvas(400, 400);
  slider = createSlider(0, 50, 1, 0.1);
  slider.position(300, 10);
}

function draw() 
{
  background(220);

  skalar = slider.value();

  line(x1 * skalar + xFlyt, y1 * skalar + yFlyt, x2 * skalar + xFlyt, y2 * skalar + yFlyt);
  line(x1 * skalar + xFlyt, y1 * skalar + yFlyt, x3 * skalar + xFlyt, y3 * skalar + yFlyt);
  line(x2 * skalar + xFlyt, y2 * skalar + yFlyt, x4 * skalar + xFlyt, y4 * skalar + yFlyt);
  line(x3 * skalar + xFlyt, y3 * skalar + yFlyt, x4 * skalar + xFlyt, y4 * skalar + yFlyt);
}

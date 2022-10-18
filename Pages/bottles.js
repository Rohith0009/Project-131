img = "";

function setup() {
  canvas = createCanvas(600, 600);
  canvas.position(440);
}

function preload() {
  img = loadImage("/images/bottles.jpg");
}

function draw() {
  image(img, 0, 0, 600, 600);
}

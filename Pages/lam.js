img = "";

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}

function preload() {
  img = loadImage("/images/lam.jpg");
}

function draw() {
  image(img, 0, 0, 640, 420);
}

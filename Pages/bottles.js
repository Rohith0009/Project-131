img = "";

function setup() {
  canvas = createCanvas(600, 600);
  canvas.position(440);
  object_detector = ml5.objectDetector("cocossd", modelloaded);
}

function modelloaded() {
  console.log("Model Has Loaded!!!");
  object_detector.detect(img, gotresult);
}
function gotresult(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
  }
}
function preload() {
  img = loadImage("/images/bottles.jpg");
}

function draw() {
  image(img, 0, 0, 600, 600);
}

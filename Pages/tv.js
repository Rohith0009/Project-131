img = "";

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
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
  img = loadImage("/images/tv.jpg");
}

function draw() {
  image(img, 0, 0, 640, 420);
}

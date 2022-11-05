img = "";
loaded = falseloaded = false;

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
    objects = results;
    loaded = true;
  }
}

function preload() {
  img = loadImage("/images/tv.jpg");
}

function draw() {
  image(img, 0, 0, 640, 420);
  if (loaded) {
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Objects Are Detected!";
      fill("#09b43a");
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
      noFill();
      stroke("#09b43a");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}

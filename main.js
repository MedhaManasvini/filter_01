nose_x = 0;
nose_y = 0;

function preload() {
    lipstick = loadImage("sexy-red-3d-lips-on-transparent-background-vector-23489169-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(lipstick, nose_x, nose_y, 70, 50);
}

function modelLoaded() {
    console.log("posenet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x-40;
        nose_y = results[0].pose.nose.y+40;
    }
}

function takePicture() {
    save('lipstick.png');
}

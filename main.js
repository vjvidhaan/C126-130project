left_wristX = "";
left_wristY = "";
right_wristX = "";
right_wristY = "";
scorerightWristY = "";
scoreleftWristX= "";
scoreleftWristY= "";
scorerightWristX = "";
song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}




function draw() {

    image(video, 0, 0, 300, 300);
    stroke("blue");
    fill("blue");



    if (scorerightWristY > 0.2) {
        circle(right_wristX, right_wristY, 30);
        song2.stop();
        song1.play();

    }

    stroke("green");
    fill("green")

    if (scoreleftWristY > 0.2) {
        circle(left_wristX, left_wristY, 30);
        song1.stop();
        song2.play();
    }
}





function modelLoaded() {
    console.log("modelLoaded");
}



function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        scoreleftWristY = results[0].pose.keypoints[9].score
        scorerightWristY = results[0].pose.keypoints[10].score
        console.log("scoreleftWristY =" + scoreleftWristY);

        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;

        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;

    }
}
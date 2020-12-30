
left_wristX="";
left_wristY="";
right_wristX="";
right_wristY="";
difference="";
song1="";
song2="";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
 image(video, 0,0, 300, 300);
}

function modelLoaded(){
    console.log("modelLoaded");
}



function gotPoses(results){
    if(results.length > 0){
console.log(results);
    }
if(pose.poseNet()==leftWrist){
    song2.play();
}

if(pose.poseNet()==rightWrist){
    song1.play();
}
}
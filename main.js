scoreRightWrist = 0;
scoreLeftWrist = 0;
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
    song = loadSound("music.mp3")
    song = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(400, 300);


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);


    fill("#FF0000");
    stroke("#FF0000");
if(scoreRightWrist > 0.2)
{
    circle(rightWristX,rightWristY,20);
    StopSound(music2.mp3)
    
    if(music.mp3==false)
    {
        song.play()
        document.getElementById("speed").innerHTML = "Song = Harry Potter"
    }
    else(rightWristY >100 && rightWristY<= 200)
    document.getElementById("speed").innerHTML = "Speed = 2.5x"
    
}
   
    if(scoreLeftWrist > 0.2)
{
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimal/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}

}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function play()
{
    song.play();  
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        console.log("scoreRightWrist = " +scoreRightWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}
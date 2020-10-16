rightwristX=0;
leftwristX=0;
difference=0;


function setup(){
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    video=createCapture(VIDEO);
    video.size(550, 500);


    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }


    function modelLoaded()
    {
        console.log("posenet initialised");
    }
function gotPoses(results)
{
if (results.length>0)
{
console.log(results);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("leftWristX= "+leftwristX+" rightWristX= "+rightwristX+"difference= "+difference);
}
}


function draw()
    {
background( '#ffb6c1');
textSize(difference);
text('Zareena', 10, 300);
fill(0, 102, 153);
document.getElementById("square_side").innerHTML="size of thet text will be: "+difference+"px";
    }
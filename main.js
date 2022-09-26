function preload(){

}

function setup(){
    canvas=createCanvas(1280, 720);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(1280, 720);
    video.hide
}

function take_snapshot(){
    save('myFilterImage.png')
}

function draw(){
    rect(600, 20, 255, 155);
    circle(350, 125, 234);
}
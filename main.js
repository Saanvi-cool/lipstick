function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam,0,0,400,300);
}
function CLICK_PIC(){
    save("LOL.png");
}


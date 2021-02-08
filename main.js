function preload(){

}

function setup(){
    canvas=createCanvas(700,500);
    canvas.position(100,350);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";

}
function  draw(){
    image(video,0,0,700,500);
tint(tint_color);


}
function take_snapshot(){
    save("filteredImage.png");

}
 
 function  filter_tint(){
     tint_color=document.getElementById("Color_name").value;
 }
clockimg = "";
clockstatus = "";

function preload(){
clockimg = loadImage("clock.jpg");
}

function setup(){
    canvas = createCanvas(300, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('coco SSD', modelLoaded);
    document.getElementById("clockstatus").innerHTML ="Status - Detecting objects "
}

function modelLoaded(){
   console.log("model loaded.");
   status = true;
   objectDetector.detect(clockimg, gotResults);
}

function gotResults(error, results){
   if (error){
       console.error(error);
   }
   else{
       console.log(results);
   }
}

 function draw(){
     image(clockimg, 0, 0, 300, 400);
     
     fill("#000000");
     text("Clock", 60, 47);
      noFill();
     stroke("#000000");
     rect(50, 30, 200, 300);
 }

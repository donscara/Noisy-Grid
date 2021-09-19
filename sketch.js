var stepSize = 20;
var time = 0;



function setup() {
  createCanvas(500, 500); 
  rectMode(CENTER);
  angleMode(DEGREES);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
      noStroke();
      

      for (var x=0; x<25; x++){
        for (var y=0; y<25; y++){
            
            var fro = color(255,0,0);
            var two = color(0,255,0);
            var scale = 5/(100+mouseX*2);
            noStroke();
            var n = noise(x/100,y/100,frameCount*scale);
            var l= lerpColor(fro, two, n);
            rect(x*stepSize,y*stepSize,stepSize,stepSize);
            fill(l);
                        
        }
      }
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
        
        translate(12.5, 12.5);
        for (var x=0; x<25; x++)
        {
          for (var y=0; y<25; y++)
          {
                          
               push();
               var s = 5/(100+mouseX*2);
               var n = noise(x/250,y/250,frameCount*s);
               translate(x*stepSize,y*stepSize);
               var a = map(n,0,1,0,720);
               rotate(a);
           
               stroke(50);
               strokeWeight(3);
               line(0,0,stepSize,stepSize-stepSize);
               pop();
               
         }

       }
//  // your code here
        
}


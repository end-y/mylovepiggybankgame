var ball = [];
var ok;
var greeting;
var oge;
var btn = document.querySelector(".btn");



function setup() {
  
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = 0;
  l= windowWidth/3;
  ball.push(new Ball());
  sayi = 0;
 
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');
  
}

function draw() {
  background(0);
  fill(255)
  if(frameCount % 80 == 0){
    ball.push(new Ball())
    
  }
  
  for(let b = 0; b<ball.length; b++){
    ball[b].display();
    ball[b].show();
    }
  ok = new Arrow(x-20,y,x,y+30,x+20,y);
  
  y = y+5;
  if(y>windowHeight/3){
    y = Math.floor(windowHeight/3);
  }
    
}
function keyPressed(){
    
      if(keyCode === LEFT_ARROW){
        x = x-l
        console.log(x);
        if(x <= 0){
          x = x+l;
          }
        } else if(keyCode === RIGHT_ARROW){
          x = x+l
          console.log(x);
          if(x >= windowWidth){
            x = x-l;
            
          }
        }
    for(let b = 0; b<ball.length; b++){  
      if(x==ball[b].konumlar[2]){
        ball[b].hit(ok)
      }else if(x==ball[b].konumlar[1]){
        ball[b].hit(ok)
      }else if(x==Math.floor(ball[b].konumlar[0]-1)) {
        ball[b].hit(ok)
      }
    }
      }
function Ball(){
    
    this.konumlar = [windowWidth/1.33,windowWidth/2, windowWidth/4];
    
    this.sayilar =[Math.ceil(Math.random()*1)+windowHeight, Math.ceil(Math.random()*1)+windowHeight,
Math.ceil(Math.random()*1)+windowHeight]
    this.secim = [Math.floor(random(0,3)),Math.floor(random(0,3)),Math.floor(random(0,3))]
    this.r = 80
    
  this.display = function(){
      fill(255)
      this.oge = [ 
      ellipse(this.konumlar[this.secim[0]], this.sayilar[0], this.r),
      ellipse(this.konumlar[this.secim[2]], this.sayilar[2], this.r),
      rect(this.konumlar[this.secim[1]], this.sayilar[1], this.r, this.r)]
      
  } 
    
  this.show = function(){
    this.sayilar[1] = this.sayilar[1] - 5;
    this.sayilar[0] = this.sayilar[0] - 5;
    this.sayilar[2] = this.sayilar[2] - 5;

      if(frameCount % 300 == 0){
       if(this.sayilar[0] || this.sayilar[1] || this.sayilar[2] < 0 ){
          ball.splice(0,1);
      }
  }
    
    } 
    this.hit = function(aelse){
      if(aelse.c == this.konumlar[0] || this.konumlar[1] || this.konumlar[2] && aelse.d-this.sayilar[0] || ok.d-this.sayilar[1] || ok.d-this.sayilar[2]  <= windowHeight/8 ){
        ball[0].oge[0].splice(0,1);
      }
    }
  }  
  
  class Arrow { 
    constructor(a,b,c,d,e,f){
      this.c = c;
      this.d = d;
      scale(random(1,1.005));
      rectMode(CENTER);
      stroke(255);
      strokeWeight(6);
      line(x, y-60, x+20,y-80);
      line(x, y-60, x-20,y-80);
      line(x, y-80, x+20,y-100);
      line(x, y-80, x-20,y-100);
      strokeWeight(4)
      line(x, y-100, x,y);
      fill(255)
      this.ucgen = triangle(a,b,c,d,e,f);
  
      scale(random(1,1.009));
      strokeWeight(0.5);
      line(x+55, y-70, x+40,y+20);
      line(x+65, y-30, x+55,y+10);
      line(x-50, y-70, x-35,y+20);
      line(x-62, y-30, x-52,y+10); 
     
    }

  }
  var intersects = function(other) {
    var d = dist(ok.c, ok.d, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  };
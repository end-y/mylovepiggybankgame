var kare1,kare2,kare3,kare4,kare5,kare6;
var top1 = [];
var carpi = [];
var ball2 = []
var score = 0
var dort = 4;
var highScore;
var resulted
var localStorageName = "high";
var btn = document.querySelector("#pauseBtn")
var da
var dc;
var sayi
var sayiR
p5.disableFriendlyErrors = true
var number;
let sound1;
var z;


if(localStorage.getItem(localStorageName) == null) {
    highScore = 0;
} else {
    highScore = localStorage.getItem(localStorageName);
}
if(localStorage.length !== 5){
  resulted = 0
  localStorage.setItem("resulted", resulted)
  var resultedadd = JSON.parse(localStorage.getItem("resulted")) 
}else{
  var resultedadd = JSON.parse(localStorage.getItem("resulted")) 
}


function preload(){
  gifimgL = loadImage('img/machine.gif');
  gifimg = createImg('img/machine2.gif');
  gifimg2 = createImg('img/machine.gif');
  gifimg3 = createImg('img/machine.gif');
  // soundFormats('mp3','ogg','wav')
  // sound1 = loadSound('sounds/coin.mp3')
  // sound2 = loadSound('sounds/bad.mp3')
  // sound3 = loadSound('sounds/son.mp3')
}

function setup(){
  setInterval(() => {
    var sayi = random(1,2)
    sayiR = Math.round(sayi)
  }, z);
  createCanvas(windowWidth, windowHeight);
  font = loadFont('fonts/Bangers-Regular.ttf');
  imgBg = loadImage('img/bg.png');
  reset();
  }

  // function soundCalistir(){
  //   if(JSON.parse(localStorage.getItem("checktwo"))==false){
  //     sound1.play()
  //   }
  // }
  // function soundCalistir2(){
  //   if(JSON.parse(localStorage.getItem("checktwo"))==false){
  //     sound2.setVolume(0.3)
  //     sound2.play()
  //   }
  // }
  // function soundCalistir3(){
  //   if(JSON.parse(localStorage.getItem("checktwo"))==false){
  //     sound3.play()
  //   }
  // }

function draw(){
  background(250);
  pushBall()
  var sayi = random(1,2)
  Math.round(sayi)
    
  fill(52,59,77)
  strokeWeight(3)
  stroke(114,138,171)
  
  rect((windowWidth/1.33)-39,0,77,windowHeight)
  rect((windowWidth/2)-39,0,77,windowHeight)
  rect((windowWidth/4)-39,0,77,windowHeight)
  gifimg2.position((windowWidth/4)-45,windowHeight-87)
  gifimg.position((windowWidth/2)-45,windowHeight-87)
  gifimg3.position((windowWidth/1.33)-45,windowHeight-87)
  
  strokeWeight(0)
  for(let b = 0; b<ball2.length; b++){
    ball2[b].display2();
    ball2[b].update2();
  }
  for(let b = 0; b<top1.length; b++){
    top1[b].display();
    top1[b].update();
  }
  
  for(let b = 0; b<carpi.length; b++){
    carpi[b].display1();
    carpi[b].update1();
  }
  
 
  ok.show(x-25,y-25);
  ok.play()
  

 for(let j = 0; j< top1.length; j++){
   for(let e = 0; e<carpi.length; e++){
     if(top1[j].konumlar[top1[j].secim] == carpi[e].konumlar2[carpi[e].secim] && top1[j].sayilar == carpi[e].sayilar ){
      carpi[e].sayilar = carpi[e].sayilar+ windowHeight+120
     }
   }
  }
 for(let e = 0; e<carpi.length; e++){
 for(let j = 0; j< ball2.length; j++){
  if( ball2[j].konumlar1[ball2[j].secim] ==   carpi[e].konumlar2[carpi[e].secim] && ball2[j].sayilar ==  carpi[e].sayilar  ){
      ball2[j].sayilar = ball2[j].sayilar+ windowHeight+120
    }
    }
  }
  
 for(let j = 0; j< ball2.length; j++){ 
  for(let e = 0; e<top1.length; e++){
    if(ball2[j].konumlar1[ball2[j].secim] == top1[e].konumlar[top1[e].secim] && ball2[j].sayilar == top1[e].sayilar){
      ball2.splice(j,1)
  }
}
}
for(var a = 0; a< top1.length; a++){
  da = dist(top1[a].konumlar[top1[a].secim],top1[a].sayilar,ok.c,ok.d)
  if(Math.floor(da) <= 40){
    score += top1[a].puan[top1[a].c]
    top1.splice(a,1);
   // soundCalistir()
  }else if (top1[a].sayilar <0){
    top1.splice(a,1)
  }
}
for(var c = 0; c<ball2.length; c++){
  db = dist(ball2[c].konumlar1[ball2[c].secim],ball2[c].sayilar,ok.c,ok.d)
  if(Math.floor(db) <= 40){
    ball2.splice(c,1)
    score += 10;
  //  soundCalistir()
    let start = millis();

// Do the stuff that you want to time
random(0, 100);

let end = millis();
let elapsed = end - start;
   console.log("This took: " + elapsed + "ms.")
  } else if (ball2[c].sayilar < 0){
    ball2.splice(c,1)
  }
}


for(var b = 0; b<carpi.length; b++){
  dc = dist(carpi[b].konumlar2[carpi[b].secim],carpi[b].sayilar,ok.c,ok.d)
  if(Math.floor(dc) <= 40){
   // soundCalistir2();  
    live.splice(0,1)
    carpi.splice(b,1)
    let start = millis();

// Do the stuff that you want to time
random(0, 100);

let end = millis();
let elapsed = end - start;
   console.log("This took: " + elapsed + "ms.")
  }else if(carpi[b].sayilar < 0){
    carpi.splice(b,1)
  }
}

  fill(250)
  rect(0,0,windowWidth,90)
  fill(0)
 

  for (let c = 0; c<live.length; c++){
    live[c] = rect(20*c+windowWidth-180,40,15,15)
    
  }
  text(score,100,55)
  if(JSON.parse(localStorage.getItem("checkone"))==true){
    fps = frameRate();
    fill(250)
    rect(windowWidth-180,75,130,40)  
    fill(0);
    text("FPS: " + fps.toFixed(2), windowWidth-180,100);
  }

  if(live.length == 0 ){
     // soundCalistir3();
        document.querySelector(".divisionSonuc").style.display = "inline"  
      
      if(score > highScore){
        var enBuyuk = parseInt(highScore) 
        enBuyuk = score;
        var enBuyuk1 = localStorage.setItem(localStorageName, enBuyuk)
        document.querySelector(".divisionSonuc").style.display = "inline"  
      }else if(score < highScore){
        enBuyuk = localStorage.getItem(localStorageName)
      }
      document.querySelector(".sonuc").innerHTML = "Your score: " + score + "</br> High score: " + enBuyuk
     
      document.getElementById("btniki").addEventListener("click",function(){
        yenile()
      })
      document.getElementById("btnbir").addEventListener("click",function(){
        loop()
    live.length =6;
    score =0;
    top1.pop();
    carpi.pop()
    ball2.pop()
    top1.length = 0;
    carpi.length =0;
    ball2.length = 0;
    pauseBtn.style.display = "inline"
    playBtn.style.display = "none"
    document.querySelector(".divisionSonuc").style.display = "none"
      })
      if(score > 0){
        var sonToplam = resultedadd + score
        localStorage.setItem("resulted",sonToplam)
      }
      noLoop()
    }
}
function mouseClicked(){
  if(mouseX < windowWidth/2){
    x = x-l
    if(x <= 0){
      if(mouseX > 285 && mouseY > 25 && mouseY < 90 && mouseX < 330){
        return false
      }else{
        x = x+l
      }
      }
    } else if(mouseX > windowWidth/2){
      if(mouseX > 285 && mouseY > 25 && mouseY < 90 && mouseX < 330){
        return false
      }else{
        x = x+l
      }
      if(x == windowWidth){
        x = x-l;
      }
    }
    let start = millis();

    // Do the stuff that you want to time
    random(0, 100);
    
    let end = millis();
    let elapsed = end - start;
       console.log("This took: " + elapsed + "ms.")
  }
  function keyPressed(){
    
    if(keyCode === LEFT_ARROW){
      x = x-l
      if(x <= 0){
        x = x+l;
        }
      } else if(keyCode === RIGHT_ARROW){
        x = x+l
        if(x >= windowWidth){
          x = x-l;
          
        }
      }
    }
function pushBall(){
  if(score <= 300){
    if(frameCount % 100 == 0){
      top1.push(new Ball())
      carpi.push(new Carpi())
      ball2.push(new Ball2())
      console.log(ball2)
      console.log(carpi)
    }
  }
  if(score >= 300 && score <= 600){
    if(frameCount % 70 == 0){
      top1.push(new Ball())
     carpi.push(new Carpi())
      ball2.push(new Ball2())
    }
  } 
  if ( score >= 600 && score <= 1200){
    if(frameCount % 50 == 0){
      top1.push(new Ball())
     carpi.push(new Carpi())
      ball2.push(new Ball2())
    }
  }if ( score >= 1200 && score <= 2400){
    if(frameCount % 30 == 0){
      top1.push(new Ball())
     carpi.push(new Carpi())
      ball2.push(new Ball2())
    }
  }if ( score >= 2400){
    if(frameCount % 20 == 0){
      top1.push(new Ball())
     carpi.push(new Carpi())
      ball2.push(new Ball2())
    }
  }
}

function reset(){
  x = windowWidth /4;
  x1 = windowWidth /2;
  y = 0;
  h = windowHeight;
  ok = new Arrow();
  yukseklik = 80;
  l= windowWidth/4
  textSize (30);
  live = [kare1,kare2,kare3,kare4,kare5,kare6]
  img = loadImage("img/chocolate.png");
  img2 = loadImage("img/coin.png");
  img3 = loadImage("img/pig.png");
  imgBg = loadImage('img/bg.png');
  
}


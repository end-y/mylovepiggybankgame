var pauseBtn = document.getElementById("pauseBtn") 
var playBtn = document.getElementById("playBtn") 
playBtn.style.display = "none"

function play(){
    pauseBtn.style.display ="inline"
    playBtn.style.display= "none"
    document.querySelector(".divisionSonuc").style.display = "none"
    console.log("play")
    loop();
}

function pause(){
    pauseBtn.style.display = "none"
    playBtn.style.display = "inline"
    document.querySelector(".divisionSonuc").style.display = "inline"
    noLoop();
    console.log("pause")
    
    document.getElementById("btniki").addEventListener("click",()=>{
        yenile()
    })
    document.getElementById("btnbir").addEventListener("click",()=>{
        sifirla()
    })
}
function sifirla(){
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
  }
  function yenile(){
    window.location = "index.html"
}
pauseBtn.addEventListener("click",()=>{
    pause()
})

playBtn.addEventListener("click", ()=>{
    play()
})



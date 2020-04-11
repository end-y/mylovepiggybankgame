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
    window.location = "game.html"
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



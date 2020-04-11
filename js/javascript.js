var skor = document.getElementById("skor")
var added = document.getElementById("added")
var checkthreeT = JSON.parse(localStorage.getItem("checkthree"))
localStorage.getItem("high") == null ? skor.innerHTML += 0 :skor.innerHTML += JSON.parse(localStorage.getItem("high"))
localStorage.getItem("resulted") == null || localStorage.getItem("resulted") == NaN ? added.innerHTML += 0 : added.innerHTML += JSON.parse(localStorage.getItem("resulted"))

document.getElementById("geri").addEventListener("click",()=>{
    window.location = "index.html"
})
var resulted = localStorage.getItem("resulted")

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('#loading', false);
});

if(checkthreeT==true){
  document.querySelector(".bir").style.display = "none"
  document.querySelector(".iki").style.display = "block";
}else if(checkthreeT == false){
  document.querySelector(".bir").style.display = "block"
  document.querySelector(".iki").style.display = "none";
}

if(resulted >= 0 && resulted <= 100000){
  document.querySelector(".sakli1").style.display = "block";
  document.querySelector(".acik1").style.display = "none";
  document.querySelector(".sakli6").style.display = "block";
  document.querySelector(".acik6").style.display = "none";
  
}
if(resulted > 100000 && resulted <= 250000){
  document.querySelector(".sakli2").style.display = "block";
  document.querySelector(".acik2").style.display = "none";
  document.querySelector(".sakli7").style.display = "block";
  document.querySelector(".acik7").style.display = "none";
}
if(resulted > 250000 && resulted <= 500000){
    document.querySelector(".sakli3").style.display = "block";
    document.querySelector(".acik3").style.display = "none";
    document.querySelector(".sakli8").style.display = "block";
    document.querySelector(".acik8").style.display = "none";
}
if(resulted > 500000 && resulted <= 1000000){
    document.querySelector(".sakli4").style.display = "block";
    document.querySelector(".acik4").style.display = "none";
    document.querySelector(".sakli9").style.display = "block";
    document.querySelector(".acik9").style.display = "none";
}
if(resulted > 1000000){
    document.querySelector(".sakli5").style.display = "block";
    document.querySelector(".acik5").style.display = "none";
    document.querySelector(".sakli10").style.display = "block";
    document.querySelector(".acik10").style.display = "none";
}
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container')
  });
  
 
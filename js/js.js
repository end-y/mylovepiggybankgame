var element = document.getElementById("division")
var baslik2 = document.querySelector(".baslik2");
var baslik = document.querySelector(".baslik");
var el= document.getElementById("g")
var bl = document.getElementById("o")
var cl = document.getElementById("c")
var tm = document.querySelector(".times")
var save = document.getElementById("save")
var checkone = document.getElementById("checkone");
var checktwo = document.getElementById("checktwo")
var checkthree = document.getElementById("checkthree")
el.addEventListener("click",function(){
    window.location = "game.html"
})
localStorage.getItem('high') == null ? baslik2.innerHTML = "High score: " + 0 : baslik2.innerHTML = "High score: "+ localStorage.getItem('high') 

bl.addEventListener("click",()=>{
    if(document.getElementById("divisionSonuc2").classList.contains("animasyon-reverse")){
        document.getElementById("divisionSonuc2").classList.remove("animasyon-reverse")
    }
    document.getElementById("divisionSonuc2").classList.add("animasyon")
    document.querySelector(".divisionSonuc2").style.display = "block";
    
})
tm.addEventListener('click', ()=>{
    document.getElementById("divisionSonuc2").classList.remove("animasyon")
    document.getElementById("divisionSonuc2").classList.add("animasyon-reverse")
    setTimeout(() => {
        document.querySelector(".divisionSonuc2").style.display = "none"
    }, 1000);
})

save.addEventListener("click", ()=>{
    
    localStorage.setItem("checkone", checkone.checked);
    localStorage.setItem("checktwo", checktwo.checked);
    localStorage.setItem("checkthree", checkthree.checked);
    document.querySelector(".yaziSave").innerHTML = "Changes have been saved"
    setTimeout(() => {
        location.reload();    
    }, 500);
})	
    
checkone.checked = JSON.parse(localStorage.getItem("checkone"))
checktwo.checked = JSON.parse(localStorage.getItem("checktwo"))
checkthree.checked = JSON.parse(localStorage.getItem("checkthree")) 
document.getElementById("c").addEventListener("click",()=>{
    window.location = "options.html"
})

// if(JSON.parse(localStorage.getItem("checktwo"))==false){
//       document.getElementById("mainAudio").play()
// }

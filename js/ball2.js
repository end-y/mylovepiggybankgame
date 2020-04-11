var executed = false;

function Ball2(){
    this.konumlar1 = [windowWidth/1.33,windowWidth/2, windowWidth/4];
    this.sayilar =Math.ceil(Math.random()*1)+windowHeight
    this.secim = Math.round(random(0,2))
    this.r = 80
    this.puan1 = 10
    
    this.display2= function(){
    fill(255)
    daire1 = image(img2, this.konumlar1[this.secim]-40, this.sayilar-40, this.r, this.r)
    fill(0)
    textFont(font)
    text(this.puan1,this.konumlar1[this.secim]-14, this.sayilar+10)
    }

    function exe(){
    if (!executed){ 
        executed = true;
        ball2.pop()
    }
    }
  
  this.update2 = function(){
    if(score <= 300) {
        this.sayilar = this.sayilar - 5;
        return false;
    }
    if(score <= 600 ){
        exe()
        this.sayilar = this.sayilar - 6;
        return false;
        }
    if(score <= 1200 ){
        exe()
        this.sayilar = this.sayilar - 7
        return false;
    }
    if(score < 2400 ){
       exe()
        this.sayilar = this.sayilar - 8;
        return false;
  
    }
    if(score > 2400){
        exe()
        this.sayilar = this.sayilar - 8;
        return false;
    }
    
//    for(let j = 0; j<top1.length; j++){
//       if(frameCount % 1000 == 0){
//           top1.splice(j,1);
//   }
//  }
}
}

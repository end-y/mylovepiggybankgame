var executed = false;

function Ball(){
    this.konumlar = [windowWidth/1.33,windowWidth/2, windowWidth/4];
    this.sayilar =Math.ceil(Math.random()*1)+windowHeight
    this.secim = Math.round(random(0,2))
    this.r = 80
    this.puan = [20,30,40,50,100]
    this.c = Math.round(random(0,3))
    this.display = function(){
        fill(255)
        daire1 = image(img2, this.konumlar[this.secim]-40, this.sayilar-40, this.r, this.r)
        fill(0)
        textFont(font)

        if(this.sayilar <= windowHeight && this.sayilar >= windowHeight - z){
            text(this.puan[this.c],this.konumlar[this.secim]-14, this.sayilar+10)
        }
    }
  

    function exe(){
        if (!executed){ 
            executed = true;
            top1.length = 0
            top1.pop()
        }
    }

  this.update = function(){
    if(score <= 300) {
        this.sayilar = this.sayilar - 5;
        z = 5000
        return false;
    }

    if(score <= 600 ){
        exe()
        this.sayilar = this.sayilar - 6;
        z = 4000
        return false;
        }
    if(score <= 1200 ){
        exe()
        this.sayilar = this.sayilar - 7;
        z = 3000
        return false;
    }
    if(score <= 2400 ){
        exe()
        this.sayilar = this.sayilar - 8;
        z = 3000
        return false;
  
    }
    if(score>2400){
        exe()
        this.sayilar = this.sayilar - 8;
        z = 2000
        return false;
    }
    
//    for(let j = 0; j<top1.length; j++){
//       if(frameCount % 1000 == 0){
//           top1.splice(j,1);
//   }
//  }
}
}

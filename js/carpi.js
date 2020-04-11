var executed = false;
function Carpi() {
    this.konumlar2 = [windowWidth/1.33,windowWidth/2, windowWidth/4];
    this.sayilar =Math.ceil(Math.random()*1)+windowHeight
    this.secim = Math.floor(random(0,3))
    this.k = 80
    this.w = 60

    this.display1 = function(){
          this.oge = [ 
            image(img, this.konumlar2[this.secim]-30, this.sayilar-40,this.w,this.k)
          ]
          }
      

    function exe(){
        if (!executed){ 
            executed = true;
            carpi.length=0;
            carpi.pop()
        }
    }      
      this.update1 = function(){
        if(score <= 300) {
            this.sayilar = this.sayilar - 5
            return false;
        }
        if(score <= 600 ){
            exe()
            this.sayilar = this.sayilar - 6; 
            return false
            }
        if(score <= 1200 ){
            exe()
            this.sayilar = this.sayilar - 7;
            return false
        }
        if(score < 2400 ){
            exe()
            this.sayilar = this.sayilar - 8;
            return false
          }
          if(score > 2400){
            exe()
            this.sayilar = this.sayilar - 8;
            return false
          }
}
}
function Arrow(){
  

  this.show = function(c,d){
    this.c = c;
    this.d = d;
    
    rect(c,d,50,50)
    image(img3, x-40 , y-40, 80, 80)
    }
     
    this.play = function(){
    y = y+5;
  
    if(y>windowHeight/3){
        y = Math.floor(windowHeight/3);
        return true;
      }
    }
}

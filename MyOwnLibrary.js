function bounceOff(Obj1,Obj2){

    if (Obj1.x - Obj2.x < Obj2.width/2 + Obj1.width/2 &&
      Obj2.x - Obj1.x < Obj2.width/2 + Obj1.width/2){
        Obj1.velocityX = Obj1.velocityX*(-1);
        Obj2.velocityX = Obj2.velocityX*(-1);
  
   }
  
   if (Obj1.y - Obj2.y < Obj2.height/2 + Obj1.height/2 &&
    Obj2.y - Obj1.y < Obj2.height/2 + Obj1.height/2){
        Obj1.velocityY =Obj1.velocityY*(-1);
        Obj2.velocityY = Obj2.velocityY*(-1);
   }
  
  }


  function isTouching(Obj1,Obj2){

    if (Obj1.x - Obj2.x < Obj2.width/2 + Obj1.width/2 &&
      Obj2.x - Obj1.x < Obj2.width/2 + Obj1.width/2 &&
      Obj1.y - Obj2.y < Obj2.height/2 + Obj1.height/2 &&
      Obj2.y - Obj1.y < Obj2.height/2 + Obj1.height/2){
  return true;
  
  
   }
  
   else {
    
    return false;
  }
  
  }
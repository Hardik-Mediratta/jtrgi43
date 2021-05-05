var basket,basketImg;
var egg1,egg2,egg3,egg4,egg5,egg6,egg7,eggImage1,eggImage2,eggImage3,eggImage4,eggImage5,eggImage6,eggImage7;
var backgroundImg;
var log,logImg;
var hen,henImg;
var gameState = PLAY
var PLAY = 1
var WAIT = 0
var END = 2
var ground;
var score;
function preload(){                    
eggImage1 = loadImage("egg.png");
eggImage2 = loadImage("egg.png");
eggImage3 = loadImage("egg.png");
eggImage4 = loadImage("egg.png");
eggImage5 = loadImage("egg.png");
eggImage6 = loadImage("egg.png");
eggImage7 = loadImage("egg.png");

backgroundImg = loadImage("bg.png")
basketImg = loadImage("basket.png")
logImg = loadImage("log.png")
henImg1 = loadImage("hen.png")
henImg2 = loadImage("hen.png")
henImg3 = loadImage("hen.png")
henImg4 = loadImage("hen.png")
henImg5 = loadImage("hen.png")
henImg6 = loadImage("hen.png")
henImg7 = loadImage("hen.png")

score = 0
}
function setup(){
createCanvas(windowWidth,windowHeight);

basket = createSprite(668,530,153,320)
basket.addImage(basketImg)
basket.scale = 0.5

ground = createSprite(668,600,windowWidth,10)
ground.visible = false;




log = createSprite(100,284,200,15)
log.addImage(logImg)

log = createSprite(300,284,200,15)
log.addImage(logImg)

log = createSprite(500,284,200,15)
log.addImage(logImg)

log = createSprite(700,284,200,15)
log.addImage(logImg)

log = createSprite(900,284,200,15)
log.addImage(logImg)

log = createSprite(1100,284,200,15)
log.addImage(logImg)
log = createSprite(1300,284,200,15)
log.addImage(logImg)

hen = createSprite(100,211,200,15)
hen.addImage(henImg1)
hen.scale = 0.36

hen = createSprite(300,211,200,15)
hen.addImage(henImg2)
hen.scale = 0.36

hen = createSprite(500,211,200,15)
hen.addImage(henImg3)
hen.scale = 0.36

hen = createSprite(700,211,200,15)
hen.addImage(henImg4)
hen.scale = 0.36

hen = createSprite(900,211,200,15)
hen.addImage(henImg5)
hen.scale = 0.36

hen = createSprite(1100,211,200,15)
hen.addImage(henImg6)
hen.scale = 0.36

hen = createSprite(1300,211,200,15)
hen.addImage(henImg7)
hen.scale = 0.36

/*eggGroup1 = createGroup();
eggGroup2 = createGroup();
eggGroup3 = createGroup();
eggGroup4 = createGroup();
eggGroup5 = createGroup();
eggGroup6 = createGroup();
eggGroup7 = createGroup();
*/
console.log(windowWidth,windowHeight)
}
function draw(){
background(backgroundImg);
text("Score: " + score, 115, 50);
text(mouseX+","+mouseY,mouseX,mouseY);

    

    if(keyDown("RIGHT_ARROW")){
        basket.x+= 8
        basket.y+= 0
    }
    if(keyDown("LEFT_ARROW")){
        basket.x+= -8
        basket.y+= 0
        }
        
    if(basket.x<0){
        basket.x = 1300
    }   
    
    if(basket.x>1300){
        basket.x = 100
    } 
   /*  if(egg1.isTouching(basket)){
         score = score+1
         eggGroup1.destroyEach();
     }

     if(egg2.isTouching(basket)){
        score = score+1
        eggGroup2.destroyEach();
    }

    if(egg3.isTouching(basket)){
        score = score+1
        eggGroup3.destroyEach();
    }
    
    if(egg4.isTouching(basket)){
        score = score+1
        eggGroup4.destroyEach();
    }
      
    if(egg5.isTouching(basket)){
        score = score+1
        eggGroup5.destroyEach();
    }
      
    if(egg6.isTouching(basket)){
        score = score+1
        eggGroup6.destroyEach();
    }
      
    if(egg7.isTouching(basket)){
        score = score+1
        eggGroup7.destroyEach();
    }
  */  
    

spawnEgg1();
spawnEgg2();
spawnEgg3();
spawnEgg4();
spawnEgg5();
spawnEgg6();
spawnEgg7();


  

    drawSprites()
}
function spawnEgg1(){ if(frameCount%300 === 0)
    { egg1 = createSprite(100,325,50,50)
         egg1.addImage(eggImage1)
          egg1.scale = 0.1
           egg1.velocityY = 3.5
            egg1.velocityX = 0 
           egg1.x=Math.round(random(100,100)) 
            egg1.y = windowHeight/2 + 25
              } 
            // eggGroup1.add(egg1);

    }
    
function spawnEgg2(){ if(frameCount%503 === 0)
    { egg2 = createSprite(300,325,50,50)
         egg2.addImage(eggImage2)
          egg2.scale = 0.1
           egg2.velocityY = 3.5
            egg2.velocityX = 0 
           egg2.x=Math.round(random(300,300)) 
            egg2.y = windowHeight/2 + 25
              } 
            // eggGroup2.add(egg2);

    }
       
function spawnEgg3(){ if(frameCount%907 === 0)
    { egg3 = createSprite(500,325,50,50)
         egg3.addImage(eggImage3)
          egg3.scale = 0.1
           egg3.velocityY = 3.5
            egg3.velocityX = 0 
           egg3.x=Math.round(random(500,500)) 
            egg3.y = windowHeight/2 + 25
              } 
            // eggGroup3.add(egg3);

    }
       
function spawnEgg4(){ if(frameCount%1307 === 0)
    { egg4 = createSprite(700,325,50,50)
         egg4.addImage(eggImage4)
          egg4.scale = 0.1
           egg4.velocityY = 3.5
            egg4.velocityX = 0 
           egg4.x=Math.round(random(700,700)) 
            egg4.y = windowHeight/2 + 25
              } 
            // eggGroup4.add(egg4);

    }
       
function spawnEgg5(){ if(frameCount%1817 === 0)
    { egg5 = createSprite(900,325,50,50)
         egg5.addImage(eggImage5)
          egg5.scale = 0.1
           egg5.velocityY = 3.5
            egg5.velocityX = 0 
           egg5.x=Math.round(random(900,900)) 
            egg5.y = windowHeight/2 + 25
            } 
           //  eggGroup5.add(egg5);

    }
       
function spawnEgg6(){ if(frameCount%2153 === 0)
    { egg6 = createSprite(1100,325,50,50)
         egg6.addImage(eggImage6)
          egg6.scale = 0.1
           egg6.velocityY = 3.5
            egg6.velocityX = 0 
           egg6.x=Math.round(random(1100,1100)) 
           // egg.y = windowHeight/2 + 25
              } 
            // eggGroup6.add(egg6);

    }
       
function spawnEgg7(){ if(frameCount%2457 === 0)
    { egg7 = createSprite(1300,325,50,50)
         egg7.addImage(eggImage7)
          egg7.scale = 0.1
           egg7.velocityY = 3.5
            egg7.velocityX = 0 
          egg7.x=Math.round(random(1300,1300)) 
           // egg.y = windowHeight/2 + 25
             } 
            // eggGroup7.add(egg7);

    }
    
  /*  function spawnHen(){
         if(frameCount%50 === 0)
        { hen = createSprite(1300,200,200,15)
             hen.addImage(henImg)
             hen.scale = 0.36
             hen.velocityY = 0
             hen.velocityX = -7
             hen.lifetime = 185
               // hen.x=Math.round(random(100,750)) 
              // hen.y = windowHeight/2 + 25
                // console.log(hen.y); } 
    
        }
        
    }*/
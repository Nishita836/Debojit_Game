var form,player,playerImg1,playerImg2,playerImg3,playerImg4,Ground,nonplayer,nonplayerImg,Ground2,Ground3,Ground4;
var GameState = 1;
var OpPlr1,OpPlr1Img , OpPlr2 , OpPlr2Img , OpPlr3 , OpPlr3Img , OpPlr4Img ,OpPlr5Img ,OpPlr6Img;
var Button1Img,Button2Img;
var Sate = 1;
var Enemy,Enemy2,EnemyImg,Enemy2Img;
var EnemyGroup;
var speedState = 1;
var jumpState = 1;
var fullState = 1;
var npspeedState = 1;
var npjumpState = 1;
var Life1,Life2,Life3,Lifebox,Life1Img,Life2Img,Life3Img,LifeboxImg;
var score = 0
var Health = 3;
var Fly, FlyImg;
var Speed,SpeedImg;
var Full3 , Full3Img
var npspeed = 1;
var bg , bgImg,bg2;
var bgGround,diesound;
var building1,buildingImg;
var allPlayers;
var form, player3, game , form2;
var allPlayers;
var Case,CaseImg;
var Case2,Case2Img
var Ground6;
var CameraState = 0;
var screen,screenImg;
var End , EndImg;
var FlyRoad;
var clickstate = 1;
var buttonshow = 1;
var timme = 20;
var Thumbnail,ThumbnailImg;
var WON
function preload() {
  //Button1Img = loadImage("Untitled12.png")
  //Button2Img = loadImage("Untitled34.png")
  Life1Img = loadImage("Untitled51.png")
  Life2Img = loadImage("Untitled51.png")
  Life3Img = loadImage("Untitled51.png")
  LifeboxImg = loadImage("Untitled61.png")
  FlyImg = loadImage("Untitled59.png")
  SpeedImg = loadImage("Untitled69.png")
  nonplayerImg2 = loadAnimation("policeman_PNG890332.png","policeman_PNG891.png","policeman1.png","policeman_PNG891.png","policeman_PNG890332.png")
  nonplayerImg = loadAnimation("policeman_PNG89033.png","policeman_PNG89.png","policeman.png","policeman_PNG89.png","policeman_PNG89033.png")
  playerImg = loadAnimation("unnamed.png","unnamed3.png","unnamed4.png","unnamed3.png","unnamed.png")
  OpPlr1Img = loadAnimation("unnamed6.png","unnamed2.png","unnamed5.png","unnamed2.png","unnamed6.png")
  OpPlr2Img = loadAnimation("unnamed6.png","unnamed2.png","unnamed5.png","unnamed2.png","unnamed6.png")
  OpPlr3Img = loadAnimation("unnamed6.png","unnamed2.png","unnamed5.png","unnamed2.png","unnamed6.png")
  OpPlr4Img = loadAnimation("unnamed578.png","unnamed8788.png","unnamed478.png","unnamed8788.png","unnamed578.png")
  OpPlr5Img = loadAnimation("unnamed578.png","unnamed8788.png","unnamed478.png","unnamed8788.png","unnamed578.png")
  OpPlr6Img = loadAnimation("unnamed578.png","unnamed8788.png","unnamed478.png","unnamed8788.png","unnamed578.png")
  nonplrImg = loadAnimation("policeman_PNG89033.png","policeman_PNG89.png","policeman.png","policeman_PNG89.png","policeman_PNG89033.png")
  nonplrImg2 = loadAnimation("policeman_PNG890332.png","policeman_PNG891.png","policeman1.png","policeman_PNG891.png","policeman_PNG890332.png")
  playerImg2 = loadAnimation("thief-dizzy_22350-510.png")
  playerImg3 = loadAnimation("egr.png")
  Full3Img = loadImage("Untitled60.png")
  bgImg = loadImage("imag.png")
  EnemyImg  = loadImage("download.png")
  Enemy2Img = loadImage("ghvkkdownload.png")
  playerImg4 = loadAnimation("unnamed57.png","unnamed8768.png","unnamed47.png","unnamed8768.png","unnamed57.png")
  buildingImg = loadImage("dsgsg.png")
  diesound = loadSound("game-over-2.wav")
  gettingdamage = loadSound("fall.wav")
  feedback = loadSound("Well Done CCBY3.ogg")
  land = loadSound("jumpland.wav")
  button = loadSound("switch2.wav")
  rinning = loadSound("running-footstep-sound-effect.mp3")
  running = loadSound("running-footstep-sound-effect.mp3")
  gettingscoe =  loadSound("Picked Coin Echo.wav")
  CaseImg = loadImage("Untitled1.png")
  Case2Img = loadImage("Untitled1546.png")
  screenImg = loadImage("Untitled5.png")
  EndImg = loadImage("Untited.png")
  ThumbnailImg = loadImage("END.png")
  WON = loadSound("You Win Voice Sound Effect.mp3")
}




function setup() {
  createCanvas(1200,400);
  form2 = new Form()
  




 
 bg = createSprite(camera.x+300,200,20,20);
 bg.addImage("img",bgImg);
 bg.scale = 2;
 bg.visible = false;
 building1 = createSprite(displayWidth/2,200,20,20);
 building1.addImage("img",buildingImg);
 building1.visible = false
 //building1.scale = 2.4
 
 player = createSprite(-50,105,30,30)
 player.addAnimation("RUNNING",playerImg)
 player.addAnimation("PAIN",playerImg2)
 player.addAnimation("STOP",playerImg3)
 player.addAnimation("super",playerImg4)
 player.addAnimation("superjump",playerImg4)
 player.scale = 0.25
 player.visible = false;

 player.setCollider("rectangle",0,0,700,370)
 
 OpPlr1 = createSprite(-50,105,30,30)
 OpPlr1.addAnimation("run",OpPlr1Img)
 OpPlr1.addAnimation("run2",OpPlr4Img)
 OpPlr1.scale = 0.25
 OpPlr1.setCollider("rectangle",0,0,700,370)
 OpPlr1.debug = true
 OpPlr1.visible = false;
 OpPlr2 = createSprite(-50,105,30,30)
 OpPlr2.addAnimation("run3",OpPlr2Img)
 OpPlr2.addAnimation("run4",OpPlr5Img)
 OpPlr2.scale = 0.25
 OpPlr2.setCollider("rectangle",0,0,700,370)
 OpPlr2.debug = true
 OpPlr2.visible = false;
 OpPlr3 = createSprite(-50,105,30,30)
 OpPlr3.addAnimation("run5",OpPlr3Img)
 OpPlr3.addAnimation("run6",OpPlr6Img)
 OpPlr3.scale = 0.25
 OpPlr3.setCollider("rectangle",0,0,700,370)
 OpPlr3.debug = true
 OpPlr3.visible = false;
 nonplayer = createSprite(-200,105,30,30)
 nonplayer.addAnimation("runing",nonplayerImg)
 
 nonplayer.scale = 0.2
 nonplayer.setCollider("rectangle",0,0,850,460)
 nonplayer.visible = false;

 Lifebox = createSprite(1100,30,20,20)
 Lifebox.addImage("Box",LifeboxImg)
 Lifebox.scale = 0.2
 Lifebox.visible = false;
 Ground = createSprite(displayWidth/2,390,20000,20)
  Ground.visible = false
 Ground.shapeColor = "orange"
 Ground2 = createSprite(-50,130,500,10);
 
 Ground2.visible = false;
 Ground3 = createSprite(200,110,10,50)
 Ground3.visible = false;

 if(Health === 3){
 Life1 = createSprite(1065,30,20,20)
 Life1.addImage("health",Life1Img)
 Life1.scale = 0.15
 Life1.visible = false

 Life2 = createSprite(1100,30,30,20)
 Life2.addImage("healt",Life2Img)
 Life2.scale = 0.15
 Life2.visible = false

 Life3 = createSprite(1135,30,30,20)
 Life3.addImage("heal",Life3Img)
 Life3.scale = 0.15
 Life3.visible = false
 }
 Restart = createButton('Restart');
 Restart.position(displayWidth/2 -10,displayHeight/2 - 100);
 Restart.hide();

 End = createSprite(21000,Ground.y-68,10,10)
 End.addImage("End",EndImg)
 End.visible = false;
 Invisible = createSprite(End.x,displayHeight/2,10,1000)
 Invisible.visible = false;
 //rinning.loop()
 Thumbnail = createSprite(windowWidth/2,windowHeight/4,10,10)
 Thumbnail.addImage("thumbnail",ThumbnailImg)
 Thumbnail.visible = false

 EnemyGroup = new Group();
 EnemyGroup2 = new Group();
 speedGroup = new Group();
 jumpGroup = new Group();
 fullGroup = new Group();
 GroundGroup = new Group();
 buildingGroup = new Group();
 FlygroundGroup = new Group();

}




function draw() {
 background("white")
 //console.log(frameCount)
 
 console.log(player.x)
  form2.display();


 if(GameState === 1){
  End.visible = false;
  Invisible.visible = false;
  screen.visible = false;
  building1.visible = false;
  player.visible = false;
  Ground.visible = false;
  Ground2.visible = false;
  Ground3.visible = false;
  nonplayer.visible = false;
  Lifebox.visible = false;
  bg.visible = false;
  Life1.visible = false;
  Life2.visible = false;
  Life3.visible = false;
  OpPlr1.visible = false;
  OpPlr2.visible = false;
  OpPlr3.visible = false;
  Restart.hide();
  OpPlr1.changeAnimation("run",OpPlr1Img)
  OpPlr2.changeAnimation("run3",OpPlr2Img)
  OpPlr3.changeAnimation("run5",OpPlr3Img)
  player.changeAnimation("RUNNING",playerImg)
  player.x = -50;
  player.scale = 0.25
  OpPlr1.scale = 0.25
  OpPlr2.scale = 0.25
  OpPlr3.scale = 0.25
  player.y = 105;
   Ground.x = displayWidth/2
  Sate = 1
  Ground2.x = -50
  nonplayer.x = -200
  nonplayer.y = 105
  camera.position.x = 600
  Ground3.x = 200
  Ground3.y = 110
  bg.x = camera.x+300
  building1.x = displayWidth/2
  Lifebox.x = 1100
  OpPlr1.x = -50;
  OpPlr2.x = -50;
  OpPlr3.x = -50;
  OpPlr1.y = 105;
  OpPlr2.y = 105;
  OpPlr3.y = 105;
  player.setCollider("rectangle",0,0,700,370)
  nonplayer.setCollider("rectangle",0,0,850,460)
  frameCount = 0
 }
 










 


  if(GameState === 2 ){
    End.visible = false;
    Invisible.visible = false;
    screen.visible = false;
    building1.visible = true;
    player.visible = true;
    player.velocityX = 8;
    Ground.visible = true;
    Ground2.visible = true;
    Ground3.visible = true;
    nonplayer.visible = true;
    Lifebox.visible = true;
    bg.visible = true;
    nonplayer.velocityX = Math.round(random(6,8))
    
    Life1.visible = true;
    Life2.visible = true;
    Life3.visible = true;
    
    //Ground.velocityX = 6
    //if (Ground.x > 800){ 
    ///  Ground.x = Ground.width/2; 
    //}

    if(nonplayer.isTouching(Ground3)){
      nonplayer.velocityY = -10;
      
    }
    nonplayer.velocityY = nonplayer.velocityY + 0.9

    if(player.isTouching(Ground3)){
      player.velocityY = -10;
    }
     player.velocityY = player.velocityY + 0.9


     if(player.isTouching(Ground)){
      Sate = 2
      jump = 2
   }
   if(Sate === 2){
    spwanFeedback()
     
    
    // music();
 
    
     camera.position.x = player.x+160;
     player.setCollider("rectangle",0,0,300,370)
     //console.log("player",player.y)
     Lifebox.x = camera.x+500
     Life1.x = camera.x+465
     Life2.x = camera.x+500
     Life3.x = camera.x+535
     bg.x = camera.x+300

     if(keyDown("space")  && player.y >= 326){
        player.velocityY = -23;
        
        land.play();
      
     }
     player.velocityY = player.velocityY + 1

     if (building1.x < camera.x-900){
      building1.x = camera.x+700;
   }
     //console.log(speedState)
    // console.log("healthstate"+Health)
     //console.log(jumpState)
     //console.log(Sate)

     if(EnemyGroup2.isTouching(player) && Health === 3){

        player.velocityX = 0
        Health = 2
        Life3.destroy();
      
        EnemyGroup2.destroyEach()
        speedState = 1
        jumpState = 1
        gettingdamage.play()
       if(jumpState === 1){
          player.changeAnimation("RUNNING",playerImg)
       }

       if(speedState === 1){
          player.changeAnimation("RUNNING",playerImg)
       }
    

     }else if(EnemyGroup2.isTouching(player) && Health === 2){
      player.velocityX = 0
      Health = 1
      Life2.destroy();
      EnemyGroup2.destroyEach()
      speedState = 1
      jumpState = 1
      gettingdamage.play()
      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
        

     }else if(EnemyGroup2.isTouching(player) && Health === 1){
      player.velocityX = 0
      Health = 0
      Life1.destroy();
      EnemyGroup2.destroyEach()
      GameState = 3
      speedState = 1
      jumpState = 1
      diesound.play();
      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
     }

     if(EnemyGroup.isTouching(player)){
      Life3.destroy();
      Life1.destroy();
      Life2.destroy();
      Health = 0
      GameState = 3
      speedState = 1
      jumpState = 1
      diesound.play();
      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
     }

     if(Health === 2){
     if(player.isTouching(fullGroup)){
      Health = 3
      gettingscoe.play( )
      Life3 = createSprite(1135,30,30,20)
      Life3.addImage("heal",Life3Img)
      Life3.scale = 0.15
     }

     }else if(Health === 1){

      if(player.isTouching(fullGroup)){
        Health = 2
        gettingscoe.play( )
        Life2 = createSprite(1100,30,30,20)
        Life2.addImage("healt",Life2Img)
        Life2.scale = 0.15


     }
    }




     if(player.isTouching(fullGroup)){
      fullGroup.destroyEach();


     }

     
 
     if(nonplayer.isTouching(EnemyGroup)){
       nonplayer.velocityY = -12;
       
     }
 
     if(nonplayer.isTouching(player)){
      GameState = 3;
      Health = 0;
      Life1.destroy()
      Life2.destroy()
      Life3.destroy()
      player.velocityY = 0;
     }
 
   if(speedGroup.isTouching(player)){
    speedState = 2;
    gettingscoe.play()
    speedGroup.destroyEach();
   }
   if(speedState === 2){
     player.velocityX = player.velocityX+5;
     player.changeAnimation("super",playerImg4)

    }

    if(jumpGroup.isTouching(player)){
     jumpState = 2;
     gettingscoe.play( )
     jumpGroup.destroyEach();
     }
   if(jumpState === 2){
       player.changeAnimation("superjump",playerImg4)
      if(keyDown("space") && player.y >= 326){
       player.velocityY = -34;
      
      }
      player.velocityY = player.velocityY + 0.9
     
        if(player.collide(FlygroundGroup)){
          if(keyDown("space")){
            player.velocityY = -34;
        
            land.play();
          
         }
         player.velocityY = player.velocityY + 0.9
         } 
      
    }
 

   }




    
    if(EnemyGroup.isTouching(nonplayer)){
      npspeedState = 1;
      nonplayer.velocityX = 7;
    }

   spwanObstacle();
   speedPower();
   Powerjump()
   spwanGround();
   spwanOb()
   Getready();
   createOnRoad()






  }

  if(GameState === 3){
    rinning.pause()
    //console.log("you lose")
    spwanObstacle();
    speedPower();
    Powerjump()
    spwanGround();
    Getready();
    spwanOb()
    text("Score: "+ score,camera.x+200,30);
    player.changeAnimation("STOP",playerImg3)
    player.setCollider("rectangle",0,0,200,200)
    player.scale = 0.5
    EnemyGroup.setVelocityXEach(0);
    EnemyGroup2.setVelocityXEach(0);
    player.velocityX = 0
    player.velocityY = 0
    player.y= camera.y+150;
    Restart.show();
    nonplayer.velocityX = 0
   
    Restart.mousePressed(()=>{
      building1.x = camera.x
      button.play();
      // Back.hide();
      rinning.loop()
       Restart.hide();
       GameState = 2
       Health = 3
       Sate = 2  
       jumpState = 1
       speedState = 1
       EnemyGroup.destroyEach();
       EnemyGroup2.destroyEach();
       jumpGroup.destroyEach();
       speedGroup.destroyEach();
       player.changeAnimation("RUNNING",playerImg)
       player.setCollider("rectangle",0,0,400,400)
       player.y = camera.y+150;
       player.x = camera.x;
       Ground.x = width/2;
       npspeed=1
       nonplayer.x = player.x-200;
    
       score = 0;
       player.scale = 0.25
       Life1 = createSprite(1065,30,20,20)
       Life1.addImage("health",Life1Img)
       Life1.scale = 0.15
       
      
       Life2 = createSprite(1100,30,30,20)
       Life2.addImage("healt",Life2Img)
       Life2.scale = 0.15
       
      
       Life3 = createSprite(1135,30,30,20)
       Life3.addImage("heal",Life3Img)
       Life3.scale = 0.15

     });

     //Back.mousePressed(()=>{
     // GameState = 1
      //form.display()
  
     //});
     
  }


  if(GameState === 4){
    End.visible = true;
    screen.visible = false;
    building1.visible = true;
    player.visible = true;
    OpPlr1.visible = true;
    OpPlr1.velocityX = Math.round(random(7,9))
    OpPlr2.visible = true;
    OpPlr2.velocityX = Math.round(random(7,9))
    OpPlr3.visible = true;
    OpPlr3.velocityX = Math.round(random(7,9))
    player.velocityX = Math.round(random(8,10));
    Ground.visible = true;
    Ground2.visible = true;
    Ground3.visible = true;
    nonplayer.visible = true;
    Lifebox.visible = true;
    bg.visible = true;
    nonplayer.velocityX = Math.round(random(6,8))
    Life1.visible = true;
    Life2.visible = true;
    Life3.visible = true;
    
    //Ground.velocityX = 6
    //if (Ground.x > 800){ 
    ///  Ground.x = Ground.width/2; 
    //}

    if(nonplayer.isTouching(Ground3)){
      nonplayer.velocityY = -10;
      
    }
    nonplayer.velocityY = nonplayer.velocityY + 0.9

    if(player.isTouching(Ground3)){
      player.velocityY = -10;
    }
     player.velocityY = player.velocityY + 0.9

     if(OpPlr1.isTouching(Ground3)){
      OpPlr1.velocityY = -10;
    }
     OpPlr1.velocityY = OpPlr1.velocityY + 0.9

     if(OpPlr2.isTouching(Ground3)){
      OpPlr2.velocityY = -10;
    }
     OpPlr2.velocityY = OpPlr2.velocityY + 0.9

     if(OpPlr3.isTouching(Ground3)){
      OpPlr3.velocityY = -10;
    }
     OpPlr3.velocityY = OpPlr3.velocityY + 0.9


     if(player.isTouching(Ground)){
      Sate = 2
      jump = 2
   }
   if(Sate === 2){
    spwanFeedback()
    

     
 
    
     camera.position.x = player.x+160;
     player.setCollider("rectangle",0,0,300,370)
     //console.log("player",player.y)
     Lifebox.x = camera.x+500
     Life1.x = camera.x+465
     Life2.x = camera.x+500
     Life3.x = camera.x+535
     bg.x = camera.x+300

     if(keyDown("space")  && player.y >= 326){
        player.velocityY = -23;
        
        land.play();
      
     }
     player.velocityY = player.velocityY + 1

     if (building1.x < camera.x-900){
      building1.x = camera.x+700;
   }
     //console.log(speedState)
    // console.log("healthstate"+Health)
     //console.log(jumpState)
     //console.log(Sate)

     if(EnemyGroup2.isTouching(player) && Health === 3){

        player.velocityX = 0
        Health = 2
        Life3.destroy();
      
        EnemyGroup2.destroyEach()
        speedState = 1
        jumpState = 1
        gettingdamage.play()
       if(jumpState === 1){
          player.changeAnimation("RUNNING",playerImg)
       }

       if(speedState === 1){
          player.changeAnimation("RUNNING",playerImg)
       }
    
  

     }else if(EnemyGroup2.isTouching(player) && Health === 2){
      player.velocityX = 0
      Health = 1
      Life2.destroy();
      EnemyGroup2.destroyEach()
      speedState = 1
      jumpState = 1
      gettingdamage.play()
      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
        

     }else if(EnemyGroup2.isTouching(player) && Health === 1){
      player.velocityX = 0
      Health = 0
      Life1.destroy();
      EnemyGroup2.destroyEach()
      GameState = 5
      speedState = 1
      jumpState = 1
      diesound.play();
      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
     }

     
     if(EnemyGroup.isTouching(player)){
      Life3.destroy();
      Life1.destroy();
      Life2.destroy();
      Health = 0
      GameState = 5
      speedState = 1
      jumpState = 1
      diesound.play();
      if(jumpState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
      if(speedState === 1){
        player.changeAnimation("RUNNING",playerImg)
      }
   
     }

     if(Health === 2){
     if(player.isTouching(fullGroup)){
      Health = 3
      gettingscoe.play( )
      Life3 = createSprite(1135,30,30,20)
      Life3.addImage("heal",Life3Img)
      Life3.scale = 0.15
     }

     }else if(Health === 1){

      if(player.isTouching(fullGroup)){
        Health = 2
        gettingscoe.play( )
        Life2 = createSprite(1100,30,30,20)
        Life2.addImage("healt",Life2Img)
        Life2.scale = 0.15


     }
    }




     if(player.isTouching(fullGroup)){
      fullGroup.destroyEach();


     }

     
 
     if(nonplayer.isTouching(EnemyGroup)){
       nonplayer.velocityY = -12;
       
     }
     if(OpPlr1.isTouching(EnemyGroup)){
      OpPlr1.velocityY = -12;
      
    }

    if(OpPlr2.isTouching(EnemyGroup)){
      OpPlr2.velocityY = -12;
      
    }

    if(OpPlr3.isTouching(EnemyGroup)){
      OpPlr3.velocityY = -12;
      
    }


    if(OpPlr1.isTouching(EnemyGroup2)){
      OpPlr1.velocityY = -12;
      
    }

    if(OpPlr2.isTouching(EnemyGroup2)){
      OpPlr2.velocityY = -12;
      
    }

    if(OpPlr3.isTouching(EnemyGroup2)){
      OpPlr3.velocityY = -12;
      
    }

 
     if(nonplayer.isTouching(player)){
      GameState = 5;
      Health = 0;
      Life1.destroy()
      Life2.destroy()
      Life3.destroy()
      player.velocityY = 0;
     }
 
   if(speedGroup.isTouching(player)){
    speedState = 2;
    gettingscoe.play()
    speedGroup.destroyEach();
   }
   if(speedState === 2){
     player.velocityX = player.velocityX+5;
     player.changeAnimation("super",playerImg4)

    }

    if(jumpGroup.isTouching(player)){
     jumpState = 2;
     gettingscoe.play( )
     jumpGroup.destroyEach();
     }
   if(jumpState === 2){
    player.changeAnimation("superjump",playerImg4)
    if(keyDown("space") && player.y >= 326){
     player.velocityY = -34;
    
    }
    player.velocityY = player.velocityY + 0.9
   
      if(player.collide(FlygroundGroup)){
        if(keyDown("space")){
          player.velocityY = -34;
      
          land.play();
        
       }
       player.velocityY = player.velocityY + 0.9
       } 
    
    }
 

   }



   if(player.isTouching(End)){
    GameState = 6
    WON.play()
   }
  
   if(keyDown("e")){
    player.x = 21000
   }

    
    if(EnemyGroup.isTouching(nonplayer)){
      npspeedState = 1;
      nonplayer.velocityX = 7;
    }

   spwanObstacle();
   speedPower();
   Powerjump()
   spwanGround();
   spwanOb()
   Getready();
   createOnRoad()










  }

  if(GameState === 5){
    rinning.pause()
    //console.log("you lose")
    spwanObstacle();
    speedPower();
    Powerjump()
    spwanGround();
    Getready();
    spwanOb()
    text("Score: "+ score,camera.x+200,30);
    player.changeAnimation("STOP",playerImg3)
    player.setCollider("rectangle",0,0,200,200)
    player.scale = 0.5
    EnemyGroup.setVelocityXEach(0);
    EnemyGroup2.setVelocityXEach(0);
    player.velocityX = 0
    player.velocityY = 0
    
    
    nonplayer.velocityX = 0
   
   
   
     
  }

  if(GameState === 6){
    EnemyGroup.setVelocityXEach(0);
    EnemyGroup2.setVelocityXEach(0);
    player.velocityX = 0
    player.velocityY = 0
    OpPlr1.velocityX = 0
    OpPlr2.velocityX = 0
    OpPlr3.velocityX = 0
    nonplayer.velocityX = 0
    
  }





  player.collide(Ground);
  nonplayer.collide(Ground);
  player.collide(Ground2);
  nonplayer.collide(Ground2);
  player.collide(GroundGroup);
  nonplayer.collide(GroundGroup);
  
  OpPlr1.collide(Ground);
  OpPlr2.collide(Ground);
  OpPlr3.collide(Ground);
  OpPlr1.collide(Ground2);
  OpPlr2.collide(Ground2);
  OpPlr3.collide(Ground2);
  OpPlr1.collide(GroundGroup);
  OpPlr2.collide(GroundGroup);
  OpPlr3.collide(GroundGroup);
  OpPlr1.collide(FlygroundGroup)
  OpPlr2.collide(FlygroundGroup)
  OpPlr3.collide(FlygroundGroup)
 




 




 // console.log("gamestate",GameState)
  drawSprites();
 
  if(GameState === 2){
    score = score + Math.round(getFrameRate()/55);
    textSize(20)
    text("Score: "+ score,camera.x+200,30);
    
  }


  if(GameState === 4){
    score = score + Math.round(getFrameRate()/55);
    textSize(20)
    text("Score: "+ score,camera.x+200,30);
    
  }



  
}

function spwanObstacle(){
  push()
  if(frameCount % 2000 === 0){
    Enemy = createSprite(camera.x+800,340,20,20)
    Enemy.velocityX = -9
    var rand = Math.round(random(1,2))
    switch(rand){
     case 1: Enemy.addImage("car",Enemy2Img)
             Enemy.scale = 0.7
            
             Enemy.setCollider("rectangle",0,0,220,100)
             break;
     case 2: Enemy.addImage("Police",EnemyImg)
            
             Enemy.setCollider("rectangle",0,0,200,70)
     default: break;   

  }

  EnemyGroup.add(Enemy)
  
  pop()

  }





}


function spwanOb(){
   push()
   if(frameCount % 270 === 0){
      Enemy1 = createSprite(camera.x+800,330,20,20)
      Enemy1.addAnimation("Enemy",nonplayerImg2)
      Enemy1.setCollider("rectangle",0,0,320,480)
      Enemy1.velocityX = -(6.5+ 3*score/500)

      Enemy1.scale = 0.2
      EnemyGroup2.add(Enemy1)


      



    }
 pop()




}




function speedPower(){
  if(frameCount % 800 === 0){
    Speed = createSprite(camera.x+800,357,20,20);
    Speed.addImage("speed",SpeedImg)
    Speed.scale = 0.26
    speedGroup.add(Speed);
  }
  

}




function Powerjump(){
if(frameCount % 1500 === 0){  
  Fly = createSprite(camera.x+800,357,20,20)
  Fly.addImage("fly",FlyImg)
  Fly.scale = 0.26
  jumpGroup.add(Fly)
}


}

function Getready(){
 if(frameCount % 2500 === 0){
  Full3 = createSprite(camera.x+800,357,20,20)
  Full3.addImage("fy",Full3Img)
  Full3.scale = 0.17
  fullGroup.add(Full3)
 }



}


function spwanGround(){
if(frameCount%700 === 0){
 Ground4 = createSprite(camera.x,390,20000,20)  
 var rand1 = Math.round(random(1,3))
 switch(rand1){
  case 1: Ground4.shapeColor = "aqua"
          break;
  case 2: Ground4.shapeColor = "green" 
          break;
  case 2: Ground4.shapeColor = "yellow"
  default: break;   

}

 GroundGroup.add(Ground4)
}

}





function spwanFeedback(){
  if(score % 800 === 0){
    feedback.play()
   }
  
}


function createOnRoad(){

    

    if(frameCount% 50 === 0){
      FlyRoad = createSprite(camera.x+800,Math.round(random(140,150)),200,10)  
       FlyRoad.shapeColor = "aqua"

     
     FlygroundGroup.add(FlyRoad)
     }



  





}




 

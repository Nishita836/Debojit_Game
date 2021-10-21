class Form {

  constructor() {
     this.input = createInput("Name");
    
      this.button = createButton('Normal');
      this.button.size(60,30)
      this.button2 = createButton('Hard');
      this.button2.size(60,30)
      this.button4= createButton('PLAY')
      this.button4.size(60,30)

      this.title = createElement('h1');
      this.Back = createButton('Back');
      this.Back.size(60,30)
      this.Back2 = createButton('Back');
      this.Back2.size(60,30)
      this.Back3 = createButton('Back');
      this.Back3.size(60,30)
      this.button3 = createButton('Lets Go')
      this.button3.size(60,40)
      this.greeting = createElement('h2');
      this.greeting2 = createElement('h2')

      this.input.hide();
      this.Back.hide();
      this.Back2.hide();
      this.Back3.hide();
      this.button3.hide()
      this.button4.hide()
  


    }
    hide(){
      this.greeting.hide();
      this.greeting2.hide();
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      this.title.hide();
      this.button2.hide();
      this.button4.hide();
      this.button3.hide();
      this.greeting3.hide()
    }


    display(){
           
     

      
    
        this.title.html("PROG");
        this.title.position(displayWidth/2 - 119, displayHeight/4-100);
    
        this.input.position(displayWidth/2 - 140, displayHeight/4);
        this.button.position(displayWidth/2 - 100, displayHeight/4);
        this.button2.position(displayWidth/2 - 100, displayHeight/4+35);
        this.button3.position(displayWidth/2 - 93, displayHeight/4+30);
        this.button4.position(displayWidth/2 - 170, displayHeight/4+30);
 

        this.Back.position(windowWidth/1.4,windowHeight/29.5);
        this.Back2.position(windowWidth/1.4,windowHeight/29.5);
        this.Back3.position(windowWidth/2.5,windowHeight/3.5);
        this.button.mousePressed(()=>{
         // this.input.hide();
          this.button.hide();
          this.button2.hide();
          this.title.hide();
            //PLayer = this.input.value();
            button.play();
            rinning.loop()
          //this.greeting.html("Hello " + PLayer)
          //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          GameState = 2;
          this.Back2.show();
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
  

        });



        this.button2.mousePressed(()=>{
          // this.input.hide();
           this.button.hide();
           this.button2.hide();
           this.title.hide();
           this.Back.show();
           this.button3.show();
          
         
           this.input.show();
           button.play();
          

           
         });
   
      

          this.button3.mousePressed(()=>{
          this.input.hide();
          this.button3.hide();
          player3 = this.input.value();
          this.greeting.html(player3)
          this.greeting2.html("Hello  "    + player3 +    "    Welcome To Player Running Over Ground")
          this.greeting.position(displayWidth/2 - 650,displayHeight/2 - 395);
          this.greeting2.position(displayWidth/2 - 300,displayHeight/2 - 400)
          this.greeting.show()
          this.greeting2.show();

     
          Case = createSprite(50,25)
          Case.addImage("iMAGE",CaseImg)
          Case.scale = 0.8
          Case.visible = true
          this.button4.show();          
    
         });
           


  
         this.Back.mousePressed(()=>{

            this.input.hide();
            this.button.show();
            this.button2.show();
            this.button3.hide();
            this.title.show();
            this.Back.hide();
      
            this.greeting.hide();
            this.greeting2.hide();
            this.button4.hide()
            this.greeting3.hide()
            this.input2.hide()

            Case.visible = false

         });





         this.button4.mousePressed(()=>{
    
          rinning.loop()
          this.button4.hide();
  
         
          this.greeting.hide();
          this.greeting2.hide()
          Case.visible = false
           GameState = 4
           
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
   
         })




      
      this.Back.mousePressed(()=>{
   
        this.input.hide();
        this.button.show();
        this.button2.show();
        this.button3.hide();
        this.title.show();
        this.Back.hide();

        this.greeting.hide();
        this.greeting2.hide();
        this.button4.hide()
        
   
 
        Case.visible = false;
        GameState = 1
        
        rinning.pause()
        GroundGroup.destroyEach()
        EnemyGroup2.destroyEach()
        EnemyGroup.destroyEach()
        speedGroup.destroyEach()
        jumpGroup.destroyEach()
        fullGroup.destroyEach()
        GroundGroup.destroyEach()
        buildingGroup.destroyEach()
        FlygroundGroup.destroyEach()
        score = 0
        Health = 3
        jumpState = 1
        speedState = 1
        Life1.destroy();
  
        Life2.destroy();
       
        Life3.destroy();

     });

     this.Back2.mousePressed(()=>{
   
     
      this.button.show();
      this.button2.show();

      this.title.show();
      this.Back2.hide();

      
 


      GameState = 1
    
      rinning.pause()
      GroundGroup.destroyEach()
      EnemyGroup2.destroyEach()
      EnemyGroup.destroyEach()
      speedGroup.destroyEach()
      jumpGroup.destroyEach()
      fullGroup.destroyEach()
      GroundGroup.destroyEach()
      buildingGroup.destroyEach()
      FlygroundGroup.destroyEach()
      score = 0
      Health = 3
      jumpState = 1
      speedState = 1
      Life1.destroy();
  
      Life2.destroy();
     
      Life3.destroy();
   });



  if(GameState === 5){
   this.Back3.show();
   this.Back2.hide();
   this.Back.hide();

  }

  if(GameState === 6){
    this.Back3.show();
    this.Back2.hide();
    this.Back.hide();
 
   }
   
  this.Back3.mousePressed(()=>{
   
     
    this.button.show();
    this.button2.show();

    this.title.show();
    this.Back.hide();
    this.Back2.hide();
    this.Back3.hide();
    



    GameState = 1
  
    rinning.pause()
    GroundGroup.destroyEach()
    EnemyGroup2.destroyEach()
    EnemyGroup.destroyEach()
    speedGroup.destroyEach()
    jumpGroup.destroyEach()
    fullGroup.destroyEach()
    GroundGroup.destroyEach()
    buildingGroup.destroyEach()
    FlygroundGroup.destroyEach()
    score = 0
    Health = 3
    jumpState = 1
    speedState = 1
    Life1.destroy();

    Life2.destroy();
   
    Life3.destroy();
 });




  
    }
  
  
  
  
  
  }

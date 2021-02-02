var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles=[];
var plinkos = [];
var divisions=[];

var particle;
var gameState="start";

var divisionHeight=300;
var score =0;
var turn  =0;

function setup() {
  createCanvas(720, 740);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height+5,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 25; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,55));
  }

  for (var j =45; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,155));
  }

    for (var j =25; j <=width; j=j+50)  {  
      plinkos.push(new Plinko(j,255));
  }

    for (var j = 45; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,355));
  }
    
}

function draw() {
  background(0);
  Engine.update(engine);
  
  textSize(20)
  text("turn:"+turn,20,20)
  text("Score : "+score,20,40);
  
  textSize(20)
  text(" 200 ", 20,  470);
  text(" 500 ", 100, 470);
  text(" 400 ", 180, 470);
  text(" 500 ", 260, 470);
  text(" 400 ", 340, 470);
  text(" 500 ", 420, 470);
  text(" 100 ", 500, 470);
  text(" 200 ", 580, 470);
  text(" 300 ", 660, 470);
  text(" 200 ", 740, 470);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();    
   }
 
  for (var j = 0; j < particles.length; j++) { 
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {   
     divisions[k].display();
   }

   //score
   if(particle!=null){
    particle.display()

    if(particle.body.position.y>700){

      if(particle.body.position.x>0 && particle.body.position.x<80){
          score=score+200;
          particle=null;
          if(turn>=5){gameState="end"}}

      else if(particle.body.position.x>80 && particle.body.position.x<160){
          score=score+500;
          particle=null;
          if(turn>=5){gameState="end"}}

      else if(particle.body.position.x>160 && particle.body.position.x<240){
          score=score+400;
          particle=null;
          if(turn>=5){gameState="end"} }

        else if(particle.body.position.x>240 && particle.body.position.x<320){
          score=score+500;
          particle=null;
          if(turn>=5){gameState="end"} }

        else if(particle.body.position.x>320 && particle.body.position.x<400){
          score=score+400;
          particle=null;
          if(turn>=5){gameState="end"} }

        else if(particle.body.position.x>400 && particle.body.position.x<480){
          score=score+500;
          particle=null;
          if(turn>=5){gameState="end"}}

        else if(particle.body.position.x>480 && particle.body.position.x<560){
          score=score+100;
          particle=null;
          if(turn>=5){gameState="end"}}

        else if(particle.body.position.x>550 && particle.body.position.x<640){
          score=score+200;
          particle=null;
          if(turn>=5){gameState="end"}} 

        else if(particle.body.position.x>640 && particle.body.position.x<720){
          score=score+200;
          particle=null;
          if(turn>=5){gameState="end"}}
      }
  } 

  


  if ( gameState =="end") { 
    fill("red")
    text("GameOver", 300, 300); 
  }
   

}

function mousePressed(){
  if(gameState!=="end"){
      turn++;
     particles.push(new Particle(mouseX, 10, 7, 7)); 
  }   
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var world,engine;
var string
var support,bob

function setup(){
engine = Engine.create();
world = engine.world;

support=new Support(200,100,100,20)
World.add(world,support)
bob=new Bob(300,200,20,20)
World.add(world,bob)
string=new Constraint1(bob.body,support.body)
World.add(world,string);

}
function draw(){
  Engine.update(engine);
  background(255);
  support.display();
  bob.display();
  string.display();
  if(keyCode===32){
     bob.body.position.y = mouseY; bob.body.position.x = mouseX;
     } else if (keyCode === ENTER){
        bob.body.position.x = 200; 
      }
    }
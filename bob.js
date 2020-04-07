class Bob{
    constructor(x,y,radius){
      var options={
        'density':1.0,
       'restitution':1.0
      }
      this.body=Bodies.circle(x,y,radius,options)
      this.radius=radius
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER)
        fill("green")
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}
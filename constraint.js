class Constraint1{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
        this.body=Constraint.create(options);
    }
    display(){
        var pos=this.body.bodyA.position
        var pos2=this.body.bodyB.position
        strokeWeight(5)
        line(pos.x,pos.y,pos2.x,pos2.y);
    }
}
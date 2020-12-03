class Strings{
    constructor(body1,body2,xoffset){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.04
        }
        this.xoffset=xoffset;
        this.strings=Constrained.create(options);
        World.add(world,this.strings);
    }
    display(){
         var pointA=this.strings.bodyA.position;
         var pointB=this.strings.bodyB.position;
         line(pointA.x+this.xoffset,pointA.y,pointB.x,pointB.y);
    }
}
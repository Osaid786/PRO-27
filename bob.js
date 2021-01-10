class Bob{
    constructor(x,y,radius)
    {
        var options={
           'isStatic':true,
           'friction' : 0.1,
           'density': 0.3
         }

    this.body=Bodies.circle(x,y,60,options)
    this.radius=100
    World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
         

        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        strokeWeight(20)
        stroke("green")
        fill("violet")
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}
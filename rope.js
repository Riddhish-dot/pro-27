class Rope {
    constructor(bodyA,bodyB){
    //this.offsetX = offsetX
    //this.offsetY = offsetY
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        length:20
       // pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.rope = Constraint.create(options)
    World.add(world,this.rope)
    }
    display(){
    strokeWeight(3)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}
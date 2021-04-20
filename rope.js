class Rope{
    constructor(body1, body2, offsetX, offsetY){
        
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY},
            length: 300

        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        var lineA = pointA.x
        var lineB = pointB.y + this.offsetY
        var lineC = pointA.y
        var lineD = pointB.x + this.offsetX
        line(lineA, lineC, lineD, lineB);
    }
    
}
class Box{
    constructor(x, y, colour) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        //this.image = loadImage("sprites/base.png");
        this.colour = colour;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(this.colour);
        rect(0,0,30,40)
        pop();
      }
}
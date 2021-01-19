class Hammer{
    constructor(x,y){
        var h = {
            isStatic:false,
            restitution:0.5,
            density:2,
            friction:5
        }
        this.body = Bodies.rectangle(x,y,50,50,h)
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.angle;
        pos.x = mouseX
        pos.y = mouseY

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        stroke("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
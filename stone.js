class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.7,
            density:4,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("grey");
        stroke("grey");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
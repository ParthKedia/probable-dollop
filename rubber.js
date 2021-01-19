class Rubber{
    constructor(x,y,width,height){
        var R = {
            isStatic:false,
            restitution:0.3,
            density:1,
            friction:5
        }
        this.body = Bodies.rectangle(x,y,50,50,h)
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
        
    }
    display(){
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


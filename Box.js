class Box {
    constructor(x,y,width,height) {
        var box_options = {
            restitution : 0.8
        }

        this.body= Bodies.rectangle(x,y,width,height,box_options);
        this.box_w=width;
        this.box_h=height;

        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        // push and pop
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("orange");
        rectMode(CENTER);
        rect(0,0,this.box_w,this.box_h);
        pop();
    }
}
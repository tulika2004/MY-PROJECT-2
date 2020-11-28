class  bottle {
 constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.4,
        'density':1.0,
       // 'isStatic':true

    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("Images/bottle.png")
    World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()    
    }
    }
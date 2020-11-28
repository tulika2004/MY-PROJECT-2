class platform {
    constructor(x, y, width, height) {
        var options = {
            
            'friction':0.4,
            'density':1.0,
            'isStatic':true
    
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Images/barrel.png")
        World.add(world,this.body);
        }
        display(){
           imageMode(CENTER);
           image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
               
        }
         
}
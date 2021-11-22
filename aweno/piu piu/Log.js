class Log{
    constructor(x,y,width,height){
        var groundOptions={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
            
          }
          this.body = Bodies.rectangle(x,y,width,height,groundOptions);
          this.width = width;
          this.height = height;
    World.add(world,this.body);
    
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
        push();
         translate(pos.x, pos.y);
          rotate(this.body.angle);
          fill("red");
          stroke("red");
        rectMode(CENTER);
    
    rect(0,0,this.width,this.height);
    pop();
    }
    }
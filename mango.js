class mango {
    constructor(x,y,diameter) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.d=diameter;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(this.x,this.y,this.d,options);
      this.image=loadImage("mango.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 50,50);
      
    }
  };

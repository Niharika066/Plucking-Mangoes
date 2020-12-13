class Tree {
    constructor(x,y,width,height) {
      var options = {
          
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
     this.treeImg=loadImage("tree.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
    image(this.treeImg,pos.x,pos.y,300,500)
    }
  };

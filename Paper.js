class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':false
      }
      this.x=x;
      this.y=y;
      this.r=r;

      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
  
      this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill('red');
      imageMode(CENTER)
      image(this.image, 0, 0,this.r, this.r);
      pop();
    }
  };
  
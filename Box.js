class Box {
  constructor (x,y,width,height) {
      var options = {
          restitution:0.4,
          friction:1,
          //isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.visiblity =255;
      World.add(world, this.body);
  }

display() {
  tint(255,this.Visiblity);
  if (this.body.speed>3) {
    World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
  }
  else {
    tint(50,this.visiblity)

  var pos = this.body.position;
  var angle = this.body.angle;
  push();
      translate(pos.x, pos.y);
      // rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height)
      pop ();
  }

}


}
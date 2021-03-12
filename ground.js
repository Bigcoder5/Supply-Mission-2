class Ground{
    
   constructor(x,y,width){

    var ground_options ={
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,20,ground_options);
    this.width= width;
    this.height = 20;
    World.add(world,this.body);


   }

   display(){
       var pos = this.body.position;
       fill("yellow");
       rect(pos.x,pos.y,this.width,20);

}


    
}
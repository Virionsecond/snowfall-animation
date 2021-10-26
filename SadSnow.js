class SadSnow{

constructor(x,y){

this.body = Bodies.circle(x,y,15)
this.image = loadImage("snow4.webp")

World.add(world,this.body)

}

display(){

image (this.image,this.body.position.x,this.body.position.y,30,30)



}



}
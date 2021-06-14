class bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8
			
			}
		this.body = bodies.circle(x,y,25,options)
		World.add(world, this.body);

	}
	display()
	{
			
			
			push()
		elipseMode(RADIUS)
			rectMode(CENTER)
			fill(254,0,255)
			ellipse(htis.body.position.x,this.body.position.y,25,25);
			pop();
			
	}

}


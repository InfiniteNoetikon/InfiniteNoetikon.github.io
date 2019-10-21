

//c.beginPath();
//c.arc(300, 300, 30, 0,Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();
/*
for (i = 0; i<400; i++){
	x = Math.random() * window.innerWidth;
	y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0,Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();
}

y = Math.random() * innerWidth;
x = Math.random() * innerHeight;
dx = (Math.random() - .5) * 10;
dy = (Math.random() - .5) * 10;
radius = 30; 
*/


var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

c = canvas.getContext('2d');
var cArray = [];

window.addEventListener("resize", function() { 
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight; 
	init();
});


var rMax = 40, colorPalette = ['#2b3a42', '#3f5866', '#bdd3de', '#f0f0dF', '#ff8f00'];

var mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener("mousemove", function(e){
	mouse.x = e.x;
	mouse.y = e.y;
})

function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.rMin = radius;
	this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
	
	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}
	
	this.update = function(){
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}
		
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy;
		}
		
		this.x += this.dx;
		this.y += this.dy;
		
		//grow circles
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 
			&& mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.radius < rMax){
			this.radius++;
		}
		else if (this.radius > this.rMin){
			this.radius--;
		}		
		
		this.draw();
	}
}

function init(){
	cArray = [];
	
	for (i=0; i < innerWidth/2; i++){
		radius = Math.random() * 3 + 1; 
		x = Math.random() * (innerWidth - radius * 2) + radius;
		y = Math.random() * (innerHeight - radius * 2) + radius;
		dx = (Math.random() - .5);
		dy = (Math.random() - .5);
			
		cArray.push(new Circle(x,y,dx,dy,radius));
	}
}


function moveCircles(){
	requestAnimationFrame(moveCircles);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
	
	for (i = 0; i < cArray.length; i++){
		cArray[i].update();
	}
}

init();
moveCircles();
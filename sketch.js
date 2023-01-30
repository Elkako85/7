let bugs = []; // array of Jitter objects
let count = 100;
function setup() {
  createCanvas(710, 400);
  // Create objects
	background(120, 20, 90);
  for (let i = 0; i < 100; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  
  for (let i = 0; i < count; i++) {
    bugs[i].move();
    bugs[i].display();
		bugs[i].edges();
  }
	
}
function mouseClicked() {
  count += 1;
}
// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 70*noise(this.x);
    this.speed = noise(this.x, this.y);
  }

  move() {
    this.x += 3*random(-1,1)*noise(this.x)
    this.y += 7*random(-1,1)*noise(this.y);
  }

  display() {
		noFill();
		strokeWeight(1);
		stroke(50, 1, 1, 50*noise(this.x + this.y));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
	
	edges() {
	if(this.x - this.diameter/2 > width){
		this.x = - this.diameter/2;
	}
	if(this.x  + this.diameter/2 < 0){
		this.x = width + this.diameter/2;
	}
	if(this.y - this.diameter/2 > height){
		this.y = - this.diameter/2;
	}
	if(this.y + this.diameter/2 < 0){
		this.y = height + this.diameter/2;
	}
	
	
	}
}

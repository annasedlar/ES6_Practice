class Triangle{
	constructor(height, length){
	  this.height = height;
	  this.length = length;
	 // this.perimeter = height+length+Math.sqrt((height*height)+(length*length));
	}
	 // get area() {
	 //   var area = (0.5*this.height * this.width);
  //     console.log(area)
  //   }
}

class Equilateral extends Triangle{
	constructor(height){
		super(height, height);
		this.perimeter = (3*height);
    function sayName(){
		  console.log("I'm Equilateral - my sides are all " + this.height +" units");
		}
	}
}

var equi = new Equilateral(5);
var obtuse = new Triangle(4, 1);
console.log(obtuse.height);
console.log(equi.height);


class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '. My width is ' + this.width + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
    //super() // returns undefined when sayName is called
    super(length, length) // returns undefined as this.width when sayName is called
    // this.height = length;
    // this.width = length;
  }
}

var square = new Square(10);
console.log(square);
// square.width = 12;
square.sayName();
// console.log(square);
// square.getArea()

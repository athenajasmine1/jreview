
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    getArea() {
        return this.width * this.height;
    }
}


class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Pass the same value for width and height
    }

    // Method to calculate the perimeter of the square
    getPerimeter() {
        return 4 * this.width; 
    }
}


const rect = new Rectangle(10, 20);
console.log('Rectangle area: ' + rect.getArea());

const square = new Square(25);
console.log('Square perimeter: ' + square.getPerimeter());
console.log('Square area: ' + square.getArea());



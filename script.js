// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class inheriting from Rectangle
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Set both width and height to side
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// ✅ Attach to window so Cypress can access them
window.Rectangle = Rectangle;
window.Square = Square;

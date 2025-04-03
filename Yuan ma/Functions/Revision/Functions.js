// Rewrite this function using an arrow function:
//
// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => a + b;
console.log(add(4, 5));

console.log(typeof spell);

var spell = function () {
  return "Abracadabra!";
};

function spell() {
  return "Hocus Pocus!";
}

console.log(spell());

// Write an arrow function named multiply that takes two parameters, a and b, and returns their product.

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 5));

//Create an arrow function named greet that does not take any parameters and returns the string "Hello, World!".

const greet = () => "Hello world!";
console.log(greet());

//Write an arrow function called createRectangle that takes two parameters: width and height. The function should return an object with properties width and height.

const createRectangle = (width, height) => ({ width, height });

console.log(createRectangle(2, 3));

//Write an arrow function named sayGoodbye that takes a name parameter and returns "Goodbye, [name]!". If no name is provided, the function should default to "Goodbye, Stranger!".
const sayGoodbye = (name = "Stranger") => `Goodbye, ${name}!`;
console.log(sayGoodbye());
console.log(sayGoodbye("Jenelle"));

//Write an arrow function called calculateRectangleArea that accepts width and height as parameters, calculates the area, and returns a message like: "The area of the rectangle is [area]".
//Modify your function so that it handles cases where width or height is negative or zero, returning an error message instead.

// const calculateRectangleArea = (width, height) => {
//   return `The area of the rectangle is ${width * height}`;
// };
// console.log(calculateRectangleArea(2, 5));

const calculateRectangleArea = (width, height) => {
  if (height <= 0 || width <= 0) {
    return "Width and Height must be postive numbers";
  } else if (typeof height !== "number" || typeof width !== "number") {
    return "Invalid input! Please enter numbers only.";
  }
  return `The area of the Rectangle is ${width * height}`;
};

console.log(calculateRectangleArea(2, -5));
console.log(calculateRectangleArea(2, 0));
console.log(calculateRectangleArea(-7, -8));
console.log(calculateRectangleArea(7, "a"));

//Write an arrow function called calculateDiscount that takes two parameters: price and discount. The function should return the final price after applying the discount.
//Modify the function so that instead of a fixed discount amount, it applies a percentage discount.
//Modify the function so it returns both the final price and the discount amount as an object.

const calculateDiscount = (price, discount) => {
  let discountAmount = (discount / 100) * price;
  let finalPrice = price - discountAmount;
  let originalPrice = price;
  return { originalPrice, finalPrice, discountAmount };
};
console.log(calculateDiscount(350, 10));

//Write a function outer that takes a number and returns an inner arrow function that adds that number to another number. The inner function should accept a number and return the sum.
//Modify the function so that instead of addition, it allows different operations (e.g., "add", "multiply", "subtract") using a third parameter.

// const outer = (num1) => {
//   const inner = (num2) => num1 + num2;
//   return inner(5);
// };
// console.log(outer(5));

// const outer = (num1) => {
//   return (num2) => num1 + num2;
// };
// const add5 = outer(5);
// console.log(add5(10));

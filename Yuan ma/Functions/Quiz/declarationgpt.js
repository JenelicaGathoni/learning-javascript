//Rewrite the function below as a function declaration, function expression, and arrow function:
// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("Alice"));

// function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Jenelle"));
//function expression
const greet1 = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet1("Jenelica"));
//arrrow function
const greet2 = (name) => {
  return `Hello, ${name}`;
};
console.log(greet2("Enelica"));
// Fix the error in this code:

// console.log(shout("Hey!"));

// const shout = (message) => {
//   return message.toUpperCase();
// };
const shout = (message) => {
  return message.toUpperCase();
};
console.log(shout("Hey!"));

//Write an arrow function that takes two numbers and returns their product.
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4));

// Convert this function into an arrow function in the shortest way possible:
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(5));
const isEvenA = (num) => num % 2 === 0;
console.log(isEvenA(5));

//Challenge: Even Sum Finder
// Write a function sumEvenNumbers that takes an array of numbers.
// It should use isEvenA (your function) to filter out even numbers.
//Then, it should return the sum of those even numbers.

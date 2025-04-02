const hello = function (name, command) {
  console.log("Hello", name, command);
};
hello("Jenel", "come here!");

//Write a function called triple that takes a number and returns three times its value.
const triple = function (x) {
  return x * 3;
};
console.log(triple(20));

//Create a function greet that takes a person's name as a parameter and prints "Hello, [name]!".
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};
greet("Amelia");

//Define a function randomNumber that prints a random number between 1 and 100 when called.
const randomNumber = function () {
  return Math.floor(Math.random() * 100 + 1);
};
console.log(randomNumber());

//Write a function add that takes two numbers and returns their sum.

const sum = function (x, y) {
  return x + y;
};
console.log(sum(4, 5));

//Create a function max that takes two numbers and returns the larger one.
const max = function (x, y) {
  if (x > y) {
    return x;
  } else return y;
};
console.log(max(9, 4));

//Write a function isEven that takes a number and returns true if it's even and false if it's odd.
const isEven = function (x) {
  return x % 2 === 0;
};
console.log(isEven(45));

//Define a function calculateArea that takes the width and height of a rectangle and returns its area.
const calculateArea = function (width, height) {
  return width * height;
};
console.log(calculateArea(34, 56));

//Write a function convertToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
const convertToFahrenheit = function (temperature) {
  return (temperature * 9) / 5 + 32;
};
console.log(convertToFahrenheit(32));

//Create a function isDivisible that takes two numbers and returns true if the first is divisible by the second.
const isDivisibles = function (w, r) {
  return w % r === 0;
};
console.log(isDivisibles(45, 2));

// Write a function passwordCheck that takes a password string and prints "Access granted" if the password is "secret123", otherwise prints "Access denied"

const passwordCheck = function (string) {
  if (string === "secret123") {
    console.log("Access Granted");
  } else console.log("Access denied");
};
passwordCheck("Maize");

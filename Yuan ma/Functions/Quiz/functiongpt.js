//Write a function double that takes a number and returns twice that number.

const double = function (x) {
  return x * 2;
};
console.log(double(20));

//Write a function greet that takes a name and prints "Hello, [name]!".
const greet = function (name) {
  console.log("Hello," + name);
};
greet("Jenelle");

//Write a function add that takes two numbers and returns their sum.
const add = function (a, b) {
  return a + b;
};
console.log(add(4, 5));

//Write a function subtract that takes two numbers and returns the difference.
const susbtract = function (a, b) {
  if (a > b) {
    return a - b;
  } else return b - a;
};
console.log(susbtract(4, 5));
// the above function is wrong as it always returns a number:

// corrected function
const minus = function (a, b) {
  return a - b;
};
console.log(minus(4, 5));
// Write a function isEven that returns true if a number is even, otherwise false.
const isEven = function (x) {
  if (x % 2 == 0) {
    return true;
  } else return false;
};
// the above function can be made even shorter
// x % 2 == 0 alreaady evaluates to true or false

const isEvenShort = function (x) {
  return x % 2 == 0;
};
console.log(isEven(10));
console.log(isEvenShort(10));
//Write a function calculateArea that takes width and height and returns the area of a rectangle.
const CalculateArea = function (w, h) {
  return w * h;
};
console.log(CalculateArea(4, 5));
//Write a function isLeapYear that returns true if a year is a leap year, otherwise false.
const isLeapYear = function (x) {
  if (x % 4 == 0) {
    return true;
  } else return false;
};
console.log(isLeapYear(2016));
// the above  function is correct but the logic is wrong:
// Leap years are not just divisible by 4
// they must be divisible by 4 but not 100, unless they are also divisible by 400.
const isLeapYearT = function (year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};
console.log(isLeapYearT(2020));

//Write a function multiply that takes two numbers and returns the product.
const multiply = function (s, f) {
  return s * f;
};
console.log(multiply(4, 5));

//Write a function max that returns the larger of two numbers.

const max = function (c, v) {
  if (c > v) {
    return c;
  } else return v;
};
console.log(max(34, 67));

// Write a function factorial that takes a number and returns its factorial (e.g., factorial(5) → 5 * 4 * 3 * 2 * 1 = 120).
const factorial = function (x) {
  let result = 1;
  for (let i = 1; i < x; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(5));

//Write a function power(base, exponent) that calculates
const power = function (base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 8));

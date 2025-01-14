/* function nameOfFunction(parameters){
    javascript statements that define the function}
            */
function square(number) {
  return number * number;
}
console.log(square(20));
/* When you pass an object as a parameter, if the function changes the objects properties, that change is visible outside the function*/
function myFunc(theObject) {
  theObject.make = "Toyota";
}
const myCar = {
  make: "Honda",
  model: "Accord",
  year: "1998",
};
console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);
// Function Expressions
//Can be anonymous
//convenient when passing a function as an argument to another function
const square1 = function (number) {
  return number * number;
};
console.log(square1(25));

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
const cube = function (n) {
  return n * n * n;
};
const digits = [0, 1, 2, 5, 10];
console.log(map(cube, digits));
// functions can call  themselves(Recursion)
function countdown(number) {
  console.log(number);
  if (number > 1) {
    countdown(number - 1);
  }
}
countdown(5);
//Function hoisting
// Only works with function variables not function expressions
console.log(cube1(5));
function cube1(n) {
  return n * n * n;
}

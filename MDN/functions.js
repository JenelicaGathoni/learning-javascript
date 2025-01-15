/* function nameOfFunction(parameters){
    javascript statements that define the function}
            */
function square(number) {
  return number * number;
}
console.log(square(20));
/* When you pass an object as a parameter, 
if the function changes the objects properties, 
that change is visible outside the function*/
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
//convenient when passing a function as an argument to another
// function
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
function walkTree(node) {
  if (node === null) {
    return;
  }
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes.length[i]);
  }
}
//Function hoisting
// Only works with function variables not function expressions
console.log(cube1(5));
function cube1(n) {
  return n * n * n;
}
//variables defined inside a function cannot be accessed from anywhere outside the function.
// a function defined inside another function can also access all variables defined in its parent function and any other variables the parent function has access to

//Nested functions and closures
// A closure is an expression that can have free variables
//  together with an environmet that binds those variables
//If an enclosed funtion defines a variable with the same name as a variable in the outer scope, then there is no way to refer to the variable in the outer scope again.
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(addSquares(4, 5));

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fnInside = outside(3);
console.log(fnInside(5));

const pet = function (name) {
  const getName = function () {
    return name;
  };
  return getName;
};
const myPet = pet("Vivie");
console.log(myPet());
//Multiply nested functions
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1);
//Function parameters
// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));
// Rest Parameters
// allows a function to accept an indefinite number of arguments as an arrray providing a way to represent variadic funtions
// a funtion can only have one rest parameter
// the rest parameter must be the last parameter in the function definition
// the rest parameter cannot have a default value
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(5, 6, 7));

// This Keyword
//Refers to the  context where a piece of code such as a function's body is supposed to run
function sayHi() {
  // this in this case refers to the global environment
  console.log(this);
}
// inside the funtion this means the student object
sayHi();
const student = {
  name: "Jenelle",
  sayName: function () {
    console.log(this.name);
  },
};
student.sayName();

// In a class or constructor function
class Robot {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const robot1 = new Robot("Cayyene");
robot1.sayHello();

// Arrow functions/ fat arrow
// An arrow function expression is a compact alternative to a
//  traditional function expression with some semantic differences
//  and deliberate limitaitions in usage

// theu don't have their own bindings to this arguments or super and should not be used as methods
// they cannot be used as constructors (callin them with new throws a typeError)
// They cannot use yield within their body and cannot be created as generator functions

// Destructuring traditional functional expressions to form an arrow function
(function (a) {
  return a + 100;
});
// 1. Remove the word function and place arrow btwn argument and opening body brace
(a) => {
  return a + 100;
};
// 2.Remove the body braces and word return
// the braces can only be removed if the function directly returns an expression if the body has statements the braces are required and so is the return Keyword
(a) => a + 100;

// 3. Remove the parameter parantheses
// The parathesis  can only be removed if the function has a single simple parameter. the paranthesis remain if it has multiple parameters, no parameters or default, destructured or rest parameters
(a) => a + 100;

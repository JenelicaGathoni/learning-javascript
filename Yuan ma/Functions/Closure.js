/*A closure is a programming concept where a function remembers the variables from the place where it was created,
 even after that place is gone.
*/
/*
  closures are powerful because they:
    Help you preserve state across function calls without using global variables.
    Are the foundation for data privacy (like private variables).
    Are used in callbacks, event handlers, and functional programming tricks.

*/

function outer() {
  let message = "hello from the outer function";
  function inner() {
    console.log(message);
  }
  return inner;
}
const greet = outer();
greet();

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//Write a function that creates a counter.
//  Every time the returned function is called, it should increment and return a count.
//  Make sure the count value is not accessible directly from outside.
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let countOne = createCounter();
console.log(countOne());
console.log(countOne());
console.log(countOne());
console.log(countOne());

//Implement a function filterByProperty
//  that takes an array of objects and a callback function.
// Return only the objects for which the callback returns true.

function filterByProperty(array, callback) {
  if (array.callback) {
    return array;
  }
}

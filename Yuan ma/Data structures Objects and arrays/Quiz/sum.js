//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
function range(start, end, step) {
  for (i = start; i <= end; i += step) {
    console.log(i);
  }
}
range(1, 10, 2);
//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function addStuff(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(addStuff([1, 2, 3, 4, 5]));

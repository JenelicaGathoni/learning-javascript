/*
    reduce() takes a whole array and squashes it down into one single value
 — like a total, a summary, or a combined result.
  */
/**
 * Reduce is like a blender:
 * You give it a bunch of ingredients
 * It blends them to one
 * and give you the final blended stuff as a single thing
 */
/*
    the explicit intitial value is used to tell Javascript what to start with???
  */
let payments = [20, 30, 50, 200];
let total = payments.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);
console.log(total);

let words = ["Javascript", "is", "Crazy!"];
let sentence = words.reduce(function (accumulator, current) {
  return accumulator + " " + current;
}, " ");
console.log(sentence);

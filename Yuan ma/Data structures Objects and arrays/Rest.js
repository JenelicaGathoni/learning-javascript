function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
let list = [34, 56, 75, 45, 4, 34, 67, 89, 345, 443, 664, 34];
console.log(max(...list));
// works also for square brackets
let words = [" You", "will", "never"];
console.log([...words, "understand", "fully"]);
// works also for curly braces
let coordinates = { x: 10, y: 0 };
console.log({ ...coordinates, y: 5, z: 1 });

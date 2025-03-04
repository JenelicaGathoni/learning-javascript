// toUpperCase
let doh = "doh";
console.log(doh.toUpperCase());
// toLowerCase
console.log(doh.toLowerCase());
//push- adds values to the end of the array
let numbers = [1, 3, 4, 5, 6, 6, 8];
numbers.push(20, 50);
numbers.push(56);
console.log(numbers);
// pop _ removes the last value in the array and returns it
console.log(numbers.pop());
console.log(numbers);
//unshift remove the front item from the queue
let toDoList = [];
function remember(task) {
  toDoList.push(task);
}
function getTask() {
  return toDoList.shift();
}
function rememberUrgently(task) {
  toDoList.unshift(task);
}

remember("groceries");
remember("wine");

getTask();
rememberUrgently("groceries");
console.log(toDoList);
// to search for a specific value, arrays provide an indexOf method.
// the method returns the index at which the requested value was found or -1 if it wasn't found.
let list = [1, 2, 3, 4, 5, 6, 2, 8];
console.log(list.indexOf(2));
console.log(list.indexOf(12));
// To search from the end instedad of the start there's a similar method called lastIndexOf:

console.log(list.lastIndexOf(2));
// the slice method takes start and end indices and returns an array that has only the elements between them.
// the start index is inclusive and the last index is exclusive
console.log(list.slice(2, 4));
// when the start index is not given, slice will take all of the elements after the start  index
console.log(list.slice(4));
// You can also omit the start index to copy the entire array
console.log(list.slice());

// The concat method can be used to append arrays together to create a new array.
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(list, 2));
// if you add concat an argument that is not an array, that value will be addec to the new array as if it were a one element array.

// STRING METHODS
let names = "Jeneliica Macharia";
console.log(names.slice(4, 12));
console.log(names.indexOf("a"));

// One difference is that a string's indexOf can search for a string containing more than one character, whereas the corresponding array method can only look for a single element.
console.log(names.indexOf("ii"));

// the trim method removes whitespace from the start and end of a string:
let naming = "  Jenelica";
console.log(naming);
console.log(naming.trim());
// The padStart takes the desired the lenngth and padding character as arguments
console.log(names.padStart(20, "0"));
// You can split a string on every occurence of another string with split and join it again with join:
let sentence = "My name is Jenelica Gathoni Macharia";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(" "));
// A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together:
console.log("Mako".repeat(5));

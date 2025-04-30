let myList = [1, 23, 34, 45];
console.log(myList[4]);
console.log(myList[3]);
console.log(myList[4 - 2]);
let myFavoriteFoods = ["Spaghetti", "Macaroni", "Noodles", "Nyamachoma"];
console.log(myFavoriteFoods[0]);
console.log(myFavoriteFoods.length);
//The two main ways to access properties in JavaScript are with a dot and with square brackets
//When using a dot, the word after the dot is the literal name of the property.
//When using square brackets, the expression between the brackets is evaluated to get the property name.
//the dot notation works only with names that look like valid binding
//names—starting with a letter or underscore, and containing only letters, numbers, and underscores.
//If you want to access a property named 2 or John Doe, you must use square brackets: value[2] or value["John Doe"].

//Using the to uppercase method
let food = "pilau";
console.log(food.toUpperCase());
//Using the to Lowercase method
console.log(food.toLowerCase());
//Using the push and pop methods to manipulaate arrays
let myFavoriteSongs = [
  "missPainkiller",
  "tomorrowMorning",
  "intheCity",
  "cryForYou",
];
console.log(myFavoriteSongs.length);
myFavoriteSongs.push("tightRope");
console.log(myFavoriteSongs);
console.log(myFavoriteSongs.length);
myFavoriteSongs.pop();
console.log(myFavoriteSongs);

//shift and unshift methods

let toDoList = ["maize", "milk", "potatoes"];
//adding a task to the end of the array
function remember(task) {
  toDoList.push(task);
}
//removing the first item from the array
function getTask() {
  return toDoList.shift();
}
//adding a task to the front of the array
function rememberUrgently(task) {
  toDoList.unshift(task);
}
remember("cooking");
console.log(toDoList);
getTask();
console.log(toDoList);
rememberUrgently("cooking");
console.log(toDoList);

//To search for a specific value, arrays provide an indexOf method.
//The method searches through the array from the start to the end
// and returns the index at which the requested value was found—or -1 if it wasn’t found.
let lostDreams = [
  "Money",
  "cars",
  "Luxury",
  "poshBuildings",
  "cars",
  "Expensiveclothes",
  "Luxury",
];
console.log(lostDreams.indexOf("Luxury"));
console.log(lostDreams.indexOf("Pajamas"));
//To search from the end instead of the start, there’s a similar method called lastIndexOf
console.log(lostDreams.lastIndexOf("Luxury"));
//slice takes start and end indices
//  and returns an array that has only the elements between them.
//  The start index is inclusive and the end index is exclusive.
//When the end index is not given, slice will take all of the elements after the start index.
// You can also omit the start index to copy the entire array.
console.log(lostDreams.slice(1, 5));
console.log(lostDreams.slice(3));
console.log(lostDreams.slice());
//The concat method can be used to append arrays together to create a new array,
//similar to what the + operator does for strings.
let longArray = lostDreams.concat(myFavoriteFoods);
console.log(longArray);

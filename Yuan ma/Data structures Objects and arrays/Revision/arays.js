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
  "cryForYoy",
];
console.log(myFavoriteSongs.length);
myFavoriteSongs.push("tightRope");
console.log(myFavoriteSongs);
console.log(myFavoriteSongs.length);
myFavoriteSongs.pop();
console.log(myFavoriteSongs);

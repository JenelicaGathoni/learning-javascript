// The .sort() method is use to arrange a list of items in order
// You use it on arrays

//Sorting a list of names

let textures = ["Aactile", "Aisual", "Abstract", "Anvented", "Aandom"];
textures.sort();
console.log(textures);

//If you used it to sort numbers directly it would turn the digits
// to strings and the result would be wrong

let ages = [50, 3478, 45, 6, 43, 39, 36, 348];
ages.sort();
console.log(ages);

// To sort numbers the right way we use a compare function
ages.sort(function (a, b) {
  return a - b;
});
console.log(ages);

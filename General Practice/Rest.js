// Rest operator takes everything and bundles it together
// A function that takes all the remaining ingredients and uses them to make soup
function makeSoup(...ingredients) {
  console.log(`Soup will have: ${ingredients}`);
}
makeSoup("Carrots", "Peace", "Beef", "Tomatoes", "Onions", "Water");

// Spread operator takes everything in an array and "lays them out"

let ingredients = ["Artichoke", "Peace", "Beef", "Tomatoes", "Onions", "Water"];
makeSoup(...ingredients);

// A function that takes ingredients from a certain recipe and uses them to make a new one combined with other ingredients

let chips = ["Potatoes", "Salt", "Ketchup"];
let chipsMasala = [...chips, "Masala", "corriander"];
console.log(chips);
console.log(chipsMasala);

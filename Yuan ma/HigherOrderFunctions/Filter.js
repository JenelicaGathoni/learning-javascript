/**
 *Filter is like a magnet
 *You give a bunch of things
 *It only picks the things with the specific quality you want(In this case magnetism)
 */
// Using filter method to obtain an array of only the fresh tomatoes in a kitchen
const tomatoes = [
  { Name: "Refu", isFresh: false },
  { Name: "Fupi", isFresh: true },
  { Name: "kubwa", isFresh: false },
  { Name: "ndogo", isFresh: true },
];
const freshTomatoes = tomatoes.filter(function (tomato) {
  return tomato.isFresh;
});
console.log(freshTomatoes);

let ingredients = ["Carrot", "onion", "bone", "rock", "brocolli"];
let edible = ingredients.filter(function (item) {
  return (item !== "bone") & (item !== "rock");
});
console.log(edible);

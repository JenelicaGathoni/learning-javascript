/**
 * Map is like a factory:
 * You give it a bunch of items
 * It performs a transformation
 * It returns the transformed items
 */
const fruits = ["Mango", "Orange", "Banana", "Kiwi"];
const juices = fruits.map(function (fruit) {
  return fruit + " Juice";
});
console.log(juices);
const brands = ["Jordan", "Nike", "Addidas"];
const shoes = brands.map(function (brand) {
  return brand + " shoes";
});
console.log(shoes);

const clothes = ["dress", "hat", "shirt", "underwear"];
const glittery = clothes.map(function (clothe) {
  return "glittery" + " " + clothe;
});
console.log(glittery);

// variables declared with var are function scoped if found within a function while those defined with let and const are block scoped
let x = 10; //global
if (true) {
  let y = 20; // local to block
  var z = 30; // global
}
console.log(z);
// Each scope can look out into the scope around it
// But when multiple variables have the same name- In that case code can only see the innermost one
const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n); //10

// if multiple bindings have the same name, code can only see the innermmost one
//lexical scoping
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickenpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
//this is what a normal function looks like
var drawFlower = function () {
  console.log("I can draw all flower types");
};
drawFlower();
//This is what a declaration function looks like
//Function declarations are not part of the regular top to bottom flow of controls
console.log(drawSquare(5));
function drawSquare(x) {
  return x * x;
}

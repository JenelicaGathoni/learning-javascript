const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
};
hummus(4);
const test = function () {
  console.log("Hello");
};
test();

//Write a function repeat that takes a function and a number, and calls the function that many times.
const repeat = function (Function, Number) {
  for (i = 1; i <= Number; i++) {
    Function();
  }
};
const sayHi = function () {
  console.log("HI");
};
repeat(sayHi, 5);

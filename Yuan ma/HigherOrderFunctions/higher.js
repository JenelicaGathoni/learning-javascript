/*
  A higher order function is a function that can take another function as an input or can return another function as output
 */

// creating a higherOrder function that takes the height of a pole and checks
// if its greater than that of the fence that was originally there
function fenceBuilder(fenceHeight) {
  return function (poleHeight) {
    return poleHeight > fenceHeight;
  };
}
let greaterThanFenceHeight = fenceBuilder(23);
console.log(greaterThanFenceHeight(24));
console.log(greaterThanFenceHeight(12));

// A higher order function that modifies another function
function noisy(f) {
  return function (...ingredients) {
    console.log(`starting with ${ingredients}`);
    let result = f(...ingredients);
    console.log(`finished result: ${result}`);
    return result;
  };
}

noisy(Math.min(3, 2, 1));

//
function makePasta(sauceFunction) {
  return "Boiled pasta with " + sauceFunction();
}
function tomatoSauce() {
  return "tomato sauce";
}
console.log(makePasta(tomatoSauce));

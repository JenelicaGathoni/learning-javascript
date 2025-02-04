// conditional rendering
// we ask users for their name and check whether the value of their input is a number or not
let age = Number(prompt("How old are you"));
// the Number.isNan function returns true only if the Argument it is given is Nan.
if (!Number.isNaN(age)) {
  console.log("You are " + age, " years old");
} else {
  console.log(" Hey! That's not a valid age.");
}
// we create two variables myMoney(for the money you have ) and price(This would the price that a vendor machine would show for a certain good) We check whether your money is enough to make the purchase.
let myMoney = 4000;
let price = Number(prompt("How much does this cost?"));
if (price < myMoney) {
  console.log("You can make the purchase");
} else if (price === myMoney) {
  console.log("Your money is just enough");
} else {
  console.log("YOu don't have enough money.");
}

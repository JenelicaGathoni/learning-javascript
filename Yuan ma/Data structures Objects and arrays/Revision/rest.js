//In JavaScript, rest parameters let a function accept any number of arguments, and it collects them into an array.
/*
    Write a JavaScript function called makePizzaOrder that:
    Takes one required parameter called customerName.
    Uses rest parameters to accept any number of toppings.
    Prints:
    A greeting to the customer.
    A list of toppings they chose (or a message if they chose none).


 */

function makePizzaOrder(customerName, ...toppings) {
  if (toppings.length == 0) {
    console.log(`Hello ${customerName}, you ordered a Pizza!`);
  } else toppings = toppings.join(", ");
  console.log(`Hello ${customerName} your pizza will have ${toppings}`);
}
makePizzaOrder("Jenelle", "Pineapple", "veggie", "Waru");
makePizzaOrder("Jenelle");

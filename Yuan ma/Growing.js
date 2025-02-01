// We want to write a program that prints two numbers:
// the number of cows and chicken on the farm with the words cows and chickens padded after them and zeros padded before both numbers so that they are always three digits long:
function printFarmInventory(cows, chickens) {
  let CowString = String(cows);
  while (CowString.length < 3) {
    CowString = "0" + CowString;
  }
  console.log(`${CowString} cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} chickens`);
}
printFarmInventory(7, 11);
//But what if the farmer keeps a very large no of animals?
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "cows");
  printZeroPaddedWithLabel(chickens, "chickens");
  printZeroPaddedWithLabel(pigs, "pigs");
}
printFarmInventory(7, 11, 3);

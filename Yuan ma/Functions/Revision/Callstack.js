function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
// makeCounter();
// console.log(makeCounter());

// function makeCounter() {
//   let count = 0;
//   count++;
//   console.log(count);
// }

let counter1 = makeCounter();
let counter2 = makeCounter();
counter1();
counter1();
counter2();
counter2();
counter1();

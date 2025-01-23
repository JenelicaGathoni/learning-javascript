// While loops
let growth = 18;
while (growth < 120) {
  console.log(growth);
  growth++;
}
// do while loops
// always executes its body atleast once and it starts testing whether it should stop only after that first execution
/* let yname;
do {
  yname = prompt("whats your name?");
} while (!yname);
console.log("Hello" + yname); */
//for loops
for (let age = 0; age < 18; age++) {
  console.log(age);
}
// Breaking out of a loop
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

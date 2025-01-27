//they express something like 'this input(the parameters) produce this result(the body)'.
const square1 = (x) => {
  return x * x;
};
//when there is only one parameter name you can omit the parantheses around the parameter list
const square2 = (x) => x * x;

//THE CALLSTACk
function greet(who) {
  console.log("Hello" + who);
}
greet("Harry");
console.log("Bye");

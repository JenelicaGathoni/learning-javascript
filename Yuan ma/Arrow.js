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
//In javascript if you pass too many arguments to a function the extra ones are ignored and if you pass too few the missing ones are assigned the value undefined

//If you write an = operator after a parameter, followed by an expression ,the value of that expression will replace the argument when it is  not given.
function roundto(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(roundto(4.5));
console.log(roundto(4.5, 2));

//Recursion is a programming technique where a function calls itself in order to solve a problem.
//You use it when a problem can be broken into smaller subproblems of the same kind — this is called divide and conquer.

/*
  🚧 Recursion Checklist
  ✅ Is there a base case?
  ✅ Does each call move closer to the base case?
  ✅ Are you returning the result of the recursive call (if needed)?
  ✅ Are you avoiding side effects unless intended (like console.log)?
*/

/* 
  ❗️Common Mistakes
  1:Forgetting the base case
  2:Not reducing input
*/

//Let’s write a function that counts down from n to 1.
function countDown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}
countDown(5);

function countDownR(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countDownR(n - 1);
}
countDownR(5);
////Let’s write a function that writes the factorial of a number
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
// this is the recurssive factorial function
function factorialR(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorialR(5));

// Let's write a recurssive function that adds the sum of numbers when it countsdown upto zero
function findSum(n) {
  if (n === 0) return 1;
  return n + findSum(n - 1);
}
console.log(findSum(5));

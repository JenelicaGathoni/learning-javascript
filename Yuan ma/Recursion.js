// Recursion is when a function calls itself
//To calculate a power in math, you multiply the base number by itself the number of times indicated by the exponent (power)
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));

// by starting from the number 1 and repeatedly either by adding 5 or multiplying by 3 an infinite set of numbers can be produced
//how would you write a function that given a number tries to find a sequence of such additions and multiplications that produce that number
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `${history} + 5`) ??
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(27));

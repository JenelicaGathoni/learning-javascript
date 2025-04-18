/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */
/* for (let number = 0; number <= 100; number++) {
  if (number % 3 == 0) {
    console.log("fizz");
  } else if (number % 5 == 0 && number % 3 != 0) {
    console.log("Buzz");
  } else console.log(number);
} */
for (let number = 0; number <= 100; number++) {
  switch (number <= 100) {
    case number % 3 == 0 && number % 5 != 0:
      console.log("fizz");
      break;

    case number % 5 == 0 && number % 3 != 0:
      console.log("Buzz");
      break;

    case number % 5 == 0 && number % 3 == 0:
      console.log("fizzbuzz");
      break;
    default:
      console.log(number);
      break;
  }
}

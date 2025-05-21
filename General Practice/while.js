/* 
    Use while loops when:
        You don't know exactly hoow many times you will repeat
        You want the loop to keep going based on a condition

    When using while loops always ensure that the loop moves toward the condition becoming false to avoid infinite loops
 */
// counting from  1-5

let number = 1;
while (number <= 5) {
  console.log(number);
  number += 1;
}

//Keep playing if you have lives
let lives = 5;
while (lives >= 1) {
  console.log("You are still in the game!");
  lives -= 1;
}
console.log("Game over!");

//write a while loop that prints the numbers from 10 down to 1
let digit = 10;
while (digit >= 1) {
  console.log(digit);
  digit = digit - 1;
}

/* 
    A higher order function is a function that:
    Takes another function as an argument or
    Returns another function as its result.

*/
/*
    Benefits of using higher order functions include:
     Reuse logic without repeating code
     Customize behavior	by Passing in a function to handle the specifics
     Delay execution by returning a function that can be called later
     Keep logic modular and testable
*/
// When deciding whether to use a higher order function ask yourself:
//  Do I need to either customize what this function does, or return a custom behavior to be used later?

//A scenario where you repeat sth too many times
function sendEmailToUser() {
  return `sending [Admin ] ${message}`;
}
function sendEmailToAdmin() {
  return `sending [User] ${message}`;
}
//The above can get too repetitive incase we have more users
function createEmailSender(prefix) {
  return function (msg) {
    return `sending- ${prefix}: ${msg}`;
  };
}
const adminSender = createEmailSender("Admin");
const userSender = createEmailSender("User");
console.log(adminSender("Your account will be deleted permanently!"));

//Scenario B: Running something with custom logic

//This is a function that takes another function as an argument and uses it
function doTwice(fn) {
  fn();
  fn();
}
console.log(doTwice(() => console.log("Hello World!")));

//
function coachPlayer(strategy, opponent) {}

//This is a function that returns another function as its result

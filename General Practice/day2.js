/*
 Challenge001
 Simulate a simple user session tracker that stores the session ID in closure and returns user activity logs tagged with that ID.
 */
function createSessionTracker(sessionId) {
  return function trackActivity(activity) {
    return `[${sessionId}] ${activity}`;
  };
}
const track = createSessionTracker("SESSION-919");
console.log(track("Opened settings"));

/*
Challenge002
Write a function rememberMe(name) that returns another function. 
When you call the returned function, it should return:
"You said your name was [name]."
*/

function rememberMe(name) {
  return function () {
    console.log(`You said your name was ${name}`);
  };
}
let question = rememberMe("Jenel");
question();

/*
Challenge003
Create a function makeCountdown(start) that returns another function.
Each time the returned function is called, it should decrement and return the countdown value.
When it reaches 0, it should say: "Liftoff!"

*/

function makeCountdown(start) {
  let value = start;
  return function () {
    if (value > 0) {
      return value--;
      return value;
    } else return "Liftoff!";
  };
}
let activity = makeCountdown(5);
console.log(activity());
console.log(activity());
console.log(activity());
console.log(activity());
console.log(activity());
console.log(activity());
console.log(activity());

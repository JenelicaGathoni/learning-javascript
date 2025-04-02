//Global vs. Local:

//Create a global variable and a local variable inside a function.
//Try to print both inside and outside the function.
//What happens?

function pickPen(user) {
  if ((user = "teacher")) {
    let pen = "inside";
    var message = "This is a magical pen";

    console.log(pen);
    console.log(message);
  }
  //   console.log(pen);
  //   console.log(message);
}
pickPen();

//Block Scope:

//Create an if block that declares let a = 5; var b = 10;.
//Try printing a and b inside and outside the block.
//What’s the difference?
function abracadabra(age) {
  if (age > 4) {
    let a = 5;
    var b = 10;

    // console.log(a);
    // console.log(b);
  }
  //   console.log(b);
  //   console.log(a);
}
console.log(b);
console.log(a);
abracadabra(12);

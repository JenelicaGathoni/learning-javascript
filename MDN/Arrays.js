// Enables storing a collection of multiple items under the same variable name, and has members for performing common array operations.
//Javascript arrays are resizable and can contain a mix of different data types.
// Javascript syntax requires properties beginning with a digit to be accessed using bracket notation instesd of dot notation.
const fruits = [];
fruits.push("banana ", "orange ", "mango");
console.log(fruits.length);
//when setting a proeryu on a javaScript array and  the property is a valid array index and that index is outside the current bounds of the array the engine will update the array's length property accordingly:
fruits[5] = "mango";
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length);
//Increasing the length property extends the array by adding empty slots without creating any new elements
fruits.length = 10;
console.log(fruits);
console.log(fruits[8]);

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
console.log(day1.events[2]);
console.log(day1.events[10]);
day1.wolf = false;
console.log(day1.wolf);
//properties whose values are not valid variable names must be quoted
let descriptions = {
  work: "went to work",
  "touched tree": "Touched  a tree",
};
console.log(descriptions.work);
console.log(descriptions["touched tree"]);
// when you want to return an object from an arrow function you have to put a set of parantheses arounf the object to make sure that it is an expression
//Reading a property that doesn't exist will give you the value undefined.
// the delete operator removes the nammed property from the object.

let anObject = { left: 1, right: 2 };
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
// The in operator when applied to a sring and an object tells you whether that object has a property with that name
console.log("left" in anObject);
// To find out what properties an object has you can use the Object.keys function.
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// the Object.assign function copies all properties from one object into another
let objectA = { a: 1, b: 2 };
Object.assign(anObject, objectA);
console.log(anObject);

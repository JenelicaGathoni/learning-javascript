const myLife = {
  married: false,
  inLove: false,
  favoriteFood: ["Bhajia", "NyamaChoma", "Noodles"],
  age: 18,
  MemorableYears: [2014, 2019, 2024, 2025],
};
console.log(myLife.married);
console.log(myLife.MemorableYears);
console.log(myLife.inLove);
console.log(myLife.favoriteFood);
console.log(myLife.age);

//Reading a property that doesn’t exist will give you the value undefined.
console.log(myLife.crush);
//It is possible to assign a value to a property expression with the = operator.
//This will replace the property’s value if it already existed or create a new property on the object if it didn’t.
myLife.age = 20;
console.log(myLife.age);
myLife.hobbies = ["Table Tennis ", "Chess", "Movies", "Novels"];
console.log(myLife.hobbies);
// delete is a unary operator that, when applied to an object property, will remove the named property from the object.
delete myLife.age;
console.log(myLife.age);
//The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name.
console.log("favoriteFood" in myLife);
console.log("favoritePerson" in myLife);
console.log("age" in myLife);
//To find out what properties an object has, you can use the Object.keys function.
console.log(
  Object.keys({
    married: false,
    inLove: false,
    favoriteFood: ["Bhajia", "NyamaChoma", "Noodles"],
    age: 18,
    MemorableYears: [2014, 2019, 2024, 2025],
  })
);

//Mutability
/*
    numbers, strings, and Booleans, are all immutable
    it is impossible to change values of those types.
    You can however change the properties of objects causing them to have different values at different times

*/
/*With objects, there is a difference between having two references to the same object
  and having two different objects that contain the same properties.
*/
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 20;
console.log(object1.value);
console.log(object2.value);
console.log(object3.value);

/*
  a const binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change.

  When you compare objects with JavaScript’s == operator,
   it compares by identity: it will produce true only if both objects are precisely the same value.
    Comparing different objects will return false, even if they have identical properties.
*/
const relatives = {
  visitors: 0,
  friends: 0,
};
// This is allowed to change with const objects

relatives.visitors = 1;
console.log(relatives);

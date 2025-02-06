//numbers strings and booleans are immutable
// objects are mutable: You can change their properties causing a single object value to have different content at different times
//with objects there is a difference between having two references to the same object and having two different objects contain the  same properties

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 30;
console.log(object2.value);
console.log(object3.value);
// if you declare objects using const it is still possiblle to change the contents
const score = { visitors: 0, home: 0 };
score.visitors = 1; // this is allowed
//score = { visitors: 1, home: 1 }; this isn't allowed
console.log(score);
// when you compare objects using the == operator, it compares by identity: it will produce true only if both objects are precisely the same value.

const z = 3 + 4;
console.log(z);
// Demonstrating operator precedence
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
console.log(x);
console.log(y);

//Destructuring
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
//unary operators
let f = 3;
++f;
console.log(f);
//logical and operator
let pig = -2;
let goats = 3;
console.log(pig < 0 && goats > 0);
// nullish coalescing (??) operator
// always returns the left hand value unless the left hand value is null
const foo = null ?? "default string";
console.log(foo);
const baz = 0 ?? 10;
console.log(baz);

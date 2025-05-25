const double = (x) => x * 2;
console.log(double(5));

const sayHello = (Name = "Ghost") => `Hello ${Name}`;

console.log(sayHello());

const isEven = (n) => {
  if (n % 2 == 0) {
    console.log("Even");
  } else console.log("Odd");
};
isEven(34);
isEven(55);

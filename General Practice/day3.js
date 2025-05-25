// Anonymous functions
//An anonymous function is a function without a name.
// We use anonymous functions because they:
// short and direct
//the logic lives right where it is used
//Naming the function would only clutter the code
const students = [
  { jina: "alice", age: 12 },
  { jina: "Gathoni", age: 20 },
  { jina: "Miriaa", age: 26 },
];
students.sort(function (a, b) {
  return b.age - a.age;
});
console.log(students);

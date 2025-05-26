// Using filter method to obtain an array of only the fresh tomatoes in a kitchen
const tomatoes = [
  { Name: "Refu", isFresh: false },
  { Name: "Fupi", isFresh: true },
  { Name: "kubwa", isFresh: false },
  { Name: "ndogo", isFresh: true },
];
const freshTomatoes = tomatoes.filter(function (tomato) {
  return tomato.isFresh;
});
console.log(freshTomatoes);

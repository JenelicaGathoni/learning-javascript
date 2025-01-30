//being able to reference a specific instance of a local variable in an enclosing scope;
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1(1));
console.log(wrap2());

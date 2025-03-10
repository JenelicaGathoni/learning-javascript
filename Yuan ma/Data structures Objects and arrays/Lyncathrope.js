let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
addEntry("ate ice cream", false);
console.log(journal);
//if a property name in brace notation isn't followed by a value, its value is taken from the variable with the same name.
addEntry(["work", "touched tree ", "pizza ", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagnia",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

console.log(phi([76, 9, 4, 1]));

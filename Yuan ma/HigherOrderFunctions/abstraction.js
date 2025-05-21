/*
 Abstractions give us the ability to talk about problems at a higher (or more abstract) level,
 without getting sidetracked by uninteresting details.
 */
let total = 0;
let count = 1;
while (count <= 11) {
  total += count;
  count += 1;
}
console.log(total);

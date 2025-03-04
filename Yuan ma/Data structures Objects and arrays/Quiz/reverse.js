const makeNoise = function () {
  console.log("sahdj fjw ddfja ao jf");
};
makeNoise();
const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(15, 10));

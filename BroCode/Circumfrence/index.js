const PI = 3.14;
let circumfrence;
let radius;

document.getElementById("myButton").onclick = function () {
  radius = document.getElementById("myInput").value;
  radius = Number(radius);
  circumfrence = 2 * PI * radius;
  document.getElementById(
    "myAnswer"
  ).textContent = `The circumfrence of the circle is ${circumfrence}`;
};
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
});

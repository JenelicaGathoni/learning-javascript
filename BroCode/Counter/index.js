let count = 0;
document.getElementById("increment").onclick = function () {
  count += 1;
  document.getElementById("myCount").textContent = count;
};
document.getElementById("subtract").onclick = function () {
  count -= 1;
  document.getElementById("myCount").textContent = count;
};

let budget;
let max;
let Food;
let Recreation;
let Rent;
let Electricity;
let Transport;
let Savings;
let Total;

//getting the value of the budget
document.getElementById("formOne").addEventListener("submit", function (event) {
  event.preventDefault();
});

max = Number(max);
document.getElementById("Button").onclick = function () {
  max = document.getElementById("myInput").value;
  max = Number(max);
  Food = Math.random() * max;
  Recreation = Math.random() * max;
  Rent = Math.random() * max;
  Electricity = Math.random() * max;
  Transport = Math.random() * max;

  Food = Math.floor(Food / 5);
  Recreation = Math.floor(Recreation / 5);
  Rent = Math.floor(Rent / 5);
  Electricity = Math.floor(Electricity / 5);
  Transport = Math.floor(Transport / 5);

  Total = Food + Recreation + Rent + Electricity + Transport;
  budget = document.getElementById("myInput").value;
  Savings = budget - Total;

  document.getElementById("p1").textContent = `$${Food}`;
  document.getElementById("p2").textContent = `$${Recreation}`;
  document.getElementById("p3").textContent = `$${Rent}`;
  document.getElementById("p4").textContent = `$${Electricity}`;
  document.getElementById("p5").textContent = `$${Transport}`;
  document.getElementById("savings").textContent = `You get to save ${Savings}`;
};

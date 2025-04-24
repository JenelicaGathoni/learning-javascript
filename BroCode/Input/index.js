let userName;
document.getElementById("myBtn").onclick = function () {
  userName = document.getElementById("myInput").value;
  console.log(userName);
  document.getElementById("myh1").textContent = `Welcome ${userName}`;
};
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
});

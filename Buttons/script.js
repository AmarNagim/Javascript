const greenBtn = document.getElementById("green-btn");
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const body = document.querySelector("body");

greenBtn.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

redBtn.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

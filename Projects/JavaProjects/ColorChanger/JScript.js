let colors = ["green", "red", "blue", "black", "grey", "#f15025", "gold", "orange"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  // return Math.floor(Math.random() * colors.length);
  return Math.random();
}

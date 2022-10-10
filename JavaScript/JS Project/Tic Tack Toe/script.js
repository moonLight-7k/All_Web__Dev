const cells = document.querySelectorAll(".cell");
const statustext = document.querySelector("#restart-text");
const restartBtn = document.querySelector("#restart-btn");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statustext.textContent = `${currentPlayer}'s turn`;
  running = true;
}
function cellClicked() {}
function updateCell() {}
function changePlayer() {}
function checkWinner() {}
function restartGame() {}

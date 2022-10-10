let HelloBtn = document.querySelector("button");
HelloBtn.addEventListener("click", inputMsg);
function inputMsg() {
  let name = prompt('Entre name of student');
  HelloBtn.textContent = 'Roll No. 1: ' + name;
}

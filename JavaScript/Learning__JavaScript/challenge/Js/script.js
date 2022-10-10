// challenge 1: Your Age in Days

function agesInDays() {
  var birthYear = prompt("What is your birth year...?");

  console.log(birthYear);
  var agesInDays = (2018 - birthYear) * 360;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + agesInDays + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat");
   image.scr = "https://i.picsum.photos/id/200/200/300.jpg?hmac=XVCLpc2Ddr652IrKMt3L7jISDD4au5O9ZIr3fwBtxo8";
  div.appendChild(image);
}

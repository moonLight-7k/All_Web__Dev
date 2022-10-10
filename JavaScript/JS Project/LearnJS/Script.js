// let userName;

// document.getElementById("my-btn").onclick = function (){
//   userName = document.getElementById("my-text").value;
//   console.log(userName);
//   document.getElementById('my-label').innerHTML = 'Hello ' + userName + ' !';
// }

// ================ 2ND ===========

/*let age = window.prompt("What is your birth year?");

console.log(typeof age);
age = Number(age);
age = 2022 - age;
console.log(typeof age);

console.log("You are " + age + " years old!");
*/

// ================== 3RD ==================

/*
const PI = 22/7;

let radius;
let circumference;

radius = window.prompt("Entre the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

area = 2 * PI * radius* radius;

console.log("The circumference is:", circumference);
console.log('Area is:', area)*/

// ============== 4TH ===================

// let x = -3.141592653589793;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);
//  x = Math.PI;

// console.log(minimum);
// console.log(x);

// ============= 5TH =============

// document.getElementById("btn").onclick = function(){

//   a = document.getElementById('input-a').value;
//   a = Number(a);

//   b = document.getElementById('input-b').value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2)+ Math.pow(b, 2));

//   document.getElementById('label-c').innerHTML = "Side C: " + c;
// }

// ================== 6TH ==========

// let count = 0;

// document.getElementById("decrease-btn").onclick = function() {
//   count -= 1;
//   document.getElementById("count").innerHTML = count;
// };

// document.getElementById("reset-btn").onclick = function () {
//   count = 0;
//   document.getElementById("count").innerHTML = count;
// };

// document.getElementById("increase-btn").onclick = function () {
//   count += 1;
//   document.getElementById("count").innerHTML = count;
// };

// ================= 7TH ==========

// let x;
// let y;
// let z;

// document.getElementById('roll-btn').onclick = function() {
//   x = Math.floor(Math.random() *6) + 1;
//   y = Math.floor(Math.random() *6) + 1;
//   z = Math.floor(Math.random() *6) + 1;

//   document.getElementById('label-x').innerHTML = x;
//   document.getElementById('label-y').innerHTML = y;
//   document.getElementById('label-z').innerHTML = z;

// }
// =============== 8TH =================

/*let userName = "suhel";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);*/

// =================== 9TH =======================

/*let age = window.prompt("What is your age?");

if (age >= 65) {
  console.log("You are a senior citizen!");
}
 else if (age >= 18) {
  console.log("You are an adult");
}
 else if (age < 0) {
  console.log("You are not born yet!");
}
 else {
  console.log("You are a child");
}*/

// ================ 10TH ==============

// document.getElementById("submit-btn").onclick = function () {
//   const myCheckBox = document.getElementById("check-box");
//   const rupayBtn = document.getElementById("rupay-btn");
//   const visaBtn = document.getElementById("visa-btn");
//   const paypalBtn = document.getElementById("paypal-btn");

//   if (document.getElementById("check-box").checked) {
//     console.log("You are subscribed");
//   }
//    else {
//     console.log("You not are subscribed");
//   }
//   if (rupayBtn.checked) {
//     console.log("You are paying by using  Rupay");
//   }
//    else if (visaBtn.checked) {
//     console.log("You are paying by using  Visa");
//   }
//    else if (paypalBtn.checked) {
//     console.log("You are paying by using  PayPal");
//   }
//   else{
//     console.log("You must select a payment type!")
//   }
// };

//  ================= 11TH =============

// let grade = window.prompt("What is your grade?");

// switch (true) {
//   case grade >= 90:
//     console.log("You did great!");
//     break;
//   case grade >= 80:
//     console.log("You did good!");
//     break;
//   case grade >= 70:
//     console.log("You did okay!");
//     break;
//   case grade >= 50:
//     console.log("You passed!");
//     break;
//     case grade >= 36:
//     console.log("You passed..... barely!");
//     break;
//   case grade < 35:
//     console.log("You FAILED!");
//     break;
//   default:
//     console.log(grade, "is not a letter grade!");
// }

// =============== 12TH ===================

// let x = "3.14";

// if (x === 3.14) {
//   console.log("That is pi");
// }
//  else {
//   console.log("That is NOT pi");
// }

//  ====================== 13TH ====================

// let temp = 15
// let sunny = true;

// if (temp >= 0 && temp <= 30 && sunny) {
//   console.log('The weather is GOOD!')
// }
//  else {
//   console.log('The weather is BAD!')
// }

//  =============== 14TH ===================

// let temp = 15;
// let sunny = true;

// if (!(temp > 0)) {
//   console.log("It's Warm outside");  // ! NOT Statement
// }
// else {
//   console.log("It's Cold outside");
// }
// if(!sunny){
//   console.log("It's sunny outside");
// }
// else{
//   console.log("It's cloudy outside");

// }

// ====================== 15TH ========================

// let userName = "";

// while(userName == "" || userName == null) {
//   userName = window.prompt("Entre your name");

// }

// console.log("Hello", userName)

// =================== 16TH ===================

// let userName = "";

// do {
//   userName = window.prompt("Entre your name");
// }while(userName == "" )
// love
// console.log("Hello", userName)

// =============== 17TH ===================

// for (let i = 1; i <= 30; i += 1) {
//   console.log(i);
// }
// console.log("HAPPY ENDING!");

//  ================ 18TH =================

// let x = 34;
// let symbol = window.prompt("Entre a symbol to use")
// let rows = window.prompt("Entre number of rows");
// let columns = window.prompt("Entre number  of columns");

// for (let i = 1; i <= rows; i += 1) {
//   for (let j = 1; j <= columns; j += 1) {
//     document.getElementById("my-rectangle").innerHTML += symbol;
//   }
//   document.getElementById("my-rectangle").innerHTML += "<br>"
// }

//  ================ 19TH =================

// startProgram();

// function startProgram() {
//   let userName = "Terex";
//   let age = 25;

//   myBirthday(userName, age);
// }

// function myBirthday(userName, age) {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday dear", userName);
//   console.log("Happy birthday to you!");
//   console.log("You are", age, "years oid!");
// }

//  ================ 20TH =================

// let name = "Bro";

// function doSomething() {
//   for (var i = 1; i <= 5; i += 1) {   // var is not a global variable
//     //  console.log(i)
//   }
// }

// doSomething();
// console.log(i);

//  ================ 20TH =================

// Template literals = delimited with (`)
//                                   instead of double or single quotes
//                                   allows embedded variables and expressions

// let userName = "Bro";
// let items = 3;
// let total = 75;

// //console.log("Hello", userName);
// //console.log("You have", items, "items in your cart");
// //console.log("Your total is $", total);

// //console.log(`Hello ${userName}`);
// //console.log(`You have ${items} items in your cart`);
// //console.log(`Your total is $${total}`);

// let text =
// `Hello ${userName}<br>
// You have ${items} items in your cart<br>
// Your total is $${total}<br>`;

// //console.log(text);
// document.getElementById("my-label").innerHTML = text;

//  ================ 21st =================

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("btn").onclick = function (){

//   let guess = document.getElementById("guess-field").value
//   guesses+=1;

//   if(guess == answer){
//     alert(`${answer} is the #. It took you ${guesses} guesses`);
//   }
//   else if(guess < answer){
//     alert("Too small!");
//   }
//   else{
//     alert("Too large!");
//   }
// }

//  ================ 22ND =================
// function toKelvin(temp) {
//   return (temp + 273.15);
// }

// function toFahrenheit(temp) {
//   return (temp * 9 / 5 + 32);
// }

// document.getElementById("submit-btn").onclick = function () {
//   let temp;
//    if (document.getElementById("c-btn").checked) {
//     temp = document.getElementById("text-area").value;
//     temp = Number(temp);
//     temp = toKelvin(temp);

//     document.getElementById("temp-label").innerHTML = temp + "°K";
//   }
//    else if (document.getElementById("f-btn").checked) {
//     temp = document.getElementById("text-area").value;
//     temp = Number(temp);
//     temp = toFahrenheit(temp);

//     document.getElementById("temp-label").innerHTML = temp + "°F";
//   }
//    else {
//     document.getElementById("temp-label").innerHTML = "Select a unit";
//   }
// };

// =================== 23RD =====================

const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm " : "am";

    hours = hours % 12 || 12;

    hours = formatZeros(hours);
    minutes = formatZeros(minutes);
    seconds = formatZeros(seconds);

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }

  function formatZeros(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}

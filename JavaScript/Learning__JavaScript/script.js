console.log("Hello");
//=================== VARIABLES ===============

var b = "suveee";
console.log(b);

var someNumber = 3434;
console.log(someNumber);

//  MANIPULATING DOM WITH JAVASCRIPT

// var age = prompt("What is your age?");

// document.getElementById("head").innerHTML = age;

// NUMBER IN JAVASCRIPT

var num1 = 10;

// Increase num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

// Increment/decrement by any number you want

num1 += 10;
// console.log(num1);

/*Functions
1. Create the function 
2. Call the function
*/

//Create

function fun() {
  console.log("this is a function");
}

// Call
// fun();

function greeting(yourName) {
  var result = "Hello" + " " + yourName;
  console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// Arguments

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

// sumNumbers(10, 10)

// While loops

//  var num = 0;

/* while (num< 10) {
      num += 1;
      console.log(num)
 }
 */

//For loop

for (let num = 0; num <= 20; num++) {
  // console.log(num)
}

// Data types
let yourAge = 18; //number

let yourName = "Alen"; //string

let name = { first: "Jane", last: "Doe" }; //object

let truth = false; //boolean

let groceries = ["apple", "banana", "oranges"]; // array

let random; //  undefined

let nothing = null; //value null

// String in javascript (common method)

let fruits = "banana, apple, orange, pineapple";
let moreFruits = "banana\napple";

console.log(fruits.length);
console.log(fruits.indexOf("nan"));
console.log(fruits.slice(2, 6));
console.log(fruits.replace("ban", "123"));
console.log(fruits.toUpperCase());
console.log(fruits.toLocaleLowerCase());
// console.log(fruits.charAt(2));
// console.log(fruits.split(',')); // split by comma
// console.log(fruits.split(',')); // split by characters

//Array

let fruit = ["banana", "apple", "orange", "pineapple"];

fruit = new Array("banana", "apple", "orange", "pineapple");

// console.log(fruit[3]);

fruit[0] = "Pear";
console.log(fruit);

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// Array common methods

// console.log('to string', fruit.toString());
console.log(fruit.join("-"));
console.log(fruit.pop(), fruit); // pops up an element
console.log(fruit.push("blackberries"), fruit); // put in an element
console.log(fruit[4]);
fruit[fruit.length] = "new fruit"; //same as push but it adds without poping out
console.log(fruit);
fruit.shift(); // removes first element from a list
console.log(fruit);
fruit.unshift("kiwi"); // removes first element from a list
console.log(fruit);

let vegetables = ["tomato", "onion", "spinach"];
let allGroceries = fruit.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 34, 10, 23, 30, 6, 21, 1, 69, 9];
console.log(
  someNumbers.sort(function (a, b) {
    return a - b;
  })
); // sorted in ascending order
console.log(
  someNumbers.sort(function (a, b) {
    return b - a;
  })
); // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

// Object in Javascript

let student = {
  first: "Suhel",
  last: "Khan",
  age: 19,
  height: 155,
  studentInfo: function () {
    return this.first + "\n" + this.last + "\n" + this.age;
  },
};
// console.log(student.first);
// console.log(student.last);
// student.first = "Rafeh";
// console.log(student.first);
student.age--;
console.log(student.age);

console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-34 is my target demographic
// && AND
// || OR

// var age = prompt("What is your age?");

// if (age >= 18 && age <= 34) {
//   status = "target demo";
//   console.log(status);
// } else {
//   status = "not my audience";
//   console.log(status);
// }

// Switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday  --> Weekend
// day 1 --> Monday  --> Weekday
// day 2 --> Tuesday --> Weekday
// day 3 --> Wednesday  --> Weekday
// day 4 --> Thursday  --> Weekday
// day 5 --> Friday --> Weekend
// day 6 --> Saturday --> Weekend

switch (6) {
  case 0:
    text = "weekend";
    break;
  case 5:
    text = 'weekend';
    break;
    case 6:
    text = 'weekend';
    break;
    default:
    text = 'weekday';
    
}
console.log(text);
// console.log("Hello World");

// [SECTION] JS FUNCTIONS
// Performs specific tasks and eliminate repetitive codes

/* 
SYNTAX: function functionName(parameter){//code block}
*/

// console.log("Hello World");

// function sayHello() {
//   console.log("Hello, World!");
// }

// Invocation/Invoke or Function Calling
// sayHello();

function showAlert() {
  alert("Hello, User!");
}

let num1 = 0,
  num2 = 0;
// looping showCalc
while (true) {
  showCalc();
}
function showCalc() {
  let userInput = parseInt(
    prompt(
      "Please select an action: \n[1] Input Numbers \n[2] Add \n[3] Subtract \n[4] Multiply \n[5] Divide \n[6] Reset",
    ),
  );

  switch (userInput) {
    case 1:
      enterNum();
      break;
    case 2:
      sum();
      break;
    case 3:
      difference();
      break;
    case 4:
      product();
      break;
    case 5:
      quotient();
      break;
    case 6:
      reset();
      break;
    default:
      alert("Please select a valid option.");
      break;
  }
}








function enterNum() {
  let inputNum1 = parseInt(prompt("Enter 1st number: "));
  let inputNum2 = parseInt(prompt("Enter 2nd number: "));
  num1 = inputNum1;
  num2 = inputNum2;
}
function sum() {
  if (num1 == 0 & num2 == 0) {
    alert("Please enter valid numbers.");
  } else {
    alert(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
  }
}

function difference() {
  if (num1 == 0 & num2 == 0) {
    alert("Please enter valid numbers.");
  } else {
    alert(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
  }
}

function product() {
  if (num1 == 0 & num2 == 0) {
    alert("Please enter valid numbers.");
  } else {
    alert(`The product of ${num1} and ${num2} is ${num1 * num2}`);
  }
}

function quotient() {
  if (num1 == 0 || num2 == 0) {
    alert("Please enter valid numbers.");
  } else {
    alert(`The quotient of ${num1} and ${num2} is ${num1 / num2}`);
  }
}





function reset() {
  num1 = 0;
  num2 = 0;
}
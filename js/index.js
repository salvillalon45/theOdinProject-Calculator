console.log("Inside index.js");

let displayCurrent = document.querySelector(".display-current");
let displayResults = document.querySelector(".display-results");
let displayNumber = document.createElement("p");
let displayCalculationResult = document.createElement("p");
let currentNum = "";
let displayResultNum = "";
let previousNum = ""
let operator= "";
let debug = 1;
let equalFlag = 0;

function displayCurrentCalculations() {
  displayNumber.textContent = currentNum;
  displayCurrent.appendChild(displayNumber);

  if (equalFlag === 1) {
    let expression = previousNum.toString() + operator.toString() + displayResultNum.toString() + " = " + currentNum.toString();
    console.log("What is result::" + expression);
    // displayCalculationResult.textContent = expression;
    // displayResults.appendChild(displayCalculationResult);
    // document.getElementById('display-results').innerHTML = expression;

    let storedExpression = document.createElement('div');
    storedExpression.textContent += expression;
    displayResults.append(storedExpression);
    displayResults.scrollTop = displayResults.scrollHeight;
    equalFlag = 0;
  }
}

function appendNumber(num) {
  if (num.toString() === "." && currentNum.toString().includes(".")) {
      console.log("It already has a decimal!");
  }
  else {
    currentNum = currentNum.toString() + num.toString();
  }
}

function selectNum(num) {
  debug === 1 && console.log("Inside selectNum()");
  debug === 1 && console.log("The num is::" + num);

  appendNumber(num);
  displayCurrentCalculations();

  debug === 1 && console.log("previousNum:: " + previousNum);
  debug === 1 && console.log("currentNum:: " + currentNum);
}

function selectEqual(equal) {
  equalFlag = 1;
  // The case when the user input = sign before getting all numbers ready
  if (previousNum.length === 0 || currentNum.length === 0) {
    return;
  }

  displayResultNum = currentNum;
  // Overwrite currentNum to the result
  let result = operate();
  currentNum = result;
  displayCurrentCalculations();

  // Clear the numbers for the next calculation
  currentNum = "";
  previousNum = "";
}

function printNums() {
  debug === 1 && console.log("operator:: " + operator);
  debug === 1 && console.log("previousNum:: " + previousNum);
  debug === 1 && console.log("currentNum:: " + currentNum);
}

function selectOperator(newOperator) {
  debug === 1 && console.log("Inside selectOperator()");
  debug === 1 && console.log("The newOperator is::" + newOperator);

  operator = newOperator;
  previousNum = currentNum;
  currentNum = "";

  printNums();
}

function selectUtil(util) {
  debug === 1 & console.log("Inside selectUtil()");

  if (util === "AC") {
    debug === 1 & console.log("Clearing");
    currentNum = "";
    previousNum = "";
    operator = "";
    displayCurrentCalculations();
    printNums();
  }
  else if (util === "DEL") {
    debug === 1 & console.log("Deleting an item");
    currentNum = "";
    displayCurrentCalculations();
    printNums();
  }
}

function add(num1, num2) {
  currentNum = parseFloat(num1) + parseFloat(num2);
  return currentNum;
}

function subtract(num1, num2) {
  currentNum = parseFloat(num1) - parseFloat(num2);
  return currentNum;
}

function multiply(num1, num2) {
  currentNum = parseFloat(num1) * parseFloat(num2);
  return currentNum;
}

function divide(num1, num2) {
  if (parseInt(num2) === 0) {
    currentNum = "Cannot Divide By Zero";
    return currentNum;
  }
  currentNum = parseFloat(num1) / parseFloat(num2);
  return currentNum;
}

function operate() {
  debug === 1 & console.log("Inside operate()");
  let result = "";

  if (operator === "+") {
    debug === 1 & console.log("Going to add");
    result = add(previousNum, currentNum);
  }
   else if (operator === "-") {
    debug === 1 & console.log("Going to subtract");
    result = subtract(previousNum, currentNum);
  }
  else if (operator === "x") {
    debug === 1 & console.log("Going to multiply");
    result = multiply(previousNum, currentNum);
  }
  else if (operator === "/") {
    debug === 1 & console.log("Going to divide");
    result = divide(previousNum, currentNum);
  }

  debug === 1 & console.log("result is:: " + result);
  return Math.round((result + Number.EPSILON) * 100) / 100
}

let keys = document.querySelector('.buttons');

this.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === '=') {
      selectEqual();
  }
  if (e.key === 'Backspace' || e.key === 'Delete') {
    selectUtil("DEL");
  }
  if (e.key >= 0 && e.key <= 9) {
    appendNumber(e.key);
    displayCurrentCalculations();
  }
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    selectOperator(e.key);
  }
});

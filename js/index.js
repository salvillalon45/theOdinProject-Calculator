console.log("Inside index.js");


let displayCurrent = document.querySelector(".display-current");
let currentNum = "";
let previousNum = ""
let operator= "";
let debug = 1;
let decimalFlag = 0;


function displayCurrentCalculations() {
  displayCurrent.textContent = currentNum
}

function appendNumber(num) {
  console.log(num.indexOf("."));
  
  if (decimalFlag > 0) {
    currentNum = currentNum.toString() + num.toString();
    // return;
  }
  if (num.indexOf(".") >= 0) {
    console.log("In check");
    decimalFlag++;
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
  // The case when the user input = sign before getting all numbers ready
  if (previousNum.length === 0 || currentNum.length === 0) {
    return;
  }

  let result = operate();
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
  currentNum = parseFloat(num1) + parseInt(num2);
  return currentNum;
}

function subtract(num1, num2) {
  currentNum = parseFloat(num1) - parseInt(num2);
  return currentNum;
}

function multiply(num1, num2) {
  currentNum = parseFloat(num1) * parseInt(num2);
  return currentNum;
}

function divide(num1, num2) {
  if (parseInt(num2) === 0) {
    currentNum = "Cannot Divide By Zero";
    return currentNum;
  }
  currentNum = parseFloat(num1) / parseInt(num2);
  return currentNum;
}

function operate() {
  debug === 1 & console.log("Insidie operate()");
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
  // return result;
  return Math.round((result + Number.EPSILON) * 100) / 100
}

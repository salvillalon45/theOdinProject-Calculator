console.log("Inside index.js");

// let gridContainer = document.querySelector(".grid-container");
// let gridBox = document.createElement("div");
// let canvasSize;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  console.log("Insidie operate()");
  if (operator === "add") {
    console.log("Going to add");
    console.log(add(num1, num2));
  }
  else if (operator === "subtract") {
    console.log("Going to subtract");
    subtract(num1, num2);
  }
  else if (operator === "multiply") {
    console.log("Going to multiply");
    multiply(num1, num2);
  }
  else if (operator === "divide") {
    console.log("Going to divide");
    divide(num1, num2);
  }
}

// function createCalculatorGrid() {
//
//   // Create the grid
//   for (let i = 0; i < 16; i++) {
//     let gridBox = document.createElement("div");
//     gridBox.classList.add("grid-box");
//     gridContainer.appendChild(gridBox);
//   }
//
//   // // Change the rowNum and colNum CSS variable
//   // document.documentElement.style.setProperty("--colNum", canvasSize);
//   // document.documentElement.style.setProperty("--rowNum", canvasSize);
// }

// createCalculatorGrid();

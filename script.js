"use strict";

const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");
const nr1 = document.querySelector("#firstnumber");
const nr2 = document.querySelector("#secondnumber");

let readResult = document.querySelector("#results");
const operator = document.querySelector("#operator");

let result;
let firstNumberValue = nr1.value;
let secondNumberValue = nr2.value;

function setUp() {
  console.log("set up");
  // adding eventListeners to the buttons
  calculate.addEventListener("click", clickCalculate);
  clear.addEventListener("click", clickClear);
}

function clickCalculate() {
  console.log(firstNumberValue);
  console.log(secondNumberValue);

  if (operator.value == "add") {
    result = firstNumberValue + secondNumberValue;
  } else if (operator.value == "sub") {
    result = firstNumberValue - secondNumberValue;
  } else if (operator.value == "mul") {
    result = firstNumberValue * secondNumberValue;
  } else if (operator.value == "div") {
    result = firstNumberValue / secondNumberValue;
  }
  console.log(result);
  console.log(operator.value);

  readResult.textContent = result;
}

function clickClear() {
  console.log("clear result");
}

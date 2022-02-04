"use strict";

const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");
const nr1 = document.querySelector("#firstnumber");
const nr2 = document.querySelector("#secondnumber");

let firstNumberValue = nr1.value;
console.log(firstNumberValue);

let secondNumberValue = nr2.value;
console.log(secondNumberValue);

calculate.addEventListener("click", clickCalculate);
clear.addEventListener("click", clickClear);

function clickCalculate() {
  console.log("calculate");
  // read first number here
}

function clickClear() {
  console.log("clear result");
}

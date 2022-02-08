"use strict";

// step 1: we need a setUp function
window.addEventListener("DOMContentLoaded", setUp);
function setUp() {
  // step 2: we need to be able to click the calculate button
  document.querySelector("#calculate").addEventListener("click", calculateClick);
  // step 3: we need to be able to click the reset/clear button
  document.querySelector("#clear").addEventListener("click", clearClick);
}

// step 3.1: create the following functions, connected to the eventListeners
function calculateClick() {
  console.log("calculateClick works");
  // step 6: get the input from the user
  const firstNumber = Number(document.querySelector("#firstnumber").value);
  const secondNumber = Number(document.querySelector("#secondnumber").value);

  // step 4: figure out which operator the user chose
  const operatorValue = document.querySelector("#operator").value;
  console.log("The operator chosen is:", operatorValue);
  let results;

  let resultList = document.querySelector("#results");
  // step 5: make the if/else statements for all the operator values
  if (operatorValue === "add") {
    results = firstNumber + secondNumber;
  } else if (operatorValue === "sub") {
    results = firstNumber - secondNumber;
  } else if (operatorValue === "mul") {
    results = firstNumber * secondNumber;
  } else if (operatorValue === "div") {
    results = firstNumber / secondNumber;
  }

  let numberOfDecimals = document.querySelector("#decimals").value;

  if (document.querySelector("#doround").checked) {
    numberOfDecimals = document.querySelector("#decimals").value;
  }

  resultList.innerHTML = `<li>${results}</li>`;

  console.log("Number of decimals:", numberOfDecimals);
  console.log("Type of:", typeof numberOfDecimals);
  console.log("Result:", results.toFixed(numberOfDecimals));
  console.log("Round of:");
}

function clearClick() {
  console.log("clearClick works");
}

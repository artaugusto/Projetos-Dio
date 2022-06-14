const SUBTRAIR = document.getElementById("subtrair");
const ADICIONAR = document.getElementById("adicionar");
const RESET = document.getElementById("reset");

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

SUBTRAIR.addEventListener("click", function () {
  if (currentNumber > -10) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    window.alert("Você atingiu o limite!");
  }
});
ADICIONAR.addEventListener("click", function () {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    window.alert("Você atingiu o limite!");
  }
});
RESET.addEventListener("click", function () {
  currentNumber = 0;
  currentNumberWrapper.innerHTML = currentNumber;
});

function checkNumber() {
  var filled = false;

  if (currentNumber < 0) {
    filled = true;
  }

  return filled;
}
var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (checkNumber(buttons)) {
      currentNumberWrapper.classList.add("colorRed");
    } else {
      currentNumberWrapper.classList.remove("colorRed");
    }
  });
});

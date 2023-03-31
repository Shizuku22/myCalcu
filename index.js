let result = document.getElementById("result");

function updateResult(value) {
  result.value += value;
}

function calculateResult() {
  let expression = result.value;
  expression = expression.replace(/×/g, '*'); // replace "×" with "*"
  expression = expression.replace(/÷/g, '/'); // replace "÷" with "/"
  result.value = eval(expression);
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

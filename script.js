let display = document.getElementById("display");
let input = "";
let oprs = "";

function inputNumber(value) {
  input += value;
  display.textContent = input;
}

function inputOperator(operator) {
  if (input === "" && operator !== ".") return;
  input += operator;
  display.textContent = input;
}

function calculate() {
  try {
    let result = new Function("return " + input)();

    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }

    input = result.toString();
    display.textContent = input;

  } catch (error) {
    display.textContent = "Erro";
    input = "";
  }
}

function clearDisplay(){
    input = "";
    display.textContent = input;
}

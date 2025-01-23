const display = document.getElementById("display");
let resetDisplay = false;

function appendToDisplay(value) {
  if (resetDisplay) {
    display.value = "";
    resetDisplay = false;
  }
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
  resetDisplay = false;
}

function changeSign() {
  display.value = display.value.startsWith("-")
    ? display.value.slice(1)
    : "-" + display.value;
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result.toString();
    resetDisplay = true;
  } catch (error) {
    display.value = "Error";
    resetDisplay = true;
  }
}

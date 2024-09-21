window.appendToDisplay = function (value) {
  const display = document.getElementById("display");
  display.value += value;
};

window.clearDisplay = function () {
  const display = document.getElementById("display");
  display.value = "";
};

window.calculate = function () {
  const display = document.getElementById("display");
  try {
    display.value = new Function("return " + display.value)();
  } catch (e) {
    display.value = "Error";
  }
};

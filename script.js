let currentInput = "";
let display = document.querySelector("input");
let buttons = document.querySelectorAll("button");
function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  display.value = currentInput || "0";
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    if (value === "AC") {
      currentInput = "";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      calculate();
    } else {
      currentInput += value;
    }
    display.value = currentInput || "0";
  });
});
console.log(eval("1+2-4"));

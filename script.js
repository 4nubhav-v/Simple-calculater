let currentInput = "";
let display = document.querySelector(".textholder");
let buttons = document.querySelectorAll(".btn");
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
const ch = document.getElementById("checkbox");
const bg = document.querySelector(".background");
const calculator = document.querySelector(".calculator");
const textInput = document.querySelector(".textholder");
const l = document.getElementById("laybel");
console.log(l.style);
ch.addEventListener("change", function () {
  if (ch.checked) {
    bg.style.backgroundColor = "#fff";
    calculator.style.color = "#000";
    textInput.style.color = "#000";
    l.innerHTML = "Dark Mode";
    l.style.color = "#000";
    buttons.forEach((button) => {
      button.style.color = "#000";
    });
  } else {
    bg.style.backgroundColor = "#000";
    calculator.style.color = "#fff";
    textInput.style.color = "#fff";
    l.innerHTML = "Light Mode";
    l.style.color = "#fff";
    buttons.forEach((button) => {
      button.style.color = "#fff";
    });
  }
});

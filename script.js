let currentInput = "";
const display = document.querySelector(".textholder");
const buttons = document.querySelectorAll(".btn");

// Function to evaluate the current input expression
function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
}

// Function to update the display
function updateDisplay() {
  display.value = currentInput || "0";
}

// Function to handle button click events
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      currentInput = ""; // Clear input
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1); // Delete last character
    } else if (value === "=") {
      calculate(); // Calculate the result
    } else if (value === "%") {
      handlePercentage(); // Handle percentage conversion
    } else {
      currentInput += value; // Add input to expression
    }

    updateDisplay(); // Update the display after every input
  });
});

// Function to handle percentage calculation
function handlePercentage() {
  let lastNumMatch = currentInput.match(/(\d+(\.\d+)?)(?!.*\d)/); // Match last number
  if (lastNumMatch) {
    let lastNum = lastNumMatch[0];
    let start = currentInput.lastIndexOf(lastNum);
    let percentageValue = (parseFloat(lastNum) / 100).toString();
    currentInput = currentInput.slice(0, start) + percentageValue; // Replace last number with percentage
  }
}

// Dark/Light mode toggle functionality
const checkbox = document.getElementById("checkbox");
const elementsToStyle = {
  bg: document.querySelector(".background"),
  calculator: document.querySelector(".calculator"),
  textInput: document.querySelector(".textholder"),
  label: document.getElementById("laybel"),
  buttons: document.querySelectorAll(".btn"),
};

checkbox.addEventListener("change", () => {
  const isDarkMode = checkbox.checked;
  const color = isDarkMode ? "#000" : "#fff";
  const bgColor = isDarkMode ? "#fff" : "#000";
  const modeLabel = isDarkMode ? "Dark Mode" : "Light Mode";

  // Apply color changes to the elements
  elementsToStyle.bg.style.backgroundColor = bgColor;
  elementsToStyle.calculator.style.color = color;
  elementsToStyle.textInput.style.color = color;
  elementsToStyle.label.style.color = color;
  elementsToStyle.label.innerText = modeLabel;
  elementsToStyle.buttons.forEach((button) => {
    button.style.color = color;
  });
});

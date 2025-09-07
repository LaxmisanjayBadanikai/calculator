let display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  shouldResetDisplay = false;
  updateDisplay();
}

function appendToDisplay(value) {
  if (shouldResetDisplay && !isOperator(value)) {
    currentInput = '0';
    shouldResetDisplay = false;
  }
  if (currentInput === '0' && value !== '.') {
    if (isOperator(value)) {
      currentInput += value;
    } else {
      currentInput = value;
    }
  } else if (value === '.') {
    let parts = currentInput.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1];
    if (!lastPart.includes('.')) {
      currentInput += value;
    }
  } else if (isOperator(value) && isOperator(currentInput[currentInput.length - 1])) {
    currentInput = currentInput.slice(0, -1) + value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function deleteLast() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    if (isOperator(currentInput[currentInput.length - 1])) {
      currentInput = currentInput.slice(0, -1);
    }
    let result = eval(currentInput);
    if (!isFinite(result)) {
      currentInput = 'Error';
    } else {
      result = Math.round(result * 100000000) / 100000000;
      currentInput = result.toString();
    }
    shouldResetDisplay = true;
  } catch (error) {
    currentInput = 'Error';
    shouldResetDisplay = true;
  }
  updateDisplay();
}

document.addEventListener('keydown', function(event) {
  if (event.key >= '0' && event.key <= '9') {
    appendToDisplay(event.key);
  } else if (event.key === '.') {
    appendToDisplay('.');
  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    appendToDisplay(event.key);
  } else if (event.key === 'Enter' || event.key === '=') {
    calculate();
  } else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') {
    clearDisplay();
  } else if (event.key === 'Backspace') {
    deleteLast();
  }
});

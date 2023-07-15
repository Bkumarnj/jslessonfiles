// Get the necessary elements from the DOM
const inputBox = document.querySelector('.input-box');
const resultDisplay = document.getElementById('result');
const numberButtons = document.querySelectorAll('.numpad button');
const operatorButtons = document.querySelectorAll('.operators button');
const equalsButton = document.getElementById('equals-to');

// Add event listener to input box for Enter/Return key
inputBox.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const expression = inputBox.value;
      const result = eval(expression);
      resultDisplay.textContent = result;
    }
  });
  
  // Add event listeners to number buttons and equals button
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button === equalsButton) {
        const expression = inputBox.value;
        const result = eval(expression);
        resultDisplay.textContent = result;
      } else {
        inputBox.value += button.textContent;
      }
    });
  });  

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    inputBox.value += button.textContent;
  });
});
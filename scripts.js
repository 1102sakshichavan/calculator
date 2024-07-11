// script.js
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.button');
    
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';
    let resultDisplayed = false;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstValue = '';
                secondValue = '';
                screen.textContent = '';
                resultDisplayed = false;
            } else if (value === '=') {
                if (firstValue && operator && currentInput) {
                    secondValue = currentInput;
                    const result = calculate(firstValue, operator, secondValue);
                    screen.textContent = result;
                    currentInput = result.toString();
                    firstValue = '';
                    operator = '';
                    secondValue = '';
                    resultDisplayed = true;
                }
            } else if (button.hasAttribute('data-operator')) {
                if (currentInput && !resultDisplayed) {
                    operator = value;
                    firstValue = currentInput;
                    currentInput = '';
                    screen.textContent += ` ${operator} `;
                }
            } else {
                if (resultDisplayed) {
                    currentInput = value;
                    resultDisplayed = false;
                } else {
                    currentInput += value;
                }
                screen.textContent = currentInput;
            }
        });
    });
    
    function calculate(a, operator, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return b === 0 ? 'Error' : a / b;
            default:
                return b;
        }
    }
});

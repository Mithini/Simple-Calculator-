let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.textContent = expression;
}

function clearDisplay() {
    expression = '';
    display.textContent = '0';
}

function calculate() {
    try {
        let result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression');
        }
        display.textContent = result;
        expression = result.toString();
    } catch (error) {
        display.textContent = 'Error';
        expression = '';
    }
}
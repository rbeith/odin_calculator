const buttons = document.querySelectorAll('button');
let output = document.querySelector('#output');

let a = '';
let b = '';
let operatorArr = [];
let input = [];
let operator = '';

const add = function(a, b) {
    return Math.round(a + b);
}

const subtract = function(a, b) {
    return Math.round(a - b);
}

const multiply = function(a, b) {
    return Math.round(a * b);
}

const divide = function(a, b) {
    if (b == 0) {
        return "That's illegal!"
    } else
    return Math.round(10000*(a / b))/10000;
}

const operate = function(operator, a, b) {
    if (operator == 'add') {
        return add(a, b)
    } else if (operator == 'subtract') {
        return subtract(a, b)
    } else if (operator == 'multiply') {
        return multiply(a, b)
    } else if (operator == 'divide') {
        return divide(a, b)
    }
}

let result = function() {
    let result;
    for (i = operatorArr.length; i > 0; i--) {
        b = input[1]
        a = input.shift();
        operator = operatorArr.shift();
        result = operate(operator, Number(a), Number(b))
        input[0] = result;
    }
    return result;
}

buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id == '1' || button.id == '2' || button.id == '3' || button.id == '4'|| button.id == '5'|| button.id == '6' || button.id == '7' || button.id == '8' || button.id == '9' || button.id == '0') {
                output.textContent += button.id;
                a += button.id;
            } else if (button.id == '+') {
                output.textContent += button.id;
                operatorArr.push('add');
                input.push(a)
                a = '';
            } else if (button.id == '-') {
                output.textContent += button.id;
                operatorArr.push('subtract');
                input.push(a)
                a = '';
            } else if (button.id == 'x') {
                output.textContent += button.id;
                operatorArr.push('multiply');
                input.push(a)
                a = '';
            } else if (button.id == '÷') {
                output.textContent += button.id;
                operatorArr.push('divide');
                input.push(a)
                a = '';
            } else if (button.id == '=') {
                output.textContent += button.id;
                input.push(a)
                output.textContent = result();
                a = '';
            } else if (button.id == 'C') {
                input = [];
                output.textContent = '';
                operatorArr = [];
                a = '';
                b = '';
                c = '';
            }
    })
});

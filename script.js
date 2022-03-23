const buttons = document.querySelectorAll('button');
let output = document.querySelector('#output');

let a = '';
let b = '';
let operatorArr = [];
let input = [];
let operator = '';

// const findOperatorValue = function(input) {
//     if (input.includes('+')) {
//         return sliceValue = input.findIndex(operator => operator == '+')
//     } else if (input.includes('-')) {
//         return sliceValue = input.findIndex(operator => operator == '-')
//     } else if (input.includes('x')) {
//         return sliceValue = input.findIndex(operator => operator == 'x')
//     } else if (input.includes('÷')) {
//         return sliceValue = input.findIndex(operator => operator == '÷')
//     }
// };

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




buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id == '1' || button.id == '2' || button.id == '3' || button.id == '4'|| button.id == '5'|| button.id == '6' || button.id == '7' || button.id == '8' || button.id == '9' || button.id == '0') {
                output.textContent += button.id;
                a += button.id;
                console.log(a)
            } else if (button.id == '+') {
                output.textContent += button.id;
                operatorArr.push('add');
                input.push(a)
                a = '';
            } else if (button.id == '-') {
                output.textContent += button.id;
                input.push(button.id);
                operator = 'subtract';
            } else if (button.id == 'x') {
                output.textContent += button.id;
                input.push(button.id);
                operator = 'multiply';
            } else if (button.id == '÷') {
                output.textContent += button.id;
                input.push(button.id);
                operator = 'divide';
            } else if (button.id == '=') {
                output.textContent += button.id;
                input.push(a)
                console.log(input)
                console.log(operatorArr)
                let result = '';
                for (i = input.length; i > 0; i--) {
                    a = input.shift()
                    console.log(a)
                    operator = operatorArr.shift();
                    console.log(operator)
                    b = input.shift()
                    console.log(b)
                    operate(operator, Number(a), Number(b))
                }
                console.log(input)
                    // findOperatorValue(input);
                    // console.log(findOperatorValue(input))
                    // let a = input.slice(0, sliceValue).join('');
                    // console.log(a)
                    // let b = input.slice(sliceValue + 1).join('');
                    // console.log(b)
                    // console.log(operator)
                //let result = operate(operator, Number(a), Number(b));
                output.textContent = result;
                console.log(result)
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

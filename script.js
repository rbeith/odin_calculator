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
    if (operator == add) {
        return add(a, b)
    } else if (operator == subtract) {
        return subtract(a, b)
    } else if (operator == multiply) {
        return multiply(a, b)
    } else if (operator == divide) {
        return divide(a, b)
    }
}

console.log(operate(divide,2,3))
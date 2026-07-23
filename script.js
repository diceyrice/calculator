let x = undefined;
let y = undefined;
let op = undefined;
let result = undefined;
let setForClear = false;

const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        updateX(number.textContent);
        updateY(number.textContent);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(!x) {

        }
        else if(!op){
            op = operator.textContent;
        }
        else if(op && !y) {
            
        }
        else if(op == '/' && y == 0) {
            display.textContent = "Error: Can't divide by 0"
            clear();
        }
        else {
            result = Math.round(operate(op, parseFloat(x), parseFloat(y)) * 1000000000)/1000000000;
            display.textContent = result;
            x = result;
            y = undefined;
            op = operator.textContent;
        }
    });
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if(op == undefined || y == undefined){
        display.textContent = x;
    }
    else if(op == '/' && y == 0) {
        display.textContent = "Error: Can't divide by 0"
        clear();
    }
    else {
        result = Math.round(operate(op, parseFloat(x), parseFloat(y)) * 1000000000)/1000000000;
        display.textContent = result;
        x = result;
        y = undefined;
        op = undefined;
        setForClear = true;
    }
});

const clearCalc = document.querySelector('.clear');
clearCalc.addEventListener('click', () => {
    display.textContent = "";
    clear();
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if(op == '+') {
        return add(a, b);
    }
    else if(op == '-') {
        return subtract(a, b);
    }
    else if(op == '*') {
        return multiply(a, b);
    }
    else if(op == '/') {
        return divide(a, b);
    }
}

function updateX(num) {
    if(!op && !isNaN(num)) {
        if(x == undefined || setForClear == true) {
            x = num;
            setForClear = false;
        }
        else {
            x += num;
        }
        display.textContent = x;
    }
}

function updateY(num) {
    if(op && !isNaN(num)) {
        if(y == undefined) {
            y = num;
        }
        else {
            y += num;
        }
        display.textContent = y;
    }
}

function clear() {
    x = undefined;
    y = undefined;
    op = undefined;
}
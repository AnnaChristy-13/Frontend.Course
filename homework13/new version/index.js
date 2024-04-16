
const calcInput = document.getElementById('input');

let sign = null;
let firstNumber = '';
let secondNumber = '';

// подписка на событие кнопок цифр
const numButtons = document.getElementsByClassName('num');
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {
        if (!sign) {
            firstNumber += e.target.innerText;
            calcInput.value += e.target.innerText;
        } else {
            secondNumber += e.target.innerText;
            calcInput.value += e.target.innerText;
        }
    });
}

// подписка на событие математических знаков
const signButtons = document.getElementsByClassName('sign');
for (let i = 0; i < signButtons.length; i++) {
    signButtons[i].addEventListener('click', (e) => {
        sign = e.target.innerText;
        calcInput.value += sign;
    });
}

// подписка события кнопки равно
const resBtn = document.getElementById('res');
resBtn.addEventListener('click', () => {
    let result;
    switch (sign) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            result = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case '*':
            result = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case '/':
            if (parseInt(secondNumber) === 0) {
                result = "Error: Division by zero";
            } else {
                result = parseInt(firstNumber) / parseInt(secondNumber);
            }
            break;
        default:
            result = "Invalid operation";
    }
    calcInput.value = result;
});

const btnAC = document.getElementById('ac');
btnAC.addEventListener('click', () => {
    calcInput.value = "";
    sign = null;
    firstNumber = '';
    secondNumber = '';
});



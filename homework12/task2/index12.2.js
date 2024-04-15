/* Задача2:
Написать калькулятор квадратного уравнения (дискрименант и корни)
пользователь вводит три переменных   a, b , c
и ему выводится ответ в x1 и  x2  в любом виде. */

const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const answer = document.getElementById('answer');

function calculateQuadraticEquation() {

    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;


    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {

        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        answer.value = `Root1: ${root1}, Root2: ${root2}`;

    } else if (discriminant === 0) {

        const root = -b / (2 * a);
        answer.value = `Root:${root}`;

    } else {

        answer.classList.add(0);
        answer.value = `No roots`;

    }
}

function clearInputs() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    answerTextArea.value = '';
}

calculateButton.addEventListener('click', calculateQuadraticEquation);
clearButton.addEventListener('click', clearInputs);

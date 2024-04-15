// Задача 1
// У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите программу для удвоения каждого значения в массиве и вывода результата в консоль.

const array1 = [2, 4, 6, 8, 10];

for (let i = 0; i < array1.length; i++) {
    array1[i] *= 2;

}
console.log("Double array", array1);

// Задача 2
// Есть массив чисел (любых) - поменять первое и последий элемент массива местами.

const array2 = [10, 15, 55, 5, 125];

let tempElement = array2[0];
array2[0] = array2[array2.length - 1];
array2[array2.length - 1] = tempElement;

console.log("Modified array", array2);


// let temp = array2.slice(1,-1);
// console.log(temp);
// temp.push(array2[0]);
// console.log(temp);

// Задача 3
// Есть массив чисел (любых) если в массиве есть хотябы одно число равное 5 - вывести  в консоль сообщение: 
// "5 Найдено" если нет вывести в консоль сообщение "5 Отсутствует".

const array3 = [10, 8, 5, 67, 125];
let found_5 = false;

for (let i = 0; i < array3.length; i++) {
    if (array3[i] === 5) {
        found_5 = true;
        break;
    }
}

if (found_5) {
    console.log("5 is found in the array");
} else {
    console.log("5 is not found in the array");
}

// Задача 4*
// У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите программу для вычисления среднего значения элементов массива 
// и вывода результата в консоль.

const array4 = [10, 15, 20, 25, 30];
let sum = 0;

for (let i = 0; i < array4.length; i++) {
    sum += array4[i];
}

let ar_mean = sum / array4.length;
console.log('Arithmetic mean:', ar_mean);


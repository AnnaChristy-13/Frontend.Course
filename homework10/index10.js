// Задача 1
// Напишите функцию, которая принимает два числа и возвращает большее значение.
//  Вызов функции присвоить переменной и отобразить результат(переменную) в консоле.

function myFunc1(a, b) {

    if (a > b) {


        console.log(`The max number is ${a}`);
        return a;
       

    } else if (a < b) {

        console.log(`The max number is ${b}`);
        return b;
        

    } else {

        console.log(`Numbers are equal`);
        return;
    }
    

}
console.log("Solution to task № 1:");
myFunc1(222, 333);



// Задача 2
// Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. 
// Для отображения результа работы функции, вызовите её три раза с различными параметрами, результат 
// каждого вызова присвойте отдельной переменной и выведите переменные в консоль.

function myFunc2(str1, n) {

    const res = str1.substring(0, n);
   
    console.log(res); 

    return res;

}
console.log("=====================");
console.log("Solution to task № 2:");
myFunc2('Frontend JavaScript', 10)
myFunc2('Backend Java', 5)
myFunc2("Quality Assurance testing", 13)

// Задача 3
// Напишите функцию, которая принимает массив и элемент, а затем возвращает true, 
// если элемент присутствует в массиве, и false в противном случае (если есть повторения заданного элемента в массиве, 
// то на задачу это никак не влияет). Результат вызова функции отобразите в консоле.

function myFunc3(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true;
        }
    }
    return false;
}
console.log("=====================");
console.log("Solution to task № 3:");
console.log(myFunc3([1, 56, 45, 33, 89], 45));


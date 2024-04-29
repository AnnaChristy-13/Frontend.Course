// Создайте функцию delay, которая принимает число (value) и возвращает промис. Промис должен разрешиться через 5 секунд и вернуть удвоенное значение аргумента value (в resolve). 
// eсли аргумент не является числом, промис должен быть отклонен с текстом ошибки "The argument is not a number" (в reject)

// Создайте функцию delay, которая принимает число (value) и возвращает промис. Промис должен разрешиться через 5 секунд и вернуть удвоенное значение аргумента value (в resolve). 
// eсли аргумент не является числом, промис должен быть отклонен с текстом ошибки "The argument is not a number" (в reject)

const delay = (value) => {
    return new Promise((resolve, reject) => {
        if (typeof value !== 'number') {
            reject(new Error('The argument is not a number'));
        } else {
            setTimeout(() => {
                resolve(value * 2);
            }, 5000);
        }
    });
}

delay(250).then(
    (result) => console.log(result),
    (error) => console.log(error)
);





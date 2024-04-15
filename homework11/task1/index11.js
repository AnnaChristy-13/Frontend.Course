// Задача1:
// Есть массив строк. Вывести каждую строку в div и вывести в документ.

const myArray = ['Using', 'JS', 'DOM', 'functions', 'to', 'interact', 'with', 'DOM', 'model'];
for (let i = 0; i < myArray.length; i++) {

    const str = myArray[i];

    const div = document.createElement('div');

    const p = document.createElement('p');

    p.innerText = str;

    div.appendChild(p);
    
    document.body.appendChild(div);

}











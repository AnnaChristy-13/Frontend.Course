// Задача1:
// создать форму состоящую из "логин", "пароль" и "повторите пароль" и кнопки "отправить"
// при нажатии на кнопку "отправить" производится праверка - если "пароль" и "повторите пароль" совпадают - 
// тогда пользователю выводится сообщение: данные отправлены, иначе выводится сообщение пароль и повторите пароль не совпадают...

const submitButton = document.getElementById('submitButton');


function checkPassword() {

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {

        alert('The data has been sent');


    } else {
        alert('The password does not match "confirm password"');
    }

}

submitButton.addEventListener('click', checkPassword);




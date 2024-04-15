// Задача3:
// Сделать кнопку, которая добавляет карточки на странице
// в каждой карточке есть заголовок, текст и картинка (url картинки можно использовать одинаковый).

    const button = document.createElement('button');
    button.innerText = 'create cards';
    button.style.backgroundColor = 'grey';
    button.style.color = 'white';
    document.body.appendChild(button);
    

const cardsData = [
    {
        imageUrl: '../task3/img/pic01.jpg',
        title: 'Judith and the Head of Holofernes',
        text: 'Gustav Klimt',

    },
    {
        imageUrl: '../task3/img/pic02.jpg',
        title: 'Lady with Fan',
        text: 'Gustav Klimt',

    },
    {
        imageUrl: '../task3/img/pic03.jpg',
        title: 'Portrait of Adele Bloch-Bauer',
        text: 'Gustav Klimt',

    }
];

let currentIndex = 0;

function createCard() {

    if (currentIndex < cardsData.length) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        const cardTitle = document.createElement('h2');
        cardTitle.innerText = cardsData[currentIndex].title;

        const cardText = document.createElement('p');
        cardText.innerText = cardsData[currentIndex].text;

        const cardImage = document.createElement('img');
        cardImage.src = cardsData[currentIndex].imageUrl;

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardText);
        cardContainer.appendChild(cardImage);

        document.body.appendChild(cardContainer);

        currentIndex++;
    }


}

button.addEventListener('click',createCard)
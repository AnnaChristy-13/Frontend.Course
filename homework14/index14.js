// Задание
// Предположим вы получили объект с данными (создайте переменную, в которой будет храниться объект) - spaceship, в котором находятся характеристики космического корабля, такие как:
// name
// manufacturer
// crew
// maxSpeed
// Необходимо отобразить их на странице.
// Стилизация на ваше усмотрение
// Дополнительная задача: Создайте кнопку "Hide Manufacturer", которая будет скрывать manufacturer корабля на странице.

const spaceship = {
    name: 'Cosmic Enigma',
    manufacturer: 'Aerojet Rocketdyne',
    crew: [
        { astronauts: ['Doug Hurley', ' Bob Behnken'] },
        { engineers: ['Omari Hassan', ' Steve Sullivan'] },
        { scientists: ['Andreas Mogensen', ' Satoshi Furukawa'] }
    ],
    maxSpeed: '430.000 mph',
}


function displaySpaceshipInfo() {


    const spaceshipName = document.getElementById('name');
    spaceshipName.innerText = 'Name: ' + spaceship.name;

    const spaceshipManufacturer = document.getElementById('manufacturer');
    spaceshipManufacturer.innerText = 'Manufacturer: ' + spaceship.manufacturer;

    const spaceshipCrew = document.getElementById('crew');
    spaceshipCrew.innerText = 'Crew: ';

    const crewAstronauts = document.getElementById('astronauts');
    crewAstronauts.innerText = 'Astronauts: ' + spaceship.crew[0].astronauts;

    const crewEngineers = document.getElementById('engineers');
    crewEngineers.innerText = 'Engineers: ' + spaceship.crew[1].engineers;

    const crewScientists = document.getElementById('scientists');
    crewScientists.innerText = 'Scientists: ' + spaceship.crew[2].scientists;

    const spaceshipMaxSpeed = document.getElementById('maxSpeed');
    spaceshipMaxSpeed.innerText = 'Max speed: ' + spaceship.maxSpeed

}

displaySpaceshipInfo();


const btnHideCrew = document.getElementById('hideCrewBtn');
btnHideCrew.addEventListener('click', () => {
    astronauts.style.display = "none";
    engineers.style.display = "none";
    scientists.style.display = "none";
});


const timer = document.getElementById ('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let secCounter = 60;
let timerId;

const updateTimer = () => {
    
    if (secCounter > 0) {
        secCounter -= 1;
        timer.textContent = secCounter;
        timerId = setTimeout(updateTimer, 1000);
    } else {
        timer.textContent = "Time is up!";
    }
}

const startTimer = () => {
    updateTimer();
    // startButton.removeEventListener('click', startTimer);
}

const stopTimer = () => {
    clearTimeout(timerId);
    // stopButton.removeEventListener('click', stopTimer);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
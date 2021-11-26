'use strict';

const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;
const circleColors = ['#FF0000', '#FF1493', '#FFA500', '##FFFF00', '#FF00FF', '#8A2BE2', '#4B0082', '#00FF00', '#00FFFF', '#7B68EE'];


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});


timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});


board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}


function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = '0' + current;
        }
        setTime(current);
    }

}


function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}


function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Игра закончена<br>Ваш счет: <span class="primary">${score}</span></h1>`
}


function createRandomCircle() {
    const circle = document.createElement('div');

    const size = getRandomNumber(10, 60);
    const { height, width } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(10, height - size);

    circle.classList.add('circle');
    circle.style.background = `${getRandomColor()}`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`

    board.append(circle);
}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function getRandomColor() {
    return circleColors[Math.floor(Math.random() * circleColors.length)];
}


function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle');

        if (circle) {
           circle.click(); 
        }
    }

    setInterval(kill, 1);
}
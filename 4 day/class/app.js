'use strict';

const colors = ['#FF0000', '#FF1493', '#FFA500', '##FFFF00', '#FF00FF', '#8A2BE2', '#4B0082', '#00FF00', '#00FFFF', '#7B68EE'];
const board = document.querySelector('#board');
const SQUARES_NUMBER = 820;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = "0 0 2px black";
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
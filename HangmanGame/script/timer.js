import {gameEnd} from "./initGame.js";

let timeCounter;
const timer = document.querySelector(".timer");

export const resetTimer = () => {
    clearInterval(timeCounter);
    timer.innerHTML = `0:00`;
};

export const startTimer = () => {
    timeCounter = setInterval(() => {
        let time = Number(timer.innerHTML.split(':')[1]);
        time += 1;
        timer.innerHTML = `0:${time}`;
        if (time === 30) {
            gameEnd(false);
        }
    }, 1000);
};

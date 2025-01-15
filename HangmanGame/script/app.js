import { resetTimer, startTimer } from "./timer.js";
import { randomWord, initGame,gameEnd,maxGuesses} from "./initGame.js";

const themeBtn = document.querySelectorAll(".theme-button");
const picktheme = document.querySelector(".picktheme");
const container = document.querySelector(".container");
const keyboard = document.querySelector(".Keyboard");
const hintBtn = document.querySelector(".hint-text img");
const hintText = document.querySelector(".hint-text b");
const hangmanImg = document.querySelector(".hungman-box img");
const gameModel = document.querySelector(".game-model");
const playAgain = document.querySelector(".play-again");

let hint="", wrongGuessed = 1,correctLetter = 0;

themeBtn.forEach(button => {
    button.addEventListener("click", () => {
        const selectedTheme = button.innerText;
        hint= randomWord(selectedTheme);
        picktheme.style.display = "none";
        container.style.display = "flex";
        resetTimer();
        startTimer();
    });
});

for (let i = 0; i <= 25; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i + 97);
    keyboard.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i + 97), hangmanImg, wrongGuessed,() =>{return ++wrongGuessed},correctLetter,() =>{return ++correctLetter} ));
}

hintBtn.addEventListener("click", () => {
    hintText.innerText = hint;
    hintBtn.style.pointerEvents = "none";
    wrongGuessed++;
    hangmanImg.src = `image/img${wrongGuessed}.png`;
    if (wrongGuessed === maxGuesses) gameEnd(false);
});

playAgain.addEventListener("click", () => {
    gameModel.style.display = "none";
    container.style.display = "none";
    picktheme.style.display = "";
    hintText.innerText = "";
    hintBtn.style.pointerEvents = "auto";
    wrongGuessed = 1;
    correctLetter = 0;
    resetTimer();
    hangmanImg.src = `image/img${wrongGuessed}.png`;
    keyboard.querySelectorAll("button").forEach(btn => (btn.disabled = false));
});

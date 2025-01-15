import { wordList } from "./wordList.js"
import { resetTimer, startTimer } from "./timer.js";

const wordDisplay = document.querySelector(".word-display");
const gameModel = document.querySelector(".game-model");
export const maxGuesses = 7;
let guessedWord = "";

export const randomWord = (theme) => {
    const selectedTheme = wordList.find(item => item.theme === theme);
    const words = selectedTheme.words;
    const randomIndex = Math.floor(Math.random() * words.length);
    guessedWord=words[randomIndex].word;
    wordDisplay.innerHTML = guessedWord.split("").map(() => `<li class="letter"></li>`).join("");
    return words[randomIndex].hint;
};

export const initGame = (button, clickLetter,hangmanImg, wrongGuessed, incrementWrong,correctLetter,incrementCorrect) => {
    resetTimer();
    startTimer();

    if (guessedWord.includes(clickLetter)) {
        guessedWord.split("").forEach((letter, index) => {
            if (letter === clickLetter) {
                correctLetter = incrementCorrect();
                const guessedLetter = wordDisplay.querySelectorAll("li")[index];
                guessedLetter.innerText = letter;
                guessedLetter.classList.add("guessed");
            }
        });
    } else {
        wrongGuessed = incrementWrong();
        hangmanImg.src = `image/img${wrongGuessed}.png`;
    }

    button.disabled = true;

    if (wrongGuessed === maxGuesses) gameEnd(false);
    if (guessedWord.length === correctLetter) gameEnd(true);
};

export const gameEnd = (isSucceeded) => {
    resetTimer();
    gameModel.style.display = "flex";
    gameModel.querySelector(".correct-word").innerText = guessedWord;
    gameModel.querySelector(".content h2").innerText = isSucceeded ? "Well done" : "Failed";
};

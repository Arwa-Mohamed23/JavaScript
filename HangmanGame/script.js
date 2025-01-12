var wordList = [
    {
        theme: "Animals",
        words: [
            { word: "elephant", hint: "The largest land mammal." },
            { word: "dolphin", hint: "A smart marine mammal known for its playful behavior." },
            { word: "giraffe", hint: "The tallest land animal with a long neck." },
            { word: "kangaroo", hint: "An Australian marsupial that hops." },
            { word: "penguin", hint: "A flightless bird that lives in cold regions." }
        ]
    },
    {
        theme: "Countries",
        words: [
            { word: "canada", hint: "A country known for maple syrup and its vast forests." },
            { word: "egypt", hint: "The land of the pyramids and the Nile." },
            { word: "brazil", hint: "Home to the Amazon rainforest and famous for soccer." },
            { word: "japan", hint: "An island nation known for sushi and technology." },
            { word: "italy", hint: "The country famous for pasta and the Colosseum." }
        ]
    },
    {
        theme: "Food",
        words: [
            { word: "pizza", hint: "A round Italian dish with cheese and toppings." },
            { word: "sushi", hint: "A Japanese dish of vinegared rice and seafood." },
            { word: "burger", hint: "A sandwich with a patty, often served with fries." },
            { word: "taco", hint: "A Mexican dish with a folded tortilla and fillings." },
            { word: "pasta", hint: "An Italian dish made from flour and water." }
        ]
    },
    {
        theme: "Movies",
        words: [
            { word: "titanic", hint: "A romantic movie set on a doomed ship." },
            { word: "inception", hint: "A sci-fi film about dreams within dreams." },
            { word: "avatar", hint: "A film set on the alien world of Pandora." },
            { word: "joker", hint: "A psychological thriller about a famous clown villain." },
            { word: "frozen", hint: "A Disney movie with the song 'Let It Go'." }
        ]
    },
    {
        theme: "Colors",
        words: [
            { word: "red", hint: "The color of fire and blood." },
            { word: "blue", hint: "The color of the sky on a clear day." },
            { word: "green", hint: "The color of grass and leaves." },
            { word: "yellow", hint: "The color of the sun and bananas." },
            { word: "purple", hint: "A royal color often associated with luxury." }
        ]
    },
    {
        theme: "Jobs",
        words: [
            { word: "doctor", hint: "A person who treats illnesses." },
            { word: "teacher", hint: "A person who educates students." },
            { word: "engineer", hint: "A person who designs and builds things." },
            { word: "artist", hint: "A person who creates paintings or drawings." },
            { word: "chef", hint: "A professional cook who prepares meals." }
        ]
    }
];

var themeBtn = document.querySelectorAll(".theme-button");
var picktheme = document.querySelector(".picktheme");
var container = document.querySelector(".container");
var wordDisplay = document.querySelector(".word-display");
var keyboard = document.querySelector(".Keyboard");
var hintBtn = document.querySelector(".hint-text img");
var hintText = document.querySelector(".hint-text b");
var timer = document.querySelector(".timer");
var hangmanImg = document.querySelector(".hungman-box img");
var gameModel = document.querySelector(".game-model");
var playAgain = document.querySelector(".play-again");

var wrongGuessed=1, maxGuesse=7,correctLetter=0,timeCounter,guessedWord="",hint="";

function resetTimer() {
    clearInterval(timeCounter);
    timer.innerHTML = `0:00`;
}

function startTimer() {
    timeCounter = setInterval(function () {
        var time = Number(timer.innerHTML.split(':')[1]);
        time += 1;
        timer.innerHTML = `0:${time}`
        if (time === 30) {
            gameEnd(false);
        }
    }, 1000);
}

themeBtn.forEach(function(button) {
    button.addEventListener("click", function() {
        var selectedtheme = button.innerText;
        var currentWord = randomWord(selectedtheme);
        guessedWord = currentWord.word;
        hint=currentWord.hint;
        picktheme.style.display = "none";
        container.style.display="flex";
        resetTimer(); 
        startTimer();
    });
});

function randomWord(theme){
    var selectedTheme = wordList.filter(function(item) {
        return item.theme=== theme;
    });

    var words = selectedTheme[0].words;
    var randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerHTML=words[randomIndex].word.split("").map(()=>`<li class="letter"></li>`).join("");
    return words[randomIndex];
};


for(let i=0;i<=25;i++){
    var button=document.createElement("button");
    button.innerText=String.fromCharCode(i+97);
    keyboard.appendChild(button);
    button.addEventListener("click",e=> initGame(e.target,String.fromCharCode(i+97)));
}

hintBtn.addEventListener("click",function(){
    hintText.innerText = hint;
    hintBtn.style.pointerEvents = "none"; 
    wrongGuessed++;
    hangmanImg.src=`image/img${wrongGuessed}.png`;
    if(wrongGuessed===maxGuesse) gameEnd(false);
});

function initGame(button,clickLetter){
    resetTimer(); 
    startTimer();
    if(guessedWord.includes(clickLetter)){
        guessedWord.split("").forEach(function(letter,index){
            if(letter === clickLetter){
                correctLetter++;
                var guessedLetter=wordDisplay.querySelectorAll("li")[index];
                guessedLetter.innerText=letter;
                guessedLetter.classList.add("guessed");
            }
        });
    }
    else{
        wrongGuessed++;
        hangmanImg.src=`image/img${wrongGuessed}.png`;
    }
    button.disabled=true;

    if(wrongGuessed===maxGuesse) gameEnd(false);
    if(guessedWord.length === correctLetter) gameEnd(true);
}

function gameEnd(isSucceede){
    clearInterval(timeCounter);
    gameModel.style.display = "flex";
    gameModel.querySelector(".correct-word").innerText=guessedWord;
    if(isSucceede){
        gameModel.querySelector(".content h2").innerText="Well done";
    }else{
        gameModel.querySelector(".content h2").innerText="Failed";
    }
}

playAgain.addEventListener("click",function(){
    gameModel.style.display = "none";
    container.style.display="none";
    picktheme.style.display = "";
    hintText.innerText ="";
    hintBtn.style.pointerEvents = "auto"; 
    wrongGuessed=1;
    correctLetter=0;
    resetTimer();
    hangmanImg.src=`image/img${wrongGuessed}.png`;
    keyboard.querySelectorAll("button").forEach(btn => btn.disabled=false);
});






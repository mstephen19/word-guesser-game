const startButton = document.getElementById("startBtn");
const theGame = document.getElementById("gameContainer");
const timeCount = document.getElementById("time");
const wordSpace = document.getElementById("guessing");
const winsCount = document.getElementById("wins");
const lossesCount = document.getElementById("losses");

let secondsLeft;
const wordsArray = [
  "google",
  "pizza",
  "animal",
  "potato",
  "computer",
  "tiger",
  "lion",
  "shit",
  "vape",
  "doggies",
  "rapper",
  "mandarin",
];
var mainWord;
let wins = 0;
let losses = 0;

loadStats();

function loadStats() {
  var pulledWins = localStorage.getItem("userWins");
  var pulledLosses = localStorage.getItem("userLosses");
  winsCount.textContent = pulledWins;
  lossesCount.textContent = pulledLosses;
}

//load whole game
function loadGame() {
  //display game
  theGame.style.display = "inline-flex";
  //grab random word from array
  mainWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  console.log(mainWord);
  //set guess text to all underscores
  for (let i = 0; i < mainWord.length; i++) {
    wordSpace.textContent += "_";
  }
}

function resetGame() {
  wordSpace.textContent = "";
  theGame.style.display = "none";
  wordSpace.style.color = "black";
}

startButton.addEventListener("click", function () {
  loadGame();
  //start timer
  secondsLeft = 31;
  var timer = setInterval(function () {
    secondsLeft--;
    //LOSE
    if (secondsLeft < 0) {
      clearInterval(timer);
      wordSpace.style.color = "white";
      wordSpace.textContent = "Ran out of time!";
      losses++;
      localStorage.setItem("userLosses", losses); //
      lossesCount.textContent = losses;
      setTimeout(function () {
        resetGame();
      }, 600);
      //WIN
    } else if (wordSpace.textContent === mainWord) {
      clearInterval(timer);
      wordSpace.style.color = "green";
      wordSpace.textContent = "You guessed it!";
      wins++;
      localStorage.setItem("userWins", wins); //
      winsCount.textContent = wins;
      setTimeout(function () {
        startButton.textContent = "Play again";
        resetGame();
      }, 600);
    } else {
      timeCount.textContent = secondsLeft + "s";
    }
  }, 1000);
  //split current guess into array
  let wordSpaceContent = wordSpace.textContent;
  let wordSpaceArray = wordSpaceContent.split("");
  console.log(wordSpaceArray);
  //check if keystroke is in the word
  window.addEventListener("keyup", function (event) {
    var mainWordArray = mainWord.split("");
    var letter = event.key;
    if (mainWordArray.includes(letter)) {
      //getting index of key pressed
      var indexes = [];
      for (let i = 0; i < mainWordArray.length; i++) {
        if (mainWordArray[i] === letter) {
          indexes.push(i);
        }
      }
      //pushing letter pressed onto screen
      for (let i = 0; i < indexes.length; i++) {
        wordSpaceArray[indexes[i]] = letter;
      }
      var wordSpaceNew = wordSpaceArray.join("").toString();
      wordSpace.textContent = wordSpaceNew;
    } else {
      secondsLeft = secondsLeft - 3;
    }
  });
});

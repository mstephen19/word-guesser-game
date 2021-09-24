const startButton = document.getElementById('startBtn');
const theGame = document.getElementById('gameContainer');
const timeCount = document.getElementById('time');

let secondsLeft = 61;
const wordsArray = ['google', 'pizza', 'animal', 'potato', 'computer'];

startButton.addEventListener('click', function(){

    //display game
    theGame.style.display = "inline-flex";

    //start timer
    var timer = setInterval(function(){
        secondsLeft--
        if (secondsLeft === 0) {
            clearInterval(timer);
        } else{
            timeCount.textContent = secondsLeft + 's';
        }
    }, 1000);
    console.log(secondsLeft);

    for (let i = 0; i === wordsArray.length; i++) {
        
    }

});

// for loop through array to get random word using math.floor(math.random() * array.length)
// store that word as a let MAINWORD

//split MAINWORD into array
//set text of h2#guessing g _ _ _ _ _
//get length of word, insert textContent dashes into field based on 
//let finalThing = arrayMAINWORD[0] + (MAINWORD.string.replace(abcdefghijklmnopqrstuvwxyz/g,'_').slice(0, -1);)
//element.textContent = finalThing

//listen to keyup for which key user presses
//if arrayMAINWORD.includes(keyup letter)
//





//if keyup letter === arrayMAINWORD[i]

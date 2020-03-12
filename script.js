


const submitBtn = document.querySelector('#submitBtn');
const guessInput = document.querySelector('#guessInput')
const easyBtn = document.querySelector('#easyBtn')
const hardBtn = document.querySelector('#hardBtn')
const restartBtn = document.querySelector('#restartBtn');

const easyDiff = document.querySelector('#easyDiff');
const hardDiff = document.querySelector('#hardDiff');

const guessesLeftSpan = document.querySelector('.guessesLeftSpan')
const oldGuessesSpan = document.querySelector('.oldGuessesSpan')
const guessFeedback = document.querySelector('.guessFeedback')

const startingDefaultGuesses = 10;
const startingHardGuesses = 5;
let guessesLeft = startingDefaultGuesses;
let oldGuessesArray = [];
let computersNumber = Math.floor(Math.random()*100);
let stillHighBoolean = false;
let stillLowBoolean = false;
let hardDifficulty = false;

console.log(computersNumber);




// ADDING EVENT LISTENERS
submitBtn.addEventListener ('click', compareNumbers);

easyBtn.addEventListener ('click', easyBtnListener);

hardBtn.addEventListener ('click', hardBtnListener)

restartBtn.addEventListener('click', reset);





guessesLeftSpan.innerText = guessesLeft;


function easyBtnListener(){
    guessesLeft = startingDefaultGuesses;
    guessesLeftSpan.innerText = guessesLeft;
}

function hardBtnListener(){
    guessesLeft = startingHardGuesses;
    guessesLeftSpan.innerText = guessesLeft;
}





function reset(){
    computersNumber = Math.floor(Math.random()*100);
    console.log(computersNumber);
    guessesLeft = startingDefaultGuesses;
    oldGuessesArray = [];
    stillHighBoolean = false;
    stillLowBoolean = false;
    guessesLeftSpan.innerText = guessesLeft;
    guessFeedback.innerHTML = "Type in your guess!";
    oldGuessesSpan.innerHTML = oldGuessesArray;
    document.getElementById('guessInput').value='';
    submitBtn.addEventListener ('click', compareNumbers);
    easyBtn.addEventListener ('click', easyBtnListener);
    hardBtn.addEventListener ('click', hardBtnListener)
    submitBtn.classList.remove('disabledButton');
    easyBtn.classList.remove('disabledButton');
    hardBtn.classList.remove('disabledButton');
    guessFeedback.classList.remove('guessWin');
    easyBtn.classList.add('difficultyBtn')
    hardBtn.classList.add('difficultyBtn')
submitBtn.classList.add('difficultyBtn')

}





// MAIN PROCESSING FUNCTION WHEN SUBMIT IS CLICKED
function compareNumbers(){

    easyBtn.removeEventListener ('click', easyBtnListener);
    hardBtn.removeEventListener ('click', hardBtnListener);
easyBtn.classList.add('disabledButton');
hardBtn.classList.add('disabledButton');
easyBtn.classList.remove('difficultyBtn')
hardBtn.classList.remove('difficultyBtn')

//My new code for turning off difficulty buttons should go here. 



    //subtract guesses left and print
    guessesLeft--;
    guessesLeftSpan.innerText = guessesLeft;


    //Put the last guess into array....
oldGuessesArray.push (guessInput.value);
oldGuessesSpan.innerHTML = oldGuessesArray;


// main logic (too high, too low, you guessed it, you ran out of guesses!)
if (guessInput.value == computersNumber){
    guessFeedback.classList.add('guessWin');
    submitBtn.removeEventListener ('click', compareNumbers);
    submitBtn.classList.add('disabledButton');
    guessFeedback.innerHTML = `<strong>YOU GUESSED IT!</strong><br>(With ${guessesLeft} guesses to spare!)`;
}

if (guessInput.value > computersNumber){
    if(stillHighBoolean === true){
    guessFeedback.innerHTML = "<strong>You're STILL too high!</strong>";
} else {
    guessFeedback.innerHTML = "<strong>You're too high!</strong>";
    stillHighBoolean = true;
    stillLowBoolean = false;
}
}

 else if(guessInput.value < computersNumber){
     if(stillLowBoolean === true){
        guessFeedback.innerHTML = "<strong>You're STILL too low!</strong>";
     }
     else {
        guessFeedback.innerHTML = "<strong>You're too low!</strong>";
        stillLowBoolean = true;
        stillHighBoolean = false;
     }

}

if (guessesLeft === 0){
    guessFeedback.innerHTML = `<strong>YOU'RE OUT OF GUESSES, YOU LOST!</strong><br>(The number was: ${computersNumber})`;
    submitBtn.removeEventListener ('click', compareNumbers);
    submitBtn.classList.add('disabledButton');
    submitBtn.classList.remove('difficultyBtn')

}



}


















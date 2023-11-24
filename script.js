// Random number genrator
// It will genrate numbers between 1 to 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Variable Declaration and Initialization
const body = document.querySelector("body");
const guessInput = document.getElementById("guessInput");
const submit = document.getElementById("submt");
const lastGuess = document.querySelector(".lastGuess");
const remainingGuess = document.querySelector(".remainingGuess");
const displayMsg = document.querySelector(".displayMsg");
const startOver = document.querySelector(".resultParas");



// Used as button
const newButton = document.createElement("button");

// Some Variables For The Use
let previousGuess = [];
let guessScore = 1;

// Allow user to play the game
let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(guessInput.value);
    validateGuess(guess);
  });
}

// Checking that is user entered a number or not
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please Enter A Valid Number Between 1 to 100");
  } else {
    previousGuess.push(guess);
    if (guessScore > 10) {
      displayGuess(guess);
      displayMessage(`Game Over! Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Chicking the user guess is right or wrong!
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulation! Your Guess was Right, ${guess}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Too Low!`)
  } else if (guess > randomNumber) {
    displayMessage(`Too High!`)
  }
}

// Displaying the guesses
function displayGuess(guess) {
    guessInput.value = "";
    lastGuess.innerHTML= `${guess}  `;
    remainingGuess.innerHTML = `${10 - guessScore}`;
    guessScore++;
    
}

// Message Displaying
function displayMessage(message) {
    displayMsg.innerHTML = `<h2>${message}</h2>`    
}

// Preventing user to play the game, when game ends
function endGame() {
    guessInput.value="";
    guessInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "")

    newButton.innerHTML = "Start New Game";
    startOver.appendChild(newButton);
    playGame = false;
    newGame();
}

// Starting The new game, reseting neccessary things
function newGame() {
    newButton.addEventListener("click", (e) => {
      randomNumber = parseInt(Math.random() * 100 + 1);
      previousGuess = [];
      lastGuess.innerHTML = "";
      remainingGuess.innerHTML = `${10 - guessScore}`;
      guessScore = 1;
      guessInput.removeAttribute("disabled");
      submit.removeAttribute("disabled");
      startOver.removeChild(newButton);
      playGame = true;
    })
}

/*
  I want you to create a simple guess the number type game. 
  It should choose a random number between 1 and 100, 
  then challenge the player to guess the number in 10 turns. 
  After each turn the player should be told if they are right 
  or wrong, and if they are wrong, whether the guess was too 
  low or too high. It should also tell the player what numbers 
  they previously guessed. The game will end once the 
  player guesses correctly, or once they run out of turns. 
  When the game ends, the player should be given an option 
  to start playing again.
*/

// This section of the code sets up the variables and constants 
// we need to store the data our program will use.


const gameGuesses = document.querySelector('.game__guesses');

const gameAlert = document.querySelector('.game__alert');
const gameAlertText = document.querySelector('.game__alert-text');

const formMessage = document.querySelector('.form__message');
const formMessageText = document.querySelector('.form__message-text');

const guessSubmit = document.querySelector('.form__sumbit');
const guessReset = document.querySelector('.form__reset');
const guessField = document.querySelector('.form__input');

let randomNumber = 0;
let guessCount = 1;
startNewGame();

// Next, add the following below your previous JavaScript:

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
      gameGuesses.textContent = userGuess;
    } else {
      gameGuesses.textContent += ', ' + userGuess;
    }

    if(userGuess === randomNumber){
      gameWin(randomNumber);
    } 
    else {
      if(guessCount === 10){
        gameLost(randomNumber);
      } else {
        roundLost(userGuess);
      }
    }

    guessCount+=1;
    guessField.focus();
    guessField.value = '';
}

function roundLost(userNumber){
  formMessage.classList.add('message--active');
  gameAlert.classList.add('message--active');

  if(userNumber < randomNumber){
    gameAlertText.textContent = 'Too low!';
  } else if(userNumber > randomNumber) {
    gameAlertText.textContent = 'Too high!';
  }
  
  setTimeout(() => {
    formMessage.classList.remove('message--active');
  }, 1000)
}

function gameWin(num){
  gameGuesses.textContent = 'Congratulations! You got it right!';
  gameAlertText.textContent = num;
  gameAlert.classList.add('message--active');
  formMessage.classList.remove('message--active');
}

function gameLost(num){
  formMessage.classList.add('message--active');
  formMessageText.textContent = '¡Game Over!';
  gameAlertText.textContent = 'The correct number was ' + num;
  guessField.disabled = true;
  guessSubmit.disabled = true;
}

guessReset.addEventListener('click', resetGame);

function resetGame() {
  formMessage.classList.remove('message--active');
  gameGuesses.textContent = 'Welcome to guessing!';
  formMessageText.textContent= 'Wrong Number!';
  gameAlert.classList.remove('message--active');
  guessField.disabled = false;
  guessSubmit.disabled = false;

  startNewGame();
}

function startNewGame(){
  guessCount = 1;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log('The guessing number is: ' + randomNumber);
  guessField.value = '';
  guessField.focus();
}
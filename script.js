//get element by id and quuery selector do the same thing
//use El at the end to denote if its a dom ELEMENT
// Selecting elements/ global variables

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//setting intial state
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

//event listeners
btnRoll.addEventListener("click", function () {
  //generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //check for rolled 1 ?
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
        `current--${activePlayer}`
        ).textContent = currentScore

    // true switch to next player
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

//generating a dice roll

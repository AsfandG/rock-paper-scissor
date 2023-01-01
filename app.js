const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll("button");
let computerChoice;
let result;
let userChoice;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getresult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * buttons.length) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getresult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "You lost!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "You win!";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "You lost!";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "You win!";
  }
  resultDisplay.innerHTML = result;
}

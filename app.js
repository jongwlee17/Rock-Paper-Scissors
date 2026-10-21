let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    results.textContent =
        `Your score: ${humanScore} | Computer score: ${computerScore}`;

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        results.textContent += "\nYou win the game!";
    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        results.textContent += "\nComputer wins the game!";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return;
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
    } else {
        computerScore++;
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
    playGame("rock");
});

paperButton.addEventListener("click", () => {
    playGame("paper");
});

scissorsButton.addEventListener("click", () => {
    playGame("scissors");
});
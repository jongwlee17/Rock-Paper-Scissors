let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomInteger = Math.floor(Math.random() * 3);

    if (randomInteger == 0) {
        console.log("Computer chooses Rock");
        return "Rock";
    } else if (randomInteger == 1) {
        console.log("Computer chooses Paper");
        return "Paper";
    } else if (randomInteger == 2) {
        console.log("Computer chooses Scissors");
        return "Scissors";
    }
    return;
}

function getHumanChoice() {
    let choice = prompt("What would you like to play?");

    return choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore += 1;
    } else if (computerChoice.toLowerCase() == "rock" && humanChoice.toLowerCase() == "scissors") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    } else if (computerChoice.toLowerCase() == "paper" && humanChoice.toLowerCase() == "rock") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    } else if (computerChoice.toLowerCase() == "scissors" && humanChoice.toLowerCase() == "paper") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    } else {
        console.log("You have tied!");
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Your score is " + humanScore);
    console.log("The computer score is: " + computerScore);

    return humanScore < computerScore ? "The computer is the winner!" : "You are the winner!";
}


console.log(playGame());
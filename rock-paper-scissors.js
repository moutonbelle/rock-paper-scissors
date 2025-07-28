function getComputerChoice () {
    n = Math.floor(Math.random() * 3) + 1;
    switch (n) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice () {
    return prompt("Choose rock, paper, or scissors:").toLowerCase();
}

// console.log(getHumanChoice());

function determineWinner (humanChoice, computerChoice) {
    let winner;
        switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock": winner = "draw"; break;
                case "paper": winner = "computer"; break;
                case "scissors": winner = "human"; break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock": winner = "human"; break;
                case "paper": winner = "draw"; break;
                case "scissors": winner = "computer"; break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock": winner = "computer"; break;
                case "paper": winner = "human"; break;
                case "scissors": winner = "draw"; break;
            }
            break;
    }
    return winner;

    // console.log(humanChoice, computerChoice, winner)
}

function printRoundResult (winner, humanChoice, computerChoice) {
    switch (winner) {
        case "draw": return "It's a draw. You both picked " + humanChoice + ". ";
        case "human": return `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}. `; 
        case "computer": return `You lose. ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}. `;
    }
}

let humanScore = 0;
let computerScore = 0;

document.querySelector("#rps-buttons").addEventListener("click", e => {
    let roundResults = document.querySelector("#round-result");
    let humanChoice = e.target.getAttribute("id");
    let computerChoice = getComputerChoice();

    let winner = determineWinner(humanChoice, computerChoice);
    if (winner == "human") humanScore++;
    if (winner == "computer") computerScore++;

    roundResults.textContent = printRoundResult(winner, humanChoice, computerChoice);
    roundResults.textContent += "The score is " + humanScore + " for you and " + computerScore + " for computer.";

    if (humanScore >= 5 || computerScore >= 5) {
        let gameResults = document.querySelector("#game-result");
        gameResults.textContent = humanScore >= computerScore ? "You win the game!" : "Computer wins the game."
    }
});
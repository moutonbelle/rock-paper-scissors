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
        case "draw": console.log("It's a draw. You both picked", humanChoice); break;
        case "human": console.log(`You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`); break;
        case "computer": console.log(`You lose. ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`); break;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        let winner = determineWinner(humanChoice, computerChoice);
        printRoundResult(winner, humanChoice, computerChoice);
        if (winner == "human") humanScore++;
        if (winner == "computer") computerScore++;
    }

    for(let i = 1; i <= 5; i++) playRound(getHumanChoice(), getComputerChoice());

    let scoreMessage = "";
    if (humanScore > computerScore) scoreMessage += "You win!";
    else if (computerScore > humanScore) scoreMessage += "You lose.";
    else scoreMessage += "It's a draw."
    scoreMessage += ` Your score: ${humanScore}. Computer's score: ${computerScore}.`;
    console.log(scoreMessage);
}

playGame();
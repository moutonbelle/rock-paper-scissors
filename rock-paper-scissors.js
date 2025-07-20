function getComputerChoice () {
    n = Math.floor(Math.random() * 3) + 1;
    switch (n) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice () {
    choice = prompt("Choose rock, paper, or scissors [r|p|s]:");
    switch (choice) {
        case "r": return "Rock";
        case "p": return "Paper";
        case "s": return "Scissors";
    }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// console.log(humanScore);
// console.log(computerScore);
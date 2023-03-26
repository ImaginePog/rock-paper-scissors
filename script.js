function GetUserChoice() {
    let userChoice = prompt("Enter your choice: (rock,paper,scissor): ");
    userChoice = userChoice.toLowerCase();

    return userChoice;
}

const options = ["rock","paper","scissors"];

function GetComputerChoice() {
    let computerChoice;
    let randNum = Math.floor(Math.random() * 3);
    computerChoice = options[randNum];

    return computerChoice;
}


function GetUserChoice() {
    let userChoice = prompt("Enter your choice: (rock,paper,scissors): ");
    userChoice = userChoice.toLowerCase();
    
    console.log(userChoice);
    
    return userChoice;
}

const options = ["rock","paper","scissors"];

function GetComputerChoice() {
    let computerChoice;
    let randNum = Math.floor(Math.random() * 3);
    computerChoice = options[randNum];
    
    console.log(computerChoice);

    return computerChoice;
}

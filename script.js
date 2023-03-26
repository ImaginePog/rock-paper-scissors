function GetUserChoice() {
    let userChoice = prompt("Enter your choice: (rock,paper,scissor): ");
    userChoice = userChoice.toLowerCase();

    return userChoice;
}
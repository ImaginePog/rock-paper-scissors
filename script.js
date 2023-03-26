function GetUserChoice() {
    let userChoice = prompt("Enter your choice: (rock,paper,scissors): ");
    userChoice = userChoice.toLowerCase();
    
    console.log(userChoice);
    
    return userChoice;
}

const options = ["rock", "paper", "scissors"];

function GetComputerChoice() {
    let computerChoice;
    let randNum = Math.floor(Math.random() * 3);
    computerChoice = options[randNum];
    
    console.log(computerChoice);

    return computerChoice;
}

function playRound(userChoice,computerChoice) {
    if(userChoice == computerChoice)
        return "Draw";

    switch(userChoice) {
        case "rock":
            if(computerChoice == "paper")
                return "Loss";
            if(computerChoice == "scissors")
                return "Win";
            break;
        case "paper":
            if(computerChoice == "scissors")
                return "Loss";
            if(computerChoice == "rock")
                return "Win";
            break;
        case "scissors":
            if(computerChoice == "rock")
                return "Loss";
            if(computerChoice == "paper")
                return "Win";
            break;
    }
}
    
function game() {
    let computerScore = 0;
    let playerScore = 0;

    let firstTo = 5;

    let quit = false;
    while(!quit)
    {
        let result = playRound(GetUserChoice(), GetComputerChoice());

        switch(result) {
            case "Win":
                ++playerScore;
                break;
            case "Loss":
                ++computerScore;
                break;
        }

        if(playerScore === firstTo || computerScore === firstTo)
            quit = true;

        console.log("The score: ");
        console.log("Player:", playerScore, "Computer:", computerScore);
    }

    if(playerScore > computerScore)
        console.log("You win!");
    else 
        console.log("You lose!");
}

game();

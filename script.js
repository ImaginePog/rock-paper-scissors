/************* CONSTANTS ***************/
const options = ["rock", "paper", "scissors"];
const selectBtns = document.querySelectorAll(".select-btn");
const navBtn = document.querySelector(".nav-btn");
const infoDisplay = document.querySelector(".info-display");
const playerMove = document.querySelector(".player-display");
const logContainer = document.querySelector(".log-container");
const scoreDisplay = document.querySelector(".score-display");

console.log(infoDisplay);

/************* LOGIC ***************/
let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
	let computerSelection;
	let randNum = Math.floor(Math.random() * 3);
	computerSelection = options[randNum];

	console.log(computerSelection);

	return computerSelection;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) return "Draw";

	switch (playerSelection) {
		case "rock":
			if (computerSelection == "paper") return "Loss";
			if (computerSelection == "scissors") return "Win";
			break;
		case "paper":
			if (computerSelection == "scissors") return "Loss";
			if (computerSelection == "rock") return "Win";
			break;
		case "scissors":
			if (computerSelection == "rock") return "Loss";
			if (computerSelection == "paper") return "Win";
			break;
	}
}

function calculateScore(result) {
	if (result !== "Draw") {
		switch (result) {
			case "Win":
				++playerScore;
				break;
			case "Loss":
				++computerScore;
				break;
		}
	}
	console.log("Player score:", playerScore, "Computer score:", computerScore);
}

/************* UI ***************/
let playerSelection;
let canConfirm = false;

function resetSelection() {
	const selectedBtn = document.querySelector(".select-btn.selected");
	if (selectedBtn !== null) selectedBtn.classList.toggle("selected");
}

function resetUI(e) {
	playerMove.textContent = "Choose and press the confirm button.";
	infoDisplay.textContent = "The computer is waiting...";
	selectBtns.forEach((button) => {
		button.addEventListener("click", selectMove);
	});

	navBtn.addEventListener("click", confirmMove);
	navBtn.removeEventListener("click", resetUI);
	navBtn.textContent = "Confirm";
}

function selectMove(e) {
	const btn = e.target;

	if (btn.classList.contains("selected")) {
		resetSelection();
		canConfirm = false;
	} else {
		resetSelection();
		btn.classList.add("selected");
		canConfirm = true;
	}
}

function confirmMove() {
	if (!canConfirm) {
		alert("Please select a move");
		return;
	}

	canConfirm = false;

	playerSelection = document.querySelector(".selected").getAttribute("id");
	resetSelection();

	displayPlayerMove(playerSelection);
	startRound();
}

/************* DISPLAY ***************/

function displayPlayerMove(playerSelection) {
	playerMove.textContent = `You chose ${playerSelection}`;
}

function displayComputerMove(computerSelection) {
	infoDisplay.textContent =
		`The computer chose ${computerSelection}.` +
		" Press the next button for next round.";
}

function logResult(result) {
	const resultDisplay = document.createElement("p");
	resultDisplay.textContent = result;
	logContainer.appendChild(resultDisplay);
}

function displayNextRound() {
	navBtn.textContent = "Next Round";
	navBtn.addEventListener("click", resetUI);
}

function displayScore() {
	scoreDisplay.textContent = `Score: ${playerScore} - ${computerScore}`;
}

/************* GAME ***************/

function endPlayerTurn() {
	selectBtns.forEach((button) => {
		button.removeEventListener("click", selectMove);
	});

	navBtn.removeEventListener("click", confirmMove);
}

function startRound() {
	console.log("started");
	endPlayerTurn();
	const computerSelection = getComputerSelection();
	displayComputerMove(computerSelection);

	const result = playRound(playerSelection, computerSelection);

	calculateScore(result);
	displayScore();
	logResult(result);

	if (playerScore >= 5 || computerScore >= 5) {
		let displayText;
		if (playerScore > computerScore) {
			displayText = "Congratulations you win!!";
		} else {
			displayText = "You lose :(";
		}
		infoDisplay.textContent =
			displayText + " Press f5 to restart or reload";
	} else {
		displayNextRound();
	}
}

/************* START ***************/

selectBtns.forEach((button) => {
	button.addEventListener("click", selectMove);
});

navBtn.addEventListener("click", confirmMove);

const options = ["rock", "paper", "scissors"];

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

function startRound() {}

const buttons = document.querySelectorAll(".select-btn");
const confirmBtn = document.querySelector(".confirm-btn");

console.log(buttons);

function resetSelection() {
	const selectedBtn = document.querySelector(".select-btn.selected");
	if (selectedBtn !== null) selectedBtn.classList.toggle("selected");
}

function selectMove(e) {
	const btn = e.target;

	if (btn.classList.contains("selected")) {
		resetSelection();
	} else {
		resetSelection();
		btn.classList.add("selected");
	}
}

function confirmMove() {
	const selectedBtn = document.querySelector(".select-btn.selected");
	if (selectedBtn === null) alert("Please select a move");
	else {
		console.log(selectedBtn.getAttribute("id"));
	}
}

buttons.forEach((button) => {
	button.addEventListener("click", selectMove);
});

confirmBtn.addEventListener("click", confirmMove);

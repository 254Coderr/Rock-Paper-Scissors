// ======= Rock, Paper, Scissors Interactive Game with Score Tracking =======

// Global score variables
let humanScore = 0;
let computerScore = 0;

// Start the game
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};/ Play exactly 5 rounds
const playGame = () => {
for (let round = 1; round <= 5; round++) {
alert(`Round ${round} of 5`);
let playerChoice = getPlayerChoice();
playerChoice = formatPlayerChoice(playerChoice);

if (playerChoice === "") {
invalidChoice();
round--; // redo this round
continue;
}

if (!playerChoice) {
decidedNotToPlay();
return;
}

playerChoice = evaluatePlayerChoice(playerChoice);
if (!playerChoice) {
invalidChoice();
round--; // redo this round
continue;
}

const computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice); // NEW function with scoring logic
}

displayFinalResults();
thanksForPlaying();
};



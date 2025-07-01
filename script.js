// ======= Rock, Paper, Scissors Interactive Game with Score Tracking =======

// Global score variables
let humanScore = 0;
let computerScore = 0;

// Start the game
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};// Play exactly 5 rounds
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


// Prompt user input
const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
    };
    
    // Format user input
    const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
    } else {
    return false;
    }
    };
    
    // Handle if user cancels the game
    const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
    };
    
    // Validate choice
    const evaluatePlayerChoice = (playerChoice) => {
    const validChoices = ["rock", "paper", "scissors"];
    return validChoices.includes(playerChoice) ? playerChoice : false;
    };
    
    // Inform user of bad input
    const invalidChoice = () => {
    alert("Invalid input. Please enter rock, paper, or scissors.");
    };

// Random computer choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
    };
    
    // Compare choices and update scores
    const playRound = (player, computer) => {
    let message = `You chose ${player}.\nComputer chose ${computer}.\n`;
    
    if (player === computer) {
    message += "It's a tie!";
    } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
    ) {
    humanScore++;
    message += "You win this round!";
    } else {
    computerScore++;
    message += "Computer wins this round!";
    }
    
    alert(message + `\nScore: You ${humanScore} - ${computerScore} Computer`);
    };
    // Show final result after 5 rounds
const displayFinalResults = () => {
    let finalMessage = `Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}\n`;
  
    if (humanScore > computerScore) {
      finalMessage += "🎉 You win the game!";
    } else if (computerScore > humanScore) {
      finalMessage += "💻 Computer wins the game!";
    } else {
      finalMessage += "🤝 It's a tie game!";
    }



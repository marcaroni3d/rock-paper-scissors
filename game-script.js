
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let gameWinner = '';

// Poor mans loop - 5 round game
var number = 0;
for (let i = 0; i < 5; i++) {
    game();
    number++;
    if (number == 5) {
        endResult();
        console.log("End Result: " + gameWinner);
    }
}

function endResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        gameWinner = "You win the game :)"
    }
    if (playerScore < computerScore) {
        gameWinner = "You lose the game :("
    }
    if (playerScore == computerScore) {
        gameWinner = "Tie game!"
    }
}

function game() {
    // Prompt user for input and store as string
    let playerSelection = (window.prompt("Rock, Paper, or Scissors?")).toLowerCase();

    // Function that randomly returns either 'Rock' 'Paper' or 'Scissors' and store as string
    const myArray = ["rock", "paper", "scissors"];
    function computerPlay() {
        return myArray[Math.floor(Math.random() * myArray.length)];
    }
    let computerSelection = computerPlay();

    // Compare playerSelection to computerSelection
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            roundWinner = 'Tie';
            return roundWinner;
        }
        if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            playerScore++
            roundWinner = 'Player Wins';
            return roundWinner;
        }
        if (
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {
            computerScore++
            roundWinner = 'Computer Wins';
            return roundWinner;
        }
        if (playerSelection !== 'rock' || 'paper' || 'scissors')
            computerScore++
            roundWinner = "You typed something other than Rock/Paper/Scissors, so Computer Wins."
            return roundWinner;
    }

    // Return string
    console.log("Player Selection: " + playerSelection);
    console.log("Computer Selection: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}




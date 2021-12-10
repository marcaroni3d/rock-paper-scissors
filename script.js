const choices = document.querySelectorAll('.button')
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
const roundCountDisplay = document.getElementById('round-count')
const buttonPlayAgain = document.getElementById('play-again-button')

let userChoice
let computerChoice
let userScore = 0
let computerScore = 0
let roundCount = 0


choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    computerPlay()
    getResults()
    changeComputerPhoto()
}))

function computerPlay() { 
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice.id
}

function changeComputerPhoto() {    
    if (computerChoice === "rock") {
        document.getElementById("computer-button").src = "images/hand-back-fist-regular.svg"
    } else if (computerChoice === "paper") {
        document.getElementById("computer-button").src = "images/hand-regular.svg"
    } else if (computerChoice ==="scissors") {
        document.getElementById("computer-button").src = "images/hand-scissors-regular.svg"
    }
}

function getResults() {
    const resultDisplay = document.getElementById('result')
    const gameOutput = document.querySelector('.game-output');
    const computerContent = document.querySelector('.computer-content') 

    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':   // User Wins
            userScore++     
            userScoreDisplay.innerHTML = userScore
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice +', you win!'
                gameOutput.classList.remove('grey-border', 'purple-border', 'red-border')
                gameOutput.classList.add('green-border')
                computerContent.classList.remove('grey-border-right', 'purple-border-right', 'red-border-right')
                computerContent.classList.add('green-border-right')
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':   // Computer Wins
            computerScore++ 
            computerScoreDisplay.innerHTML = computerScore
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice +', you lose!'
                gameOutput.classList.remove('grey-border', 'purple-border', 'green-border')
                gameOutput.classList.add('red-border')
                computerContent.classList.remove('grey-border-right', 'purple-border-right', 'green-border-right')
                computerContent.classList.add('red-border-right')
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':    // Draw Game
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice +", it's a draw!"
                gameOutput.classList.remove('grey-border', 'red-border', 'green-border')
                gameOutput.classList.add('purple-border')
                computerContent.classList.remove('grey-border-right', 'red-border-right', 'green-border-right')
                computerContent.classList.add('purple-border-right')
            break
        }

    roundCount++
    roundCountDisplay.innerHTML = roundCount 
}


buttonPlayAgain.addEventListener('click', () => {
    window.location.reload()
})





















/* ADVANCED

const resultDisplay = document.getElementById('result')
const choicesDisplay = document.getElementById('choices')
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice +', you win!'
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice +', you lose!'
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice +', its a draw!'
            break
        }
    console.log(userChoice)
    console.log(computerChoice)
}

*/







/* INTERMEDIATE


const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

choices.forEach(possibleChoice => {
    const button = document.createElement('button')
    button.id = possibleChoice
    button.innerHTML = possibleChoice
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
})

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'YOU WIN!'
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'YOU LOSE!'
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = 'ITS A DRAW!'
            break
    }
}

*/








/* BEGINNER

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice == 'paper') {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice == 'scissors') {
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice == 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice == 'rock') {
        result = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice == 'rock') {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice == 'paper') {
        result = 'you lost!'
    }
    resultDisplay.innerHTML = result
}

*/












/* OLD SCRIPT

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
    let playerSelection = document.getElementById('')


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


*/

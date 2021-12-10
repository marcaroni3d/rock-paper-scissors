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


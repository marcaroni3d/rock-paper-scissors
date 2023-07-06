const choices = document.querySelectorAll('.user-input')
const roundCountDisplay = document.getElementById('round-count')
const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')
const drawGameDisplay = document.getElementById('draw-games')
const playAgainButton = document.getElementById('play-again-button')
const outputDisplay = document.getElementById('output-text')

let playerChoice
let computerChoice
let roundCount = 0
let playerScore = 0
let computerScore = 0
let drawGameCount = 0

choices.forEach(choice => choice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    computerPlay()
    changeDisplay()
    getResults()
}))

function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice.id
}

function changeDisplay() {
    switch (playerChoice) {
        case 'rock':
            document.getElementById('player-choice').src = 'images/hand-back-fist-regular.svg'
            break
        case 'paper':
            document.getElementById('player-choice').src = 'images/hand-regular.svg'
            break
        case 'scissors':
            document.getElementById('player-choice').src = 'images/hand-scissors-regular.svg'
            break
    }
    switch (computerChoice) {
        case 'rock':
            document.getElementById('computer-choice').src = 'images/hand-back-fist-regular.svg'
            break
        case 'paper':
            document.getElementById('computer-choice').src = 'images/hand-regular.svg'
            break
        case 'scissors':
            document.getElementById('computer-choice').src = 'images/hand-scissors-regular.svg'
            break
    }
}

function getResults() {
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':   // WIN
            playerScore++
            playerScoreDisplay.innerHTML = playerScore
            outputDisplay.innerHTML = 'You chose ' + playerChoice + ' and the computer chose ' + computerChoice + ', <b>you win!</b>'
            break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':    // LOSS
            computerScore++
            computerScoreDisplay.innerHTML = computerScore
            outputDisplay.innerHTML = 'You chose ' + playerChoice + ' and the computer chose ' + computerChoice + ', <b>you lose...</b>'
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':    // DRAW
            drawGameCount++
            drawGameDisplay.innerHTML = drawGameCount
            outputDisplay.innerHTML = 'You chose ' + playerChoice + ' and the computer chose ' + computerChoice + ", <b>it's a draw.</b>"
            break
    }

    roundCount++
    roundCountDisplay.innerHTML = roundCount
}

playAgainButton.addEventListener('click', () => {
    window.location.reload()
})
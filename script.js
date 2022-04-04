let playerScore;
let computerScore;

const score = document.querySelector('.score');
const info = document.querySelector('.info');
const buttons = document.querySelectorAll('.selections button');

game();

function game() {
  playerScore = 0;
  computerScore = 0;

  buttons.forEach(button => button.addEventListener('click', playRound));
}

function playRound() {
  const playerSelection = this.textContent;
  const computerSelection = computerPlay();
  
  const roundResult = getRoundResult(playerSelection, computerSelection);
  switch (roundResult) {
    case -1:
      computerScore++;
      break;
    case 0:
      break;
    case 1:
      playerScore++;
      break;
  }

  score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    gameOver();
    playAgain();
    return;
  }

  info.textContent = getRoundInfo(playerSelection, computerSelection);
}

function computerPlay() {
  const choice = Math.floor(Math.random() * 3 ) + 1;

  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function getRoundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0
  }
  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Paper") {
        return -1
      }
      return 1      
    case "Paper":
      if (computerSelection === "Rock") {
        return 1
      }
      return -1 
    case "Scissors":
      if (computerSelection === "Rock") {
        return -1
      }
      return 1    
  }
}

function getRoundInfo(playerSelection, computerSelection) {  
  const result = getRoundResult(playerSelection, computerSelection);
  switch (result) {
    case -1:
      return `You Lose! ${computerSelection} beats ${playerSelection}`
    case 0:
      return `It's a tie! Both threw ${playerSelection}`
    case 1:
      return `You Win! ${playerSelection} beats ${computerSelection}`    
  }  
}

function gameOver() {
  buttons.forEach(button => button.removeEventListener('click', playRound));

  let result;
  if (playerScore > computerScore) {
    result = "You won the game. Congratulations.";
  } else {
    result = "You lost the game. Better luck next time.";
  }

  info.textContent = result;
}

function playAgain() {
  const againButton = document.createElement('button');
  againButton.classList.add('againButton');
  againButton.textContent = 'Play again?';
  
  const div = document.createElement('div');
  div.classList.add('again');
  div.appendChild(againButton);
  
  const body = document.querySelector('body');

  againButton.addEventListener('click', () => {
    body.removeChild(div);
    game();
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    info.textContent = 'Click Rock, Paper or Scissors';
  });

  body.appendChild(div);
}

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

// game();

// function game() {
//   let playerSelection;
//   let computerSelection;
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     playerSelection = capitalize(prompt("Choose Rock, Paper or Scissors:"));
//     computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//     roundResult = getRoundResult(playerSelection, computerSelection);
    // switch (roundResult) {
    //   case -1:
    //     computerScore++;
    //     break;
    //   case 0:
    //     break;
    //   case 1:
    //     playerScore++;
    //     break;
    // }
//   }
//   printWinner(playerScore, computerScore); 
// }




// function capitalize(string) {
//   return (string[0].toUpperCase() + string.slice(1).toLowerCase()).trim();
// }





// function printWinner(playerScore, computerScore) {
//   if (playerScore > computerScore) {
//     console.log(`You won ${playerScore} to ${computerScore}`)       
//   } else if (playerScore < computerScore) {
//     console.log(`You lost ${playerScore} to ${computerScore}`)
//   } else {
//     console.log(`You tied ${playerScore} to ${computerScore}`)
//   }
// }

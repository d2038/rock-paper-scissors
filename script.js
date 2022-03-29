function computerPlay() {
  const choice = Math.floor(Math.random() * 3 ) + 1
  switch (choice) {
    case 1:
      return "Rock"
    case 2:
      return "Paper"
    case 3:
      return "Scissors"
    default:
      return ""
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  const result = getResult(playerSelection, computerSelection);
  switch (result) {
    case -1:
      return `You Lose! ${computerSelection} beats ${playerSelection}`
    case 0:
      return `It's a tie! Both threw ${playerSelection}`
    case 1:
      return `You Win! ${playerSelection} beats ${computerSelection}`
    default:
      return "Something went wrong"
  }  
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function getResult(playerSelection, computerSelection) {
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
    default:
      return
  }
}
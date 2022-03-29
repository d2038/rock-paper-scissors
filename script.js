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

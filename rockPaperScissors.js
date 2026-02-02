let player = 0;
const computer = Math.floor(Math.random() * 3);

if (player === 0) {
  console.log("Player picked:   Rock");
}

if (computer === 0) {
  console.log("Computer picked: Rock");
} else if (computer === 1) {
  console.log("Computer picked: Paper");
} else if (computer === 2) {
  console.log("Computer picked: Scissors");
}

console.log();

if (player === computer) {
  console.log("It is a draw!");
} else if (player === 0 && computer !== 1) {
  console.log("The player won!")
} else {console.log("The computer won!");}
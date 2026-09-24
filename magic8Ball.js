const askButton = document.querySelector("#ask-button");
const questionInput = document.querySelector("#question-input");
const magicResult = document.querySelector("#magic-result");
const answers = [
  "Ano, rozhodně.",
  "Vypadá to nadějně.",
  "Bez pochyb.",
  "Odpověď je nejasná, zkus to znovu.",
  "Zeptej se později.",
  "Teď ti to raději neřeknu.",
  "Moje zdroje říkají ne.",
  "Nevypadá to nejlépe."
];

function askMagicBall() {
  const answer = answers[Math.floor(Math.random() * answers.length)];
  magicResult.textContent = answer;
  magicResult.classList.remove("result-pop");
  void magicResult.offsetWidth;
  magicResult.classList.add("result-pop");
  window.writeToTerminal("Magická koule", answer);
}

askButton.addEventListener("click", askMagicBall);
questionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") askMagicBall();
});
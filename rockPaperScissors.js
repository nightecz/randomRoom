const choiceButtons = document.querySelectorAll(".choice-button");
const gameResult = document.querySelector("#game-result");
const choices = ["Kámen", "Papír", "Nůžky"];

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = Number(button.dataset.choice);
    const computerChoice = Math.floor(Math.random() * choices.length);
    const outcome = (playerChoice - computerChoice + 3) % 3;
    const message = outcome === 0
      ? "Remíza"
      : outcome === 1
        ? "Vyhráváš"
        : "Počítač vyhrává";

    gameResult.textContent = `${message} · ${choices[playerChoice]} vs. ${choices[computerChoice]}`;
    window.recordStatistic("game", message);
    gameResult.classList.remove("result-pop");
    void gameResult.offsetWidth;
    gameResult.classList.add("result-pop");
    window.writeToTerminal("Kámen / nůžky / papír", gameResult.textContent);
  });
});
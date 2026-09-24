const flipButton = document.querySelector("#flip-button");
const coinResult = document.querySelector("#coin-result");

flipButton.addEventListener("click", () => {
	const result = Math.random() > 0.5 ? "Panna" : "Orel";
	coinResult.textContent = result;
	coinResult.classList.remove("result-pop");
	void coinResult.offsetWidth;
	coinResult.classList.add("result-pop");
	window.writeToTerminal("Mince", result);
});
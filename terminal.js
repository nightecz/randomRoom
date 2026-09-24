const terminalOutput = document.querySelector("#terminal-output");
const clearTerminalButton = document.querySelector("#clear-terminal");

window.writeToTerminal = (experiment, result) => {
  const entry = document.createElement("p");
  const time = document.createElement("time");
  const timestamp = new Date().toLocaleTimeString("cs-CZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  entry.className = "terminal-entry";
  time.textContent = `[${timestamp}] ${experiment}`;
  entry.append(time, `> ${result}`);
  terminalOutput.append(entry);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

clearTerminalButton.addEventListener("click", () => {
  terminalOutput.innerHTML = '<p><span class="terminal-prompt">$</span> log cleared</p>';
});
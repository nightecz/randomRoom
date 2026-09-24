const statisticsOutput = document.querySelector("#statistics-output");
const clearStatisticsButton = document.querySelector("#clear-statistics");
const statisticsStorageKey = "random-room-statistics";
const statisticGroups = [
  { id: "coin", label: "Mince", labels: ["Orel", "Panna"] },
  { id: "magic", label: "Magická koule", labels: [] },
  { id: "game", label: "Kámen / nůžky / papír", labels: ["Vyhráváš", "Remíza", "Počítač vyhrává"] }
];

let statistics = loadStatistics();

function loadStatistics() {
  try {
    return JSON.parse(localStorage.getItem(statisticsStorageKey)) || {};
  } catch {
    return {};
  }
}

function saveStatistics() {
  localStorage.setItem(statisticsStorageKey, JSON.stringify(statistics));
}

function renderStatistics() {
  const hasResults = Object.values(statistics).some((group) => Object.values(group).some(Boolean));

  if (!hasResults) {
    statisticsOutput.innerHTML = '<p class="statistics-empty">Zatím žádná data. Každý pokus se tu projeví.</p>';
    return;
  }

  statisticsOutput.innerHTML = statisticGroups.map((group) => {
    const results = { ...(statistics[group.id] || {}) };
    group.labels.forEach((label) => {
      if (!(label in results)) results[label] = 0;
    });
    const entries = Object.entries(results).sort((first, second) => second[1] - first[1]);
    const total = entries.reduce((sum, [, count]) => sum + count, 0);

    if (!total) return "";

    return `<div class="stat-group">
      <div class="stat-group-title"><span>${group.label}</span><span class="stat-total">${total} ${total === 1 ? "pokus" : "pokusů"}</span></div>
      ${entries.map(([label, count]) => {
        const percentage = Math.round((count / total) * 100);
        return `<div class="stat-row"><span class="stat-label">${label}</span><span class="stat-value">${count} · ${percentage}%</span><div class="stat-bar"><span style="width: ${percentage}%"></span></div></div>`;
      }).join("")}
    </div>`;
  }).join("");
}

window.recordStatistic = (groupId, result) => {
  if (!statistics[groupId]) statistics[groupId] = {};
  statistics[groupId][result] = (statistics[groupId][result] || 0) + 1;
  saveStatistics();
  renderStatistics();
};

clearStatisticsButton.addEventListener("click", () => {
  statistics = {};
  localStorage.removeItem(statisticsStorageKey);
  renderStatistics();
});

renderStatistics();
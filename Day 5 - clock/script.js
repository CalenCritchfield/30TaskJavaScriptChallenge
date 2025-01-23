let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let period = "";

  if (!is24Hour) {
    period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
  }

  const displayHours = hours.toString().padStart(2, "0");
  const displayMinutes = minutes.toString().padStart(2, "0");
  const displaySeconds = seconds.toString().padStart(2, "0");

  document.getElementById(
    "clock"
  ).textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

document.getElementById("format-toggle").addEventListener("click", function () {
  is24Hour = !is24Hour;
  this.textContent = is24Hour ? "Switch to 12H" : "Switch to 24H";
  updateClock();
});

setInterval(updateClock, 1000);

updateClock();

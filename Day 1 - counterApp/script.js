const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const counter = document.getElementById("counter");

let count = 0;

function updateCounter() {
  counter.innerHTML = count;
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

updateCounter();

incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

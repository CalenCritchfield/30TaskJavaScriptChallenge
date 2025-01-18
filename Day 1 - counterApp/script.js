const counter = document.getElementById("counter");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const incrementBtn = document.getElementById("increment-btn");

let count = 0;

function updateCount() {
  counter.textContent = count;

  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

decrementBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});

incrementBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

updateCount();

const counter = document.getElementById("counter");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const incrementBtn = document.getElementById("increment-btn");

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

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

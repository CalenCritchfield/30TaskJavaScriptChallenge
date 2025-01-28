const bill = document.getElementById("bill");
const people = document.getElementById("people");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTip = document.getElementById("customTip");
const tipAmount = document.getElementById("tipAmount");
const tipPerPerson = document.getElementById("tipPerPerson");
const totalAmount = document.getElementById("totalAmount");
const errors = {
  bill: document.getElementById("billError"),
  tip: document.getElementById("tipError"),
  people: document.getElementById("peopleError"),
};

let selectedTip = 0;

function calculateTip() {
  const billValue = parseFloat(bill.value);
  const peopleValue = parseInt(people.value);
  const tipValue = selectedTip;

  // Reset errors
  Object.values(errors).forEach((error) => (error.style.display = "none"));

  // Validate inputs
  let hasError = false;
  if (!billValue || billValue <= 0) {
    errors.bill.style.display = "block";
    hasError = true;
  }
  if (!tipValue || tipValue < 0) {
    errors.tip.style.display = "block";
    hasError = true;
  }
  if (!peopleValue || peopleValue < 1) {
    errors.people.style.display = "block";
    hasError = true;
  }

  if (hasError) {
    resetResults();
    return;
  }

  const tipTotal = billValue * (tipValue / 100);
  const total = billValue + tipTotal;
  const tipPerPersonValue = tipTotal / peopleValue;

  tipAmount.textContent = `R${tipTotal.toFixed(2)}`;
  tipPerPerson.textContent = `R${tipPerPersonValue.toFixed(2)}`;
  totalAmount.textContent = `R${total.toFixed(2)}`;
}

function resetResults() {
  tipAmount.textContent = "R0.00";
  tipPerPerson.textContent = "R0.00";
  totalAmount.textContent = "R0.00";
}

// Event listeners
tipButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipButtons.forEach((b) => b.classList.remove("active"));

    if (btn.dataset.tip === "custom") {
      customTip.style.display = "block";
      customTip.focus();
    } else {
      btn.classList.add("active");
      customTip.style.display = "none";
      selectedTip = parseFloat(btn.dataset.tip);
      calculateTip();
    }
  });
});

customTip.addEventListener("input", (e) => {
  selectedTip = parseFloat(e.target.value);
  calculateTip();
});

[bill, people].forEach((input) => {
  input.addEventListener("input", calculateTip);
});

function calculateGrade() {
  const pointsEarnedInput = document.getElementById("pointsEarned");
  const totalPointsInput = document.getElementById("totalPoints");
  const resultDiv = document.getElementById("result");

  const pointsEarned = Number(pointsEarnedInput.value);
  const totalPoints = Number(totalPointsInput.value);

  resultDiv.style.display = "block";
  resultDiv.classList.remove("error", "success");

  if (pointsEarnedInput.value === "" || totalPointsInput.value === "") {
    displayError("Please enter both points earned and total points");
    return;
  }

  if (isNaN(pointsEarned) || isNaN(totalPoints)) {
    displayError("Please enter valid numbers");
    return;
  }

  if (pointsEarned < 0 || totalPoints <= 0) {
    displayError(
      "Points cannot be negative and total points must be greater than 0"
    );
    return;
  }

  if (pointsEarned > totalPoints) {
    displayError("Points earned cannot be greater than total points");
    return;
  }

  const percentage = (pointsEarned / totalPoints) * 100;

  let grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  resultDiv.classList.add("success");
  resultDiv.innerHTML = `
    <strong>Your Results:</strong><br>
    Score: ${pointsEarned}/ ${totalPoints} <br>
    Percentage: ${percentage.toFixed(1)}%<br>
    Grade: ${grade}
    `;
}

function displayError(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.add("error");
  resultDiv.innerHTML = message;
}

const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculateGrade);

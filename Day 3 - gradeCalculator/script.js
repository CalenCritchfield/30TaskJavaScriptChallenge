function calculateGrade() {
  const pointsEarnedInput = document.getElementById("pointsEarned");
  const totalPointsInput = document.getElementById("totalPoints");
  const resultDiv = document.getElementById("result");

  const pointsEarned = pointsEarnedInput.value;
  const totalPoints = totalPointsInput.value;

  resultDiv.style.display = "block";
  resultDiv.classList.remove("error", "success");

  if (!pointsEarned || !totalPoints) {
    displayError(
      "Please enter a number in both total points and earned points"
    );
    return;
  }
  if (isNaN(pointsEarned) || isNaN(totalPoints)) {
    displayError(
      "Please enter a valid number in points earned and in total points"
    );
    return;
  }
  if (pointsEarned > totalPoints) {
    displayError("Points earned cannot be higher than total point points");
    return;
  }
  if (pointsEarned < 0 || totalPoints <= 0) {
    displayError("Points earned and total points cannot be a negative number");
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
  <strong>Your Result</strong><br>
  Score: ${pointsEarned}/${totalPoints}<br>
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

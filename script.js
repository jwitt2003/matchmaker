// Constants for desired answers and thresholds
const desiredAnswers = [1, 5, 3, 4, 2]; // Adjust these based on your "true love" criteria
const TRUE_LOVE_THRESHOLD = 80;
const FRIEND_THRESHOLD = 60;

document.getElementById('loveForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user answers
  const userAnswers = [
    Number(document.getElementById('q1').value),
    Number(document.getElementById('q2').value),
    Number(document.getElementById('q3').value),
    Number(document.getElementById('q4').value),
    Number(document.getElementById('q5').value)
  ];

  let totalCompatibility = 100;

  // Calculate compatibility
  for (let i = 0; i < userAnswers.length; i++) {
    const scoreDifference = Math.abs(userAnswers[i] - desiredAnswers[i]);
    totalCompatibility -= scoreDifference * 5;
  }

  // Display results
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('compatibility-score').textContent = `Your Compatibility Score is: ${totalCompatibility}%`;

  // Display remark based on thresholds
  let remark = '';
  if (totalCompatibility >= TRUE_LOVE_THRESHOLD) {
    remark = 'You are a perfect match! 💕';
  } else if (totalCompatibility >= FRIEND_THRESHOLD) {
    remark = 'You might be good friends! 🤝';
  } else {
    remark = 'Better run away! 🏃‍♀️';
  }
  document.getElementById('remark').textContent = remark;
});

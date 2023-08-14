const userInput = document.getElementById('userInput');
const startButton = document.querySelector('.timer button');
const countDownText = document.getElementById('countDown');
const endTimeText = document.getElementById('endTime');

// Add event listener to the start button
startButton.addEventListener('click', startCountdown);

// Function to start the countdown
function startCountdown() {
  // Disable user input and start button during the countdown
  userInput.disabled = true;
  startButton.disabled = true;

  // Get the duration from the user input
  const duration = userInput.value * 60; // Convert minutes to seconds

  // Calculate the end time
  const endTime = new Date(Date.now() + duration * 1000);

  // Update the end time text
  // endTimeText.textContent = `End Time: ${formatClockTime(endTime)}`;

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Function to update the countdown
  function updateCountdown() {
    // Calculate the remaining time
    const currentTime = Date.now();
    const remainingTime = Math.round((endTime - currentTime) / 1000);

    // Check if the countdown has ended
    if (remainingTime < 0) {
      // Clear the countdown interval
		  // Calculate the end time
  const endTimes = new Date(Date.now() + duration * 1000);

  // Update the end time text
  endTimeText.textContent = `End Time: ${formatClockTime(endTimes)}`;
      clearInterval(countdownInterval);

      // Update the countdown text and enable user input and start button
      countDownText.textContent = 'Countdown Ended';
      userInput.disabled = false;
      startButton.disabled = false;

      return;
    }

    // Update the countdown text
    countDownText.textContent = `Remaining Time: ${formatTime(remainingTime)}`;
  }
}

// Function to format time (hh:mm:ss)
function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Function to format clock time (hh:mm AM/PM)
function formatClockTime(time) {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${padZero(minutes)} ${amPm}`;
}

// Function to pad zeros to single-digit numbers
function padZero(num) {
  return num.toString().padStart(2, '0');
}
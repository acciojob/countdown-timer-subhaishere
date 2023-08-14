// Your script here.
// Your script here.
const userInput = document.getElementById('userInput');
const startButton = document.querySelector('.timer button');
const countdownDisplay = document.getElementById('countDown');
const endTimeDisplay = document.getElementById('endTime');

startButton.addEventListener('click', startCountdown);

function startCountdown() {
    const duration = parseInt(userInput.value, 10);
    
    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }
    
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + duration * 60000);
    
    updateDisplay(endTime);
    
    const countdownInterval = setInterval(() => {
        const now = new Date();
        const remainingTime = endTime - now;
        
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            updateDisplay(endTime, true);
        } else {
            updateDisplay(endTime);
        }
    }, 1000);
}

function updateDisplay(endTime, countdownEnded = false) {
    const now = new Date();
    const remainingTime = endTime - now;
    
    const remainingMinutes = Math.floor(remainingTime / 60000);
    const remainingSeconds = Math.floor((remainingTime % 60000) / 1000);
    
    const formattedEndTime = countdownEnded ? formatTime(endTime) : '-';
    
    countdownDisplay.textContent = `Remaining time: ${remainingMinutes}m ${remainingSeconds}s`;
    endTimeDisplay.textContent = `Countdown ends at: ${formattedEndTime}`;
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}
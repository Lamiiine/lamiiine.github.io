// Set the date for the next BAC exam internet shutdown
function getNextExamDate() {
    // Set the BAC exam date to June 15, 2025
    return new Date(2025, 5, 15, 0, 0, 0);
}

// Update the countdown timer
function updateCountdown() {
    const examDate = getNextExamDate();
    const currentDate = new Date();
    
    // Calculate time difference
    const timeDifference = examDate - currentDate;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Update the HTML elements with positive values only
    document.getElementById('days').textContent = Math.max(0, days).toString().padStart(2, '0');
    document.getElementById('hours').textContent = Math.max(0, hours).toString().padStart(2, '0');
    document.getElementById('minutes').textContent = Math.max(0, minutes).toString().padStart(2, '0');
    document.getElementById('seconds').textContent = Math.max(0, seconds).toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown(); 
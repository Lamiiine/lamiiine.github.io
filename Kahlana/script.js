// Set the date for the next BAC exam internet shutdown
function getNextExamDate() {
    // Set the BAC exam date to June 15, 2025 at 08:00 AM
    return new Date(2025, 5, 15, 8, 0, 0);
}

function updateCountdown() {
    const examDate = getNextExamDate();
    const currentDate = new Date();
    const timeDifference = examDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = Math.max(0, days).toString().padStart(2, '0');
    document.getElementById('hours').textContent = Math.max(0, hours).toString().padStart(2, '0');
    document.getElementById('minutes').textContent = Math.max(0, minutes).toString().padStart(2, '0');
    document.getElementById('seconds').textContent = Math.max(0, seconds).toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

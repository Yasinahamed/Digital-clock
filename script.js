function updateClock() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();

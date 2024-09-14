function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the time immediately

// Fullscreen function
const fullscreenBtn = document.getElementById('fullscreen-btn');
fullscreenBtn.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.remove(); // Remove the fullscreen button after entering fullscreen
    }
}

// Optional: Exit fullscreen and show the button again (if needed)
// You can listen for the exit from fullscreen event to bring the button back
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        const clockContainer = document.querySelector('.clock-container');
        const newButton = document.createElement('button');
        newButton.id = 'fullscreen-btn';
        newButton.textContent = 'Go Fullscreen';
        newButton.addEventListener('click', toggleFullscreen);
        clockContainer.appendChild(newButton);
    }
});

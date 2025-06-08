// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Countdown timer
function updateCountdown() {
    // Set the event date for September 7, 2025 at 4:00 PM (16:00:00)
    const eventDate = new Date('September 7, 2025 16:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    // Calculate time components
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Get the elements to update
    const countdownNumbers = document.querySelectorAll('.countdown-number'); // Select all number elements

    if (timeRemaining > 0) {
        // Update the text content of each countdown number element
        countdownNumbers[0].textContent = days.toString().padStart(2, '0');
        countdownNumbers[1].textContent = hours.toString().padStart(2, '0');
        countdownNumbers[2].textContent = minutes.toString().padStart(2, '0');
        countdownNumbers[3].textContent = seconds.toString().padStart(2, '0');
    } else {
        // If the countdown is over
        countdownNumbers[0].textContent = '00';
        countdownNumbers[1].textContent = '00';
        countdownNumbers[2].textContent = '00';
        countdownNumbers[3].textContent = '00';
        // You can add a message here, e.g.,
        // document.querySelector('.countdown').innerHTML = "<h2>THE EVENT IS LIVE!</h2>";
        clearInterval(countdownInterval); // Stop the interval when the event is over
    }
}

// Initial call to set the countdown immediately
updateCountdown();

// Update countdown every second and store the interval ID
const countdownInterval = setInterval(updateCountdown, 1000);
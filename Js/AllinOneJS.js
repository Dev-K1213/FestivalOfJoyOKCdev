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
let countdownInterval; // Declare it outside to be able to clear it

function updateCountdown() {
    // Define the event date specifically for Oklahoma City (CDT/UTC-5 for Sept 7, 2025)
    // Using ISO format with timezone offset is generally most reliable.
    const eventDate = new Date('2025-09-07T16:00:00-05:00').getTime(); // 4:00 PM on Sept 7, 2025 in UTC-5 (CDT)
    // Or if you prefer the string format, be explicit with GMT offset:
    // const eventDate = new Date('September 7, 2025 16:00:00 GMT-0500').getTime();

    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    const countdownNumbers = document.querySelectorAll('.countdown-number');

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownNumbers[0].textContent = days.toString().padStart(2, '0');
        countdownNumbers[1].textContent = hours.toString().padStart(2, '0');
        countdownNumbers[2].textContent = minutes.toString().padStart(2, '0');
        countdownNumbers[3].textContent = seconds.toString().padStart(2, '0');
    } else {
        // Countdown has finished
        countdownNumbers[0].textContent = '00';
        countdownNumbers[1].textContent = '00';
        countdownNumbers[2].textContent = '00';
        countdownNumbers[3].textContent = '00';
        clearInterval(countdownInterval); // Stop the timer
        // Optional: Display a message that the event has started
        // document.querySelector('.countdown').innerHTML = "<h2>The Festival of Joy is LIVE!</h2>";
    }
}

// Initial call to set the countdown immediately
updateCountdown();

// Update countdown every second
countdownInterval = setInterval(updateCountdown, 1000);